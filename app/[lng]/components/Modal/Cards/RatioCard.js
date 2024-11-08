import React, { useState, useEffect } from "react";

export default function RatioCard({ item, handleRatioChange, value: parentValue }) {
  const [value, setValue] = useState(item.value);

  // Обновление значения при изменении родительского значения (при переключении калькулятора)
  useEffect(() => {
    setValue(parentValue);
  }, [parentValue]);

  useEffect(() => {
    handleRatioChange(item.calcValue, item.title, value);
  }, []);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    handleRatioChange(item.calcValue, item.title, newValue);
  };

  return (
    <div className="ratio-card bg-white p-6 rounded-[20px] flex flex-col justify-between gap-14 relative">
      <div>
        <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-6">{item.descriptions}</p>
      </div>
      <div className="relative">
        <input
          type="range"
          min={item.from}
          max={item.to}
          value={value}
          onChange={handleChange}
          step={item.step}
          className="w-full appearance-none h-4 rounded-full bg-[#7B72EB70] relative z-10 custom-range"
        />
        <div className="absolute left-0 -top-6 text-[#A6A6A6] font-semibold">
          {item.from}
          {item.saleSymbol}
        </div>
        <div className="absolute right-0 -top-6 text-[#A6A6A6]">
          {item.to}
          {item.saleSymbol}
        </div>

        {/* Флажок с текущим значением */}
        <div
          className="absolute -top-[75px] text-sm transform -translate-x-[50%] w-16 h-16 bg-[#7B72EB] text-white font-semibold flex items-center justify-center rounded-full"
          style={{
            left: `${((value - item.from) / (item.to - item.from)) * 100}%`,
          }}
        >
          {value} {item.saleSymbol}
          <div className="absolute bottom-[-6px] w-0 h-0 border-t-[8px] border-t-[#7B72EB] border-x-[8px] border-x-transparent"></div>
        </div>
      </div>
    </div>
  );
}
