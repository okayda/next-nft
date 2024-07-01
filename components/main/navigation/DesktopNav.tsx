import Link from "next/link";
import Image from "next/image";

import BorderBeam from "@/components/animation/BorderBeam";
import ShineBorder from "@/components/animation/ShineBorder";

export default function DesktopNav() {
  return (
    <div className="hidden items-center gap-6 md:flex">
      <nav className="h-full w-80 items-center">
        <ul className="relative flex h-auto w-full items-center justify-between rounded-md bg-slate-900/90 px-5 py-2 text-sm text-white">
          <li className="z-50">
            <Link href="/">Home</Link>
          </li>

          <li className="z-50">
            <Link href="#">Contact</Link>
          </li>

          <li className="z-50">
            <Link href="#">Help</Link>
          </li>

          <BorderBeam size={300} duration={8} delay={9} />
        </ul>
      </nav>

      <Link href="/">
        <ShineBorder
          className="center min-h-[50px] bg-slate-900/90 px-5 text-center text-base font-medium capitalize text-white"
          color={["#764AF1", "#FE8FB5", "#FFAA40"]}
        >
          <div className="flex justify-center gap-3">
            <span className="self-center tracking-wide">Connect Wallet</span>
            <Image src="/icons/metamask.webp" width={28} height={28} alt="" />
          </div>
        </ShineBorder>
      </Link>
    </div>
  );
}
