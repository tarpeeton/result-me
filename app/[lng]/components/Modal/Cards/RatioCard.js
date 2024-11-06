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
    <div className="ratio-card p-4 bg-white rounded-2xl">
      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
      <p className="text-gray-500 mb-4">{item.descriptions}</p>
      <input
        type="range"
        min={item.from}
        max={item.to}
        value={value}
        onChange={handleChange}
        step="0.01"
        className="w-full"
      />
      <div className="text-right mt-2">
        <span className="text-lg font-semibold">
          {value} {item.saleSymbol}
        </span>
      </div>
    </div>
  );
}
