"use client";

import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const { theme } = useTheme();

  const handleCopy = () => {
    const text = "simulaemanuele@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const leftLists = [
    "React.js",
    "Typescript",
    "Node.js",
    "Express",
    "Next.js",
    "Tailwind",
  ];
  const rightLists = [
    "Java",
    "Postgresql",
    "MySQL",
    "React Native",
    "Three.js",
    "GSAP Animation",
  ];

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      id={id?.toString()}
      className={cn(
        "dark:text-white row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 lg:shadow-2xl lg:shadow-black-200",
        className
      )}
      style={{
        background: theme === "dark" ? "rgb(4,7,29)" : "rgb(245,245,244)",
        backgroundColor:
          theme === "dark"
            ? "linear-gradient(90deg, rgba(4,7,29,1) 0% rgba(12,14,35,1) 100%)"
            : "linear-gradient(90deg, rgba(245,245,244,1) 0% rgba(244,245,245,1) 100%)",
      }}
    >
      <div
        className={`${id === 6 && "flex justify-center"} ${
          id === 1 && "dark:text-white text-stone-100"
        } ${id === 6 && "dark:text-white text-stone-100"} h-full`}
      >
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover", "object-center")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div
            className={`font-sans font-extralight text-[${
              theme === "dark" ? "#c1c2d3" : "#c1cfdf"
            }] text-sm md:text-xs lg:text-base z-10`}
          >
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
            {title}
          </div>

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-1 lg:gap-1">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 text-[0.5rem] opacity-50 lg:opacity-100 rounded-lg text-center dark:bg-[#10132E] dark:text-white text-black border border-slate-800"
                  >
                    {item}
                  </span>
                ))}
                {/* <span className="py-3 px-3 rounded-lg text-center bg-[#10132E]" /> */}
              </div>

              <div className="flex flex-col gap-1 lg:gap-1">
                {/* <span className="py-3 px-3 mr-6 rounded-lg text-center bg-[#10132E]" /> */}
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="py-2 px-3 mr-6 text-[0.5rem] opacity-50 lg:opacity-100 rounded-lg text-center dark:bg-[#10132E] dark:text-white text-black border border-slate-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={defaultOptions} />
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses={`bg-[#161a31]`}
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
