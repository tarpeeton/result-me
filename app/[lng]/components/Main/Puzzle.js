'use client';
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

// Import images directly
import One from '@/public/images/puzzle/Part1.png';
import Two from '@/public/images/puzzle/Part2.png';
import Three from '@/public/images/puzzle/Part3.png';
import Four from '@/public/images/puzzle/Part4.png';
import Five from '@/public/images/puzzle/Part5.png';
import Six from '@/public/images/puzzle/Part6.png';

const PuzzlePiece = ({ id, imagePart, onClick, position, rotation }) => {
  useEffect(() => {
    // GSAP entry animation
    gsap.fromTo(`.piece-${id}`, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1, delay: id * 0.2 });
  }, [id]);

  return (
    <div
      className={`absolute piece-${id} cursor-pointer w-[102px] h-[102px] 4xl:w-[400px] 4xl:h-[400px]`}
      style={{
        ...position,
        border: '1px solid white',
        transform: `rotate(${rotation}deg)`,
      }}
      onClick={() => onClick(id)}
    >
      <Image src={imagePart} width={400} height={400} quality={100} alt={`Puzzle piece ${id}`} />
    </div>
  );
};

const Puzzle = () => {
  const [pieces, setPieces] = useState([1, 2, 3, 4, 5, 6]);
  const [rotations, setRotations] = useState({});

  // Correct rotation steps for each piece
  const correctRotations = {
    1: 180, // 2 clicks -> 180°
    2: 270, // 3 clicks -> 270°
    3: 90,  // 1 click  -> 90°
    4: 270, // 3 clicks -> 270°
    5: 180, // 2 clicks -> 180°
    6: 270  // 3 clicks -> 270°
  };

  // Initialize rotations for each piece
  useEffect(() => {
    const initialRotations = pieces.reduce((acc, piece) => {
      acc[piece] = 0; // Start with 0 degrees
      return acc;
    }, {});
    setRotations(initialRotations);
  }, [pieces]);

  // Shuffle pieces on initial render
  useEffect(() => {
    const shuffledPieces = [...pieces].sort(() => Math.random() - 0.5);
    setPieces(shuffledPieces);
  }, []);

  // Handle piece click and rotate
  const handleClick = (id) => {
    const newRotation = (rotations[id] + 90) % 360;

    // Apply GSAP rotation with animation
    gsap.to(`.piece-${id}`, { duration: 0.5, rotate: newRotation });

    setRotations((prevRotations) => ({
      ...prevRotations,
      [id]: newRotation // Update rotation state
    }));
  };

  // Check if puzzle is solved
  const checkIfSolved = () => {
    const allCorrect = pieces.every((piece) => rotations[piece] === correctRotations[piece]);

    if (allCorrect) {
      console.log("Welcome");
    }
  };

  // Check if puzzle is solved every time rotations change
  useEffect(() => {
    checkIfSolved();
  }, [rotations]);

  // Directly use imported images for the image map
  const imageMap = {
    1: One,
    2: Two,
    3: Three,
    4: Four,
    5: Five,
    6: Six,
  };

  // Predefined absolute positions for each puzzle piece (top and left in percentages)
  const positions = {
    1: { top: '0%', left: '0%' },
    2: { top: '0%', left: '33.33%' },
    3: { top: '0%', left: '66.66%' },
    4: { top: '50%', left: '0%' },
    5: { top: '50%', left: '33.33%' },
    6: { top: '50%', left: '66.66%' },
  };

  return (
    <div className="flex px-[12px] py-[30px] flex-col items-center justify-center bg-violet100 rounded-[30px] mdl:rounded-[60px] 4xl:rounded-[100px] mt-[20px] mdl:mt-[25px] 4xl:mt-[30px] 4xl:py-[80px]">
      <h1 className="text-white text-[28px] mdl:text-[40px] 4xl:text-[50px] mb-4 font-bold">Соберите пазл и получите подарок!</h1>
      <div className="relative w-[100%] h-[204px]  4xl:w-[1200px] 4xl:h-[800px] bg-violet100 mt-[40px] mdl:mt-[50px] 4xl:mt-[80px] flex flex-row gap-0 ">
        {pieces.map((piece) => (
          <PuzzlePiece
            key={piece}
            id={piece}
            imagePart={imageMap[piece]} // Use imported image
            onClick={handleClick}
            position={positions[piece]}
            rotation={rotations[piece]} // Apply the current rotation
          />
        ))}
      </div>
      <p className="text-white font-semibold mt-[30px]  4xl:mt-[80px] text-[14px] mdl:text-[20px] 4xl:text-[25px]">Не пролистывайте просто так :)</p>
    </div>
  );
};

export default Puzzle;
