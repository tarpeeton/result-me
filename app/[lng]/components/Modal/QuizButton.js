"use client";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import { useEffect, useState } from 'react';

export default function Quiz() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log('Quiz component rendered');
    setShow(true); // Показать кнопку с анимацией
  }, []);

  return (
    <div className='fixed bottom-8 right-8 z-[9999]'>
      <Zoom in={show}>
        <Fab
          sx={{
            height: 60, // Уменьшенный размер
            width: 60,
            bgcolor: '#7B72EB', // Цвет кнопки
            '&:hover': { bgcolor: '#6A62D8' }, // Цвет при наведении
          }}
          color='primary'
        >
          <span style={{ fontSize: '1.5rem', color: 'white' }}>+</span>
        </Fab>
      </Zoom>
    </div>
  );
}
