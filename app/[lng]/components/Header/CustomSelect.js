"use client";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const CustomSelect = ({ value, onChange, options , main }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize selectedOption with the option that matches the initial value
  const [selectedOption, setSelectedOption] = useState(
    options.find((option) => option.value === value) || options[0]
  );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onChange(option.value);
    setIsOpen(false);
  };

  return (
    <div className="relative  3xl:w-[100px]">
      {/* Button displaying the current selection with flag and label */}
      <button
        onClick={toggleDropdown}
    className={`w-full  ${main ?  `bg-[#9A93F6]` : `bg-[#F4F4F4]` } rounded-full flex items-center py-[10px] px-[12px] mdl:py-[12px] mdl:px-[15px] justify-center`}
      >
        <span className={`${main ? `text-white100` : `text-[#454545]` } font-bold flex items-center gap-2`}>
          {selectedOption.label}
        </span>
        {/* <BsChevronDown
          className={`ml-2 ${main ? `text-white100` : `text-[#454545]`} transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        /> */}
      </button>

      {/* Dropdown list */}
      {/* {isOpen && (
        <ul className="absolute w-[110px] 3xl:w-[130px] mt-1 bg-white border border-gray-200   z-[9999999]">
          {options.map((option) => (
            <li
              key={option.value}
              className={`px-[8px] py-[8px] cursor-pointer hover:bg-slate-300 transition flex flex-row gap-[8px] ${
                option.value === selectedOption.value ? "bg-blue-50" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
};

export default CustomSelect;
