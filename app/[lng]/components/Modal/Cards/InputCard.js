import Image from "next/image";
import ArrowIcon from "@/public/svg/arrow-down-purple.svg";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";

export default function InputCard({ item, handleSelection }) {
  const [inputValue, setInputValue] = useState("");

  // Function to handle submission
  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      // Call the handleSelection function with the input value
      handleSelection({ ...item, value: inputValue });
      // Optionally, clear the input field
      setInputValue("");
    } else {
      // Optionally, handle empty input (e.g., show a warning)
      console.log("Input is empty");
    }
  };

  // Function to detect Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div
      className={`bg-white group ${
        inputValue.length === 0 ? "cursor-pointer" : ""
      } hover:scale-[1.03] transition-all duration-300 relative rounded-2xl p-4 space-y-4 flex flex-col justify-between h-auto min-h-[300px]`}
    >
      <div className="space-y-3">
        <h2 className="text-2xl max-mdl:text-xl font-semibold">{item.title}</h2>
        <TextField
          variant="standard"
          placeholder="Введите текст"
          inputProps={{ maxLength: 80 }}
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress} // Detect Enter key press
          // Conditionally apply class names based on inputValue.length
          className={`transition-all duration-300 ${
            inputValue.length > 0
              ? "opacity-100 translate-y-0"
              : "opacity-0 max-slg:opacity-100 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          }`}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" className="text-[#A6A6A6]">
                {inputValue.length} / 80
              </InputAdornment>
            ),
          }}
        />
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
      <div
        className="w-20 h-20 cursor-pointer flex items-center circle-of-card justify-center absolute -right-2 -bottom-2 rounded-full border-[10px] bg-white border-[#F8F8F8] group-hover:rotate-180 group-hover:hover:rotate-[270deg] transition-all duration-300 hover:bg-indigo-100"
        onClick={handleSubmit} // Handle click on the button
      >
        <Image
          src={ArrowIcon}
          width={100}
          height={100}
          alt="Arrow Down Purple"
          className="w-4 h-4"
        />
      </div>
    </div>
  );
}
