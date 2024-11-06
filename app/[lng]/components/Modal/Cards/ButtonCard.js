import Image from "next/image";
import ArrowIcon from "@/public/svg/arrow-down-purple.svg";
import React from "react";

export default function ButtonCard({ item, handleSelection}) {
  return (
    <div onClick={() => handleSelection(item)} className="bg-white group hover:scale-[1.03] transition-all duration-300 relative rounded-2xl cursor-pointer p-4 hover space-y-4 flex flex-col justify-between h-auto min-h-[300px]">
      <div className="space-y-3">
        <h2 className="text-2xl max-mdl:text-xl font-semibold">{item.title}</h2>
        <p className="group-hover:opacity-100 leading-5 text-[#A6A6A6] opacity-0 transition-all duration-300">
          {item.descriptions}
        </p>
      </div>
      <div>
        <Image
        src={item.icon}
        width={500}
        height={500}
        alt={`${item.title} || Icon of Button Card`}
        className="h-full max-h-[200px] w-auto"
        quality={100}
        />
      </div>
      <div className="w-20 h-20 flex items-center circle-of-card justify-center absolute -right-2 -bottom-2 rounded-full border-[10px] bg-white border-[#F8F8F8]">
        <Image
          src={ArrowIcon}
          width={100}
          height={100}
          alt="Arrow Down Purple"
          className="w-4 h-4 group-hover:rotate-180 transition-all duration-300 hover:rotate-[270deg]"
        />
      </div>
    </div>
  );
}
