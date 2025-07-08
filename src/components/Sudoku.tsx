import { SudokuGridProps } from "@/lib/type";
import React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
const GRIDS_PROPS: SudokuGridProps[] = [
  {
    background_img: "/images/sudoku/1.png",
    title: "Purpose",
    link: "/purpose",
  },
  {
    background_color: "#CF7650",
    title: "Impact",
    link: "/impact",
    icon: "/images/rjc_icon.png",
    additional_class: "flex items-center justify-center flex-col  lg:justify-start gap-8",
  },
  {
    background_img: "/images/sudoku/3.png",
    title: "Media",
    link: "/media",
  },
  {
    background_color: "#76D181",
    title: "Projects",
    link: "/projects",
    icon: "/images/rjc_icon.png",
    additional_class: "flex flex-col lg:items-start items-center justify-center gap-8",
  },
  {
    background_img: "/images/sudoku/5.png",
    title: "Donate",
    link: "#cta",
  },
  {
    background_color: "#76D181",
    title: "Contact",
    link: "/contact",
    icon: "/images/rjc_icon.png",
    additional_class: "flex flex-col lg:items-end items-center justify-center gap-8",
  },
  {
    background_img: "/images/sudoku/7.png",
    title: "Volunteer",
    link: "/team",
  },
  {
    background_color: "#765194",
    title: "Education",
    link: "/education",
    icon: "/images/rjc_icon.png",
    additional_class: "flex flex-col items-center lg:justify-end justify-center gap-8",
  },
  {
    background_img: "/images/sudoku/9.png",
    title: "Events",
    link: "/events",
  },
];

const Sudoku: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-4 md:mt-8 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1 w-full max-w-6xl">
        {GRIDS_PROPS.map((cell, index) => {
          if (cell.background_img) {
            return (
              <Link href={cell.link} key={`homepage-sudoku-${index}`}>
                <div
                  className="
                aspect-square md:aspect-6/5
                flex items-center justify-center
                min-h-[200px] md:min-h-[250px]
              "
                  style={{
                    backgroundImage: `url(${cell.background_img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="flex flex-row items-center justify-center gap-4 md:gap-8 w-[90%] h-[90%] border-white border-2 md:border-4">
                    <p className="self-end mb-4 md:mb-8 text-white text-lg md:text-2xl lg:text-3xl font-semibold">
                      {cell.title}
                    </p>
                  </div>
                </div>
              </Link>
            );
          } else {
            return (
              <div className="w-full h-full min-h-[200px] md:min-h-[250px] aspect-square md:aspect-6/5" key={`homepage-sudoku-${index}`}>
                <Link
                  href={cell.link}
                  className={cn(
                    "bg-white w-full h-full",
                    // Center on md & sm screens, use additional_class on xl screens
                    "flex items-center justify-center",
                    // Apply lg: prefix to each class in additional_class
                    cell.additional_class
                  )}

                >
                  <div
                    className={cn(
                      "w-[95%] h-[95%]",
                      "flex flex-col items-center justify-center gap-4 md:gap-8",
                      "text-lg md:text-xl lg:text-2xl font-semibold text-white"
                    )}
                    style={{
                      backgroundColor: cell.background_color,
                      opacity: 0.8,
                    }}
                  >
                    <Image
                      src={cell.icon!}
                      alt={cell.title}
                      width={60}
                      height={60}
                      className="w-12 h-12 md:w-16 md:h-16"
                    />
                    {cell.title}
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Sudoku;
