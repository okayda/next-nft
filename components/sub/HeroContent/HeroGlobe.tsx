import dynamic from "next/dynamic";
import { globeConfig, globeLocation } from "@/data/globeData/globeData";

const World = dynamic(
  () => import("../../animation/Globe").then((m) => m.World),
  {
    ssr: false,
  },
);

export default function HeroGlobe() {
  return (
    <div className="h-96 w-full cursor-grab md:h-[360px] md:w-[360px] lg:h-[420px] lg:w-[420px] xl:h-[540px] xl:w-[540px]">
      <World globeConfig={globeConfig} data={globeLocation} />
    </div>
  );
}
