"use client"
import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';

const CustomSelect = ({ value, onChange, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="relative  3xl:w-[100px] ">
            {/* Кнопка для отображения текущего выбора */}
            <button
                onClick={toggleDropdown}
                className="w-full  bg-[#F4F4F4] border rounded-full flex items-center  py-[10px] px-[15px] justify-center"
            >
                <span className="text-seletcText font-bold">{selectedOption}</span>
                <BsChevronDown className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            {/* Выпадающий список */}
            {isOpen && (
                <ul className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`px-[16px] py-[16px] cursor-pointer hover:bg-violet100 transition ${
                                option.value === selectedOption ? 'bg-blue-50' : ''
                            }`}
                            onClick={() => handleOptionClick(option.value)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
