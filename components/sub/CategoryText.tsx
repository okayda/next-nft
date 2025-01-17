import Link from "next/link";
import Image from "next/image";

import { categoryImgs } from "@/constants";

import { MagicCard, MagicContainer } from "../animation/MagicCard";

type Category = {
  src: string;
  title: string;
  label: string;
};

export default function CategoryText() {
  return (
    <>
      <h2 className="text-size-30 lg:text-size-36 mb-12 text-center lg:mb-16">
        Browse by Category
      </h2>

      <MagicContainer
        className={
          "mx-auto grid max-w-[600px] grid-cols-1 grid-rows-8 gap-5 md:grid-cols-2 md:grid-rows-4 xl:max-w-none xl:grid-cols-4 xl:grid-rows-2 xl:gap-4 xxl:gap-8"
        }
      >
        {categoryImgs.map(({ src, title, label }: Category) => (
          <Link href="/" className="" key={src}>
            <MagicCard className="flex cursor-pointer items-center gap-4 border border-gray-700 bg-[radial-gradient(var(--mask-size)_circle_at_var(--mouse-x)_var(--mouse-y),#ffaa40_0,#9c40ff_50%,transparent_100%)]">
              <Image
                src={src}
                width={100}
                height={100}
                alt=""
                priority
                className="h-[60px] w-[60px] rounded-md"
              />

              <div>
                <h3 className="text-size-18 mb-1 font-sans font-medium">
                  {title}
                </h3>

                <p className="text-size-14 font-sans text-light-black">
                  {label}
                </p>
              </div>
            </MagicCard>
          </Link>
        ))}
      </MagicContainer>
    </>
  );
}
