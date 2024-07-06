"use client";

import { Canvas, Object3DNode, extend, useThree } from "@react-three/fiber";
import { Color, Fog, PerspectiveCamera, Scene, Vector3 } from "three";
import { useEffect, useRef, useState } from "react";

import { OrbitControls } from "@react-three/drei";
import ThreeGlobe from "three-globe";
import countries from "@/data/globeData/globe.json";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}

extend({ ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;

type ObjAccessor<T> = (obj: object) => T;

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

type GenericObject = Record<string, unknown>;

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

let numbersOfRings = [0];

const Globe = ({ globeConfig, data }: WorldProps) => {
  const [globeData, setGlobeData] = useState<
    | {
        size: number;
        order: number;
        color: (t: number) => string;
        lat: number;
        lng: number;
      }[]
    | null
  >(null);

  const globeRef = useRef<ThreeGlobe | null>(null);

  const defaultProps = {
    pointSize: 1,
    atmosphereColor: "#ffffff",
    showAtmosphere: true,
    atmosphereAltitude: 0.1,
    polygonColor: "rgba(255,255,255,0.7)",
    globeColor: "#1d072e",
    emissive: "#000000",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    arcTime: 2000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  useEffect(() => {
    if (globeRef.current) {
      _buildData();
      _buildMaterial();
    }
  }, [globeRef.current]);

  const _buildMaterial = () => {
    if (!globeRef.current) return;

    const globeMaterial = globeRef.current.globeMaterial() as unknown as {
      color: Color;
      emissive: Color;
      emissiveIntensity: number;
      shininess: number;
    };
    globeMaterial.color = new Color(globeConfig.globeColor);
    globeMaterial.emissive = new Color(globeConfig.emissive);
    globeMaterial.emissiveIntensity = globeConfig.emissiveIntensity || 0.1;
    globeMaterial.shininess = globeConfig.shininess || 0.9;
  };

  const _buildData = () => {
    const arcs = data;
    const points = [];
    for (let i = 0; i < arcs.length; i++) {
      const arc = arcs[i];
      const rgb = hexToRgb(arc.color) as { r: number; g: number; b: number };
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: validateNumber(arc.startLat),
        lng: validateNumber(arc.startLng),
      });
      points.push({
        size: defaultProps.pointSize,
        order: arc.order,
        color: (t: number) => `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${1 - t})`,
        lat: validateNumber(arc.endLat),
        lng: validateNumber(arc.endLng),
      });
    }

    // remove duplicates for same lat and lng
    const filteredPoints = points.filter(
      (v, i, a) =>
        a.findIndex((v2) =>
          ["lat", "lng"].every(
            (k) => v2[k as "lat" | "lng"] === v[k as "lat" | "lng"],
          ),
        ) === i,
    );

    setGlobeData(filteredPoints);
  };

  const validateNumber = (value: number): number => {
    if (isNaN(value)) {
      console.error(`Invalid number detected: ${value}. Replacing with 0.`);
      return 0;
    }
    return value;
  };

  useEffect(() => {
    if (globeRef.current && globeData) {
      globeRef.current
        .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .showAtmosphere(defaultProps.showAtmosphere)
        .atmosphereColor(defaultProps.atmosphereColor)
        .atmosphereAltitude(defaultProps.atmosphereAltitude)
        .hexPolygonColor(() => {
          return defaultProps.polygonColor;
        });
      startAnimation();
    }
  }, [globeData]);

  const startAnimation = () => {
    if (!globeRef.current || !globeData) return;

    globeRef.current
      .arcsData(data)
      .arcStartLat(createNumberAccessor("startLat"))
      .arcStartLng(createNumberAccessor("startLng"))
      .arcEndLat(createNumberAccessor("endLat"))
      .arcEndLng(createNumberAccessor("endLng"))
      .arcColor(createStringAccessor("color"))
      .arcAltitude(createNumberAccessor("arcAlt"))
      .arcStroke(() => {
        return [0.32, 0.28, 0.3][Math.round(Math.random() * 2)];
      })
      .arcDashLength(defaultProps.arcLength)
      .arcDashInitialGap(createNumberAccessor("order"))
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaultProps.arcTime);

    globeRef.current
      .pointsData(data)
      .pointColor(createStringAccessor("color"))
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globeRef.current
      .ringsData([])
      .ringColor((t: number) => {
        return computeColorBasedOnTime(t);
      })
      .ringMaxRadius(defaultProps.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod(
        (defaultProps.arcTime * defaultProps.arcLength) / defaultProps.rings,
      );
  };

  useEffect(() => {
    if (!globeRef.current || !globeData) return;

    const interval = setInterval(() => {
      if (!globeRef.current || !globeData) return;
      numbersOfRings = genRandomNumbers(
        0,
        data.length,
        Math.floor((data.length * 4) / 5),
      );

      globeRef.current.ringsData(
        globeData.filter((_, i) => numbersOfRings.includes(i)),
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [globeRef.current, globeData]);

  return (
    <>
      <threeGlobe ref={globeRef} />
    </>
  );
};

export function WebGLRendererConfig() {
  const { gl, size } = useThree();

  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0xffaaff, 0);
  }, [gl, size]);

  return null;
}

const World = ({ globeConfig, data }: WorldProps) => {
  const scene = new Scene();
  scene.fog = new Fog(0xffffff, 400, 2000);

  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, 1.2, 180, 1800)}>
      <ambientLight
        color={new Color(globeConfig.ambientLight || "#ffffff")}
        // eslint-disable-next-line react/no-unknown-property
        intensity={0.6}
      />
      <directionalLight
        color={new Color(globeConfig.directionalLeftLight || "#ffffff")}
        // eslint-disable-next-line react/no-unknown-property
        position={new Vector3(-400, 100, 400)}
        // eslint-disable-next-line react/no-unknown-property
        intensity={0.7}
      />
      <directionalLight
        color={new Color(globeConfig.directionalTopLight || "#ffffff")}
        // eslint-disable-next-line react/no-unknown-property
        position={new Vector3(-200, 500, 200)}
        // eslint-disable-next-line react/no-unknown-property
        intensity={0.7}
      />
      <pointLight
        color={new Color(globeConfig.pointLight || "#ffffff")}
        // eslint-disable-next-line react/no-unknown-property
        position={new Vector3(-200, 500, 200)}
        // eslint-disable-next-line react/no-unknown-property
        intensity={0.8}
      />
      <Globe globeConfig={globeConfig} data={data} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={300}
        maxDistance={300}
        autoRotate={globeConfig.autoRotate}
        autoRotateSpeed={globeConfig.autoRotateSpeed}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
};

export default World;

export function hexToRgb(hex: string) {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => {
    return r + r + g + g + b + b;
  });

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function genRandomNumbers(min: number, max: number, count: number) {
  const arr: number[] = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}

function createNumberAccessor(key: keyof Position): ObjAccessor<number> {
  return (obj: object): number => {
    const genericObj = obj as GenericObject; // Cast to GenericObject
    if (key in genericObj && typeof genericObj[key] === "number") {
      return validateNumber(genericObj[key] as number);
    }
    throw new Error(
      `Object does not have a valid '${key}' property or it is not a number`,
    );
  };
}

function createStringAccessor(key: keyof Position): ObjAccessor<string> {
  return (obj: object): string => {
    const genericObj = obj as GenericObject;
    if (key in genericObj && typeof genericObj[key] === "string") {
      return genericObj[key] as string;
    }
    throw new Error(`Object does not have a valid '${key}' property`);
  };
}

function computeColorBasedOnTime(time: number): string {
  const colors = ["red", "green", "blue", "yellow"];
  return colors[Math.floor(time) % colors.length];
}

const validateNumber = (value: number): number => {
  if (isNaN(value)) {
    console.error(`Invalid number detected: ${value}. Replacing with 0.`);
    return 0;
  }
  return value;
};
