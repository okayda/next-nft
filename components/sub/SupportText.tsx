import Link from "next/link";
import Image from "next/image";

import { supports } from "@/constants";

type Support = {
  src: string;
  title: string;
  description: string;
};

export default function SupportText() {
  return (
    <>
      <h2 className="text-size-30 lg:text-size-36 mb-12 text-center text-white lg:mb-16">
        Supports
      </h2>

      <div className="mx-auto grid max-w-[600px] grid-cols-1 gap-6 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
        {supports.map(({ src, title, description }: Support) => (
          <Link
            href="/"
            key={src}
            className="flex flex-col justify-between rounded-lg border-b-[3px] border-b-gray-700/80 bg-slate-900 p-5 transition duration-200 hover:border-purple-light"
          >
            <div>
              <Image
                src={src}
                width={800}
                height={800}
                alt=""
                className="mb-5 h-[60px] w-[60px] lg:h-[70px] lg:w-[70px]"
              />

              <h3 className="text-size-20 md:text-size-24 text-white md:mb-2">
                {title}
              </h3>

              <p className="text-size-14 pb-4 pt-2 font-sans text-light-black">
                {description}
              </p>
            </div>

            <span className="text-size-12 block font-sans text-cyan-500">
              Learn more
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
