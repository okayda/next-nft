import Globe from "@/components/ui/Globe";

export default function HeroGlobe() {
  return (
    <div className="relative h-96 w-full cursor-grab md:h-[360px] md:w-[360px] lg:h-[420px] lg:w-[420px] xl:h-[540px] xl:w-[540px]">
      <div className="absolute left-0 top-0 z-10 h-full w-full md:hidden" />

      {/* <World globeConfig={globeConfig} data={globeLocation} /> */}

      <Globe />
    </div>
  );
}
