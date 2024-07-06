import Link from "next/link";
import Image from "next/image";

import GridPattern from "../animation/GridPattern";

import { ctaImgs } from "@/constants";

export default function CTAText() {
  return (
    <div className="p-4 text-white md:py-10 lg:px-6">
      <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <h2 className="text-size-26 z-10 text-center">
          Sell & Buy your latest NFT with
          <span className="text-purple-light"> Rocket</span>
        </h2>

        <Link
          href="/"
          className="text-size-16 z-10 rounded-md bg-purple-light px-10 py-2"
        >
          Explore
        </Link>
      </div>

      <div className="mx-auto grid max-w-[840px] grid-cols-3 grid-rows-2 gap-3 pt-8 md:gap-6 md:pt-12">
        {ctaImgs.map(({ src, alt }: { src: string; alt: string }) => (
          <Image
            src={src}
            width={400}
            height={400}
            alt={alt}
            key={src}
            className="z-10 h-full w-full rounded-md object-cover"
            priority
          />
        ))}
      </div>

      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
      />
    </div>
  );
}
