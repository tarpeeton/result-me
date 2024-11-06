import Image from "next/image";
import ArrowIcon from "@/public/svg/arrow-down-purple.svg";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { styled } from "@mui/material/styles";

const HoverTextField = styled(TextField)(({ theme }) => ({
  width: "100%",
  opacity: 0,
  transform: "translateY(10px)",
  transition: "opacity 0.3s ease, transform 0.3s ease",
  "& .MuiInput-underline:before": {
    borderBottomColor: "#A6A6A6",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "#000",
  },
}));

export default function InputCard({ title, icon }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div
      className="bg-white group hover:scale-[1.03] transition-all duration-300 relative rounded-2xl cursor-pointer p-4 space-y-4 flex flex-col justify-between h-auto min-h-[300px]"
    >
      <div className="space-y-3">
        <h2 className="text-2xl max-mdl:text-xl font-semibold">{title}</h2>
        <HoverTextField
          variant="standard"
          placeholder="Введите текст"
          inputProps={{ maxLength: 80 }}
          fullWidth
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="group-hover:opacity-100 group-hover:translate-y-0"
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
          src={icon}
          width={500}
          height={500}
          alt={`${title} || Icon of Button Card`}
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
