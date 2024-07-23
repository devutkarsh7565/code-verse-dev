"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

interface IImageCarouesl {
  slides: {
    img: StaticImageData;
    text?: string;
  }[];
  className?: string;
  showArrows: boolean;
  showDots: boolean;
}

const ImageCarouesl = ({
  slides,
  className,
  showArrows,
  showDots,
}: IImageCarouesl) => {
  const [currentImg, setCurrentImg] = useState<number>(0);

  const handleLeftSwipe = () => {
    if (currentImg === 0) {
      setCurrentImg(slides.length - 1);
    } else {
      setCurrentImg(currentImg - 1);
    }
  };
  const handleRightSwipe = () => {
    if (currentImg === slides.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleRightSwipe();
    }, 3000);
    return () => clearInterval(interval);
  });

  return (
    <div
      className={`${
        className && className ? className : "w-[500px] h-screen"
      } relative `}
    >
      <Image
        // style={{ transform: `translateX(-${currentImg * 55}%)` }}
        src={slides[currentImg]?.img}
        alt="img"
        className="w-full h-full object-cover"
        layout="fill"
      />

      <div
        className={`${
          showArrows ? "block" : "hidden"
        } absolute w-full h-full top-0 flex items-center text-black justify-between z-30`}
      >
        <button onClick={handleLeftSwipe} className="">
          <ChevronLeftIcon className="w-8 h-8 " />
        </button>
        <button onClick={handleRightSwipe}>
          <ChevronRightIcon className="w-8 h-8 " />
        </button>
      </div>

      {showDots && (
        <div className="w-full absolute bottom-10 flex justify-center gap-1">
          {slides?.map((item, index) => (
            <div
              onClick={() => setCurrentImg(index)}
              key={index}
              className={`${
                currentImg === index ? "bg-neutral-500" : "bg-neutral-50"
              }  z-40 w-2 h-2 rounded-full`}
            ></div>
          ))}
        </div>
      )}

      {slides && slides[currentImg]?.text && (
        <div className="flex justify-center z-40 bottom-20 absolute w-full text-2xl font-semibold">
          <p className="text-center w-3/5  text-white ">
            {slides[currentImg]?.text}
          </p>
        </div>
      )}

      <div className="absolute w-full h-full bg-black/15 z-30"></div>
    </div>
  );
};

export default ImageCarouesl;
