import { useAppSelector } from "../store/hook";
import { Heart, Share } from "phosphor-react";
import { useState } from "react";

const Verses = () => {
  const { bible, acessibility } = useAppSelector((state) => state);

  if (!bible.data) {
    return <></>;
  }

  return (
    <div
      className={`my-6 bg-white dark:bg-gray-900 rounded shadow-md border-t border-b border-t-blue-300 border-b-blue-300 lg:border lg:border-blue-300 lg:dark:border-gray-500`}
    >
      <div>
        <div className="my-6 p-2">
          <h1 className="text-3xl dark:text-gray-100 font-bold font-quick">{`${bible.data?.book.name} ${bible.data?.chapter.number}`}</h1>
        </div>
        <div className="w-full flex flex-col gap-6 p-1">
          {bible.data?.verses.map((verse) => {
            return (
              <div className="rounded shadow-sm" key={verse.number}>
                <p
                  style={{ fontSize: `${acessibility.fontSize}rem` }}
                  className={`font-semibold font-quick leading-relaxed dark:text-gray-100`}
                >
                  <sup className="mx-1">{verse.number}</sup>
                  {verse.text}
                </p>
                <div className="w-full flex gap-4 items-center justify-end px-2">
                  <Heart
                    size={24}
                    className="cursor-pointer dark:text-gray-100"
                  />
                  <Share
                    size={24}
                    className="cursor-pointer dark:text-gray-100"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Verses;
