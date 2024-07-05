import Image from "next/image";

import { cn } from "@/lib/utils";
import { collectionData } from "@/constants/index";

type Collection = {
  title: string;
  face: string;
  user: string;
  image: string[];
  description: string;
};

const gridPositions = [
  "md:col-span-2",
  "md:col-span-1",
  "md:col-span-1",
  "md:col-span-2",
];

export default function CollectionText() {
  return (
    <>
      <h2 className="text-size-26 md:text-size-30 lg:text-size-36 mb-12 text-center lg:mb-16">
        Top Collection
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        {collectionData.map(
          (
            { title, face, user, image, description }: Collection,
            index: number,
          ) => {
            return (
              <div
                key={user}
                className={cn(
                  "group/bento shadow-input row-span-1 flex h-auto w-auto flex-col gap-5 rounded-md border border-gray-700 bg-slate-900 p-3 transition duration-200 hover:border-purple-light hover:shadow-xl",
                  gridPositions[index],
                )}
              >
                <div className="flex gap-3">
                  {image.map((src: string) => (
                    <div key={src}>
                      <Image
                        priority
                        src={src}
                        width={800}
                        height={800}
                        alt={title}
                        className="rounded-md object-contain"
                      />
                    </div>
                  ))}
                </div>

                <div className="transition duration-200 group-hover/bento:translate-x-2">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex items-center gap-2">
                      <Image
                        src={face}
                        width={40}
                        height={40}
                        alt=""
                        className="rounded-full"
                      />
                      <h3 className="text-size-16 text-light-black">{user}</h3>
                    </div>

                    <Image
                      src="/icons/svg/verified.svg"
                      width={18}
                      height={18}
                      alt=""
                    />
                  </div>

                  <h4 className="text-size-22 mb-1 font-sans font-normal">
                    {title}
                  </h4>

                  <p className="text-size-14 font-sans text-light-black">
                    {description}
                  </p>
                </div>
              </div>
            );
          },
        )}
      </div>
    </>
  );
}
