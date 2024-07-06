"use client";

import Link from "next/link";
import Image from "next/image";

import { navigation } from "@/constants";

import ShineBorder from "@/components/animation/ShineBorder";

import { Button } from "../../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";

import { Monoton } from "next/font/google";
const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
});

export default function MobileNav() {
  return (
    <Sheet key="left">
      <SheetTrigger
        asChild
        className="relative rounded-md border border-light-black/30 md:hidden"
      >
        <Button className="p-2">
          <Image src="/icons/svg/burger.svg" width={26} height={26} alt="" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="border-r border-r-purple-light bg-purple-dark px-4 pt-8"
      >
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Image
              src="/icons/rocket.webp"
              width={55}
              height={55}
              alt="Rocket"
            />

            <span
              className={`${monoton.className} text-size-30 font-semibold tracking-widest text-white`}
            >
              Rocket
            </span>
          </SheetTitle>

          <SheetDescription className="text-size-16 border-b border-dashed pb-5 text-left font-normal text-light-black">
            NFTs, are artworks created on the blockchain with unique encryption
            codes that can be validated for ownership.
          </SheetDescription>
        </SheetHeader>

        {/* Navigation Links */}
        <ul className="text-size-16 mb-12 mt-8 flex flex-col gap-9 text-white">
          {navigation.map(
            ({ label, route }: { label: string; route: string }) => (
              <li key={label}>
                <Link href={route} className="block">
                  {label}
                </Link>
              </li>
            ),
          )}
        </ul>

        <ShineBorder
          className="min-h-[60px] w-full bg-slate-900/90 p-3 text-center font-medium capitalize text-white"
          color={["#764AF1", "#FE8FB5", "#FFAA40"]}
        >
          <div className="text-size-18 flex justify-center gap-3">
            <span className="self-center tracking-wide">Connect Wallet</span>
            <Image src="/icons/metamask.webp" width={32} height={32} alt="" />
          </div>
        </ShineBorder>
      </SheetContent>
    </Sheet>
  );
}
