import Link from "next/link";
import Image from "next/image";
import { BorderBeam } from "../animation/BorderBeam";

export default function Navbar() {
  return (
    <div className="full:px-0 fixed top-0 z-50 h-[65px] w-full bg-purple-dark px-3 shadow-sm shadow-light-black/30 backdrop-blur-md">
      <div className="mx-auto flex h-full w-full max-w-full items-center justify-between">
        <div>
          <Link
            href="/"
            className="ransform flex items-center gap-2 transition-transform hover:scale-110"
          >
            <Image
              src="/icons/rocket.webp"
              width={55}
              height={55}
              alt="Rocket"
            />

            <span className="text-3xl font-semibold tracking-widest text-white">
              NFTs
            </span>
          </Link>
        </div>

        <nav className="flex h-full w-96 items-center">
          <ul className="relative flex h-auto w-full items-center justify-between rounded-md border border-light-black/30 bg-[#080808]/15 px-5 py-2 text-sm text-white">
            <li className="z-50">
              <Link href="#">Home</Link>
            </li>

            <li className="z-50">
              <Link href="#">Contact</Link>
            </li>

            <li className="z-50">
              <Link href="#">Help</Link>
            </li>

            <BorderBeam size={192} duration={10} delay={9} />
          </ul>
        </nav>
      </div>
    </div>
  );
}
