// components/Cards/RatioCard.js

import React, { useState } from "react";

export default function RatioCard({ item, handleRatioChange }) {
  const [value, setValue] = useState(item.value);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    handleRatioChange(item.title, newValue);
  };

  return (
    <div className="ratio-card bg-[#F8F8F8] p-6 rounded-[20px] shadow-md">
      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
      <p className="text-gray-600 mb-6">{item.descriptions}</p>
      <div className="relative">
        <input
          type="range"
          min={item.from}
          max={item.to}
          value={value}
          onChange={handleChange}
          step="0.01"
          className="w-full slider-thumb appearance-none h-2 rounded-full bg-[#7B72EB]"
        />
        <div className="absolute left-0 -top-6 text-[#7B72EB] font-semibold">
          {item.from}
          {item.saleSymbol}
        </div>
        <div className="absolute right-0 -top-6 text-[#A6A6A6]">
          {item.to}
          {item.saleSymbol}
        </div>
      </div>
      <div className="text-center mt-4">
        <div className="inline-block bg-[#7B72EB] text-white px-3 py-1 rounded-full">
          {value} {item.saleSymbol}
        </div>
      </div>
    </div>
  );
}
