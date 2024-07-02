import Link from "next/link";
import Image from "next/image";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navigation() {
  return (
    <div className="fixed top-0 z-50 h-[65px] w-full bg-purple-dark shadow-sm shadow-light-black/30 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-full items-center justify-between px-3 full:px-0">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 transition-transform hover:scale-110"
          >
            <Image
              src="/icons/rocket.webp"
              width={55}
              height={55}
              alt="Rocket"
            />

            <span className="text-size-30 font-semibold tracking-widest text-white">
              NFTs
            </span>
          </Link>
        </div>

        <DesktopNav />

        <MobileNav />
      </div>
    </div>
  );
}
