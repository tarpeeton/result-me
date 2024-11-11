"use client";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import GiftIcon from '/public/svg/gift-1-svgrepo-com.svg';

export default function QuizButton({ setQuizModal }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // Показать кнопку с анимацией
  }, []);

  return (
    <div className='fixed bottom-8 right-8 z-[9999]'>
      <Zoom in={show}>
        <Fab
          onClick={() => setQuizModal(true)} // Обработчик клика на Fab
          sx={{
            height: 60, // Уменьшенный размер
            width: 60,
            bgcolor: '#7B72EB', // Цвет кнопки
            '&:hover': { bgcolor: '#6A62D8' }, // Цвет при наведении
          }}
          color='primary'
        >
          <Image
            src={GiftIcon}
            width={24}
            height={24}
            alt='Gift Icon for Quiz'
            className='w-6 h-6'
          />
        </Fab>
      </Zoom>
    </div>
  );
}
