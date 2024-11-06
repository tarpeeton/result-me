import React, { useState } from 'react';
import { Box, Typography, Slider } from '@mui/material';

// Компонент для карточки ползунка
const RatioCard = ({ item, onValueChange }) => {
  const [value, setValue] = useState(item.value);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    onValueChange(item.title, newValue);
  };

  return (
    <Box sx={{ padding: 2, backgroundColor: 'white', borderRadius: 2, boxShadow: 2 }}>
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {item.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" gutterBottom>
        {item.descriptions}
      </Typography>
      <Slider
        value={value}
        min={item.from}
        max={item.to}
        step={0.01}
        onChange={handleChange}
        valueLabelDisplay="on"
        sx={{ color: '#7B72EB' }}
      />
      <Typography variant="body1" align="right" fontWeight="bold" mt={2}>
        {value} {item.saleSymbol}
      </Typography>
    </Box>
  );
};

// Главный компонент
const App = () => {
  const initialData = [
    {
      title: 'Рекламный бюджет',
      descriptions: 'Сумма, выделенная на канал или кампанию за отчетный период',
      saleSymbol: '$',
      from: 200,
      to: 2000,
      value: 800,
    },
    {
      title: 'Цена за клик',
      descriptions: 'Количество кликов по рекламе, показатель интереса к рекламному материалу',
      saleSymbol: '$',
      from: 0.05,
      to: 1.0,
      value: 0.05,
    },
    {
      title: 'Конверсия в лиды',
      descriptions: 'Доля кликов, которые стали лидами',
      saleSymbol: '%',
      from: 3,
      to: 20,
      value: 15,
    },
    {
      title: 'Конверсия в встречи',
      descriptions: 'Ожидаемый процент встреч на основе приведенных лидов',
      saleSymbol: '%',
      from: 3,
      to: 20,
      value: 15,
    },
    {
      title: 'Конверсия в клиента',
      descriptions: 'Процент встреч, приводящих к заключению сделки с клиентом',
      saleSymbol: '%',
      from: 3,
      to: 20,
      value: 15,
    },
  ];

  const [values, setValues] = useState({});

  const handleValueChange = (title, newValue) => {
    setValues((prev) => ({ ...prev, [title]: newValue }));
  };

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 3 }}>
      {initialData.map((item, index) => (
        <RatioCard key={index} item={item} onValueChange={handleValueChange} />
      ))}
    </Box>
  );
};

export default App;
