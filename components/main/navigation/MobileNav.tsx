"use client";

import Link from "next/link";
import Image from "next/image";

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

            <span className="text-3xl font-semibold tracking-widest text-white">
              NFTs
            </span>
          </SheetTitle>

          <SheetDescription className="text-left text-base font-normal text-light-black">
            NFTs & Cryptocurrency, are artworks created on the blockchain with
            unique encryption codes that can be validated for ownership.
          </SheetDescription>
        </SheetHeader>

        <ul className="mb-12 mt-8 flex flex-col gap-9 text-lg text-white">
          <li className="z-50">
            <Link href="#">Home</Link>
          </li>

          <li className="z-50">
            <Link href="#">Contact</Link>
          </li>

          <li className="z-50">
            <Link href="#">Help</Link>
          </li>
        </ul>

        <ShineBorder
          className="min-h-[60px] w-full bg-slate-900/90 p-3 text-center text-lg font-medium capitalize text-white"
          color={["#764AF1", "#FE8FB5", "#FFAA40"]}
        >
          <div className="flex justify-center gap-3">
            <span className="self-end tracking-wide">Connect Wallet</span>
            <Image src="/icons/metamask.webp" width={32} height={32} alt="" />
          </div>
        </ShineBorder>
      </SheetContent>
    </Sheet>
  );
}
