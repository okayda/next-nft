import Link from "next/link";
import dynamic from "next/dynamic";

import { heroData } from "@/constants";

import ShineBorder from "../animation/ShineBorder";
import NumberTicker from "../animation/NumberTicker";

import { globeConfig, globeLocation } from "@/data/globeData/globeData";

const World = dynamic(() => import("../animation/Globe").then((m) => m.World), {
  ssr: false,
});

export default function Hero() {
  return (
    <div className="mx-auto max-w-full px-3 text-white full:px-0">
      <div className="md:flex md:items-center md:justify-evenly">
        <div>
          <div className="text-center md:text-left">
            <span className="text-size-12 md:text-size-14 text-purple-light md:mb-1 md:block">
              NFTs & Cryptocurrency
            </span>

            <h1 className="text-size-30 md:text-size-40 mx-auto mb-4 max-w-[340px] font-semibold leading-10 md:mx-0 md:leading-tight">
              Discover best
              <span className="text-purple-light"> Blockchain </span>
              Marketplace
            </h1>

            <p className="text-size-14 md:text-size-16 mx-auto mb-6 max-w-[340px] text-light-black md:mx-0">
              NFTs & Cryptocurrency, are artworks created on the blockchain with
              unique encryption codes that can be validated for ownership.
            </p>

            <div className="text-size-16 md:text-size-18 mb-8 flex justify-center gap-4 md:justify-start">
              <Link href="/">
                <ShineBorder
                  className="center rounded-md border border-gray-700/40 bg-slate-900/30 px-4 py-2 text-center font-medium capitalize text-white"
                  color={["#764AF1", "#FE8FB5", "#FFAA40"]}
                  borderWidth={2}
                >
                  Get Started
                </ShineBorder>
              </Link>

              <Link
                href="/"
                className="rounded-md border border-gray-700 bg-slate-900/30 px-4 py-2 font-normal text-white"
              >
                Create
              </Link>
            </div>
          </div>

          <ul className="mx-auto mb-1 flex max-w-[730px] justify-evenly text-center md:justify-start md:gap-10">
            {heroData.map(
              ({ label, value }: { label: string; value: number }) => (
                <li key={label} className="flex flex-col">
                  <span className="text-size-20 md:text-size-24 font-semibold">
                    {" "}
                    <NumberTicker value={value} className="text-white" />
                    K+
                  </span>
                  <span className="text-size-12 md:text-size-14 text-light-black">
                    {label}
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>

        <div className="h-96 w-full md:h-[360px] md:w-[360px]">
          <World globeConfig={globeConfig} data={globeLocation} />
        </div>
      </div>
    </div>
  );
}
