import Link from "next/link";
import Image from "next/image";

import { Monoton } from "next/font/google";
const monoton = Monoton({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Footer() {
  return (
    <div className="footer">
      <div className="mx-auto flex max-w-full flex-col gap-y-7 px-3 py-8 lg:px-12">
        <div className="flex flex-col items-center gap-y-5 md:flex-row md:justify-between">
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

            <span
              className={`${monoton.className} text-size-28 font-semibold tracking-widest text-white`}
            >
              Rocket
            </span>
          </Link>

          <div className="text-size-16 flex gap-7 font-sans font-medium tracking-wide text-cyan-500">
            <Link
              href="https://jhon-quenano-version-3.vercel.app"
              target="_blank"
            >
              Portfolio
            </Link>

            <Link href="https://github.com/okayda" target="_blank">
              Github
            </Link>

            <Link
              href="https://www.linkedin.com/in/jhon-que%C3%B1ano-b8ab7b1ba"
              target="_blank"
            >
              LinkedIn
            </Link>
          </div>
        </div>

        <div className="text-size-14 flex flex-col justify-between gap-y-5 text-center font-sans font-medium tracking-tight md:flex-row md:items-center md:text-left">
          <p className="text-light-black">
            <span className="tracking-wide text-purple-300">
              Next.js, TailwindCSS, shadcn/UI, WebP, TypeScript
            </span>
          </p>

          <p className="text-light-black">
            Design, Inspired, Developed by
            <span className="tracking-wide text-purple-300">
              {" "}
              Jhon Queñano.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
