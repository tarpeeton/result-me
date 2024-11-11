import Image from "next/image";
import ArrowIcon from "@/public/svg/arrow-down-purple.svg";
import ArrowDoneIcon from "@/public/svg/done-round-svgrepo-com.svg";
import React from "react";
import { useParams } from 'next/navigation'

export default function ButtonCard({ item, handleSelection, selectedItems }) {
  // Check if the item is selected
  const {lng} = useParams()
  const isSelected = selectedItems.includes(item.title['ru']);

  return (
    <div
      onClick={() => handleSelection(item)}
      className={`bg-white group hover:scale-[1.03] transition-all duration-300 relative rounded-2xl cursor-pointer p-4 space-y-4 flex flex-col justify-between h-auto min-h-[300px] ${
        isSelected ? "border-2 border-indigo-500" : ""
      }`}
    >
      <div className="space-y-3">
        <h2 className="text-2xl max-mdl:text-xl font-semibold">
          {item.title[lng]}
        </h2>
        <p className="group-hover:opacity-100 leading-5 text-[#A6A6A6] max-slg:opacity-100 opacity-0 transition-opacity duration-300">
          {item.descriptions[lng]}
        </p>
      </div>
      <div>
        <Image
          src={item.icon}
          width={500}
          height={500}
          alt={`${item.title['ru']} || Icon of Button Card`}
          className="h-full max-h-[200px] w-auto"
          quality={100}
        />
      </div>
      <div className="w-20 h-20 flex items-center circle-of-card justify-center absolute -right-3 -bottom-2 rounded-full border-[10px] bg-white border-[#F8F8F8]">
        <Image
          src={isSelected ? ArrowDoneIcon : ArrowIcon}
          width={100}
          height={100}
          alt={isSelected ? "Done Icon" : "Arrow Down Purple"}
          className={`w-4 h-4 transition-transform duration-300 ${
            isSelected ? "transform rotate-0 w-6 h-6 " : "group-hover:rotate-180 hover:rotate-[270deg]"
          }`}
        />
      </div>
    </div>
  );
}
