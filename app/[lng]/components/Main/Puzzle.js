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

const PuzzlePiece = ({ id, imagePart, onClick, rotation }) => {
  useEffect(() => {
    // GSAP entry animation
    gsap.fromTo(`.piece-${id}`, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 1, delay: id * 0.2 });
  }, [id]);

  return (
    <div
      className={`piece-${id} cursor-pointer border-[1px] border-white`}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
      onClick={() => onClick(id)}
    >
      <Image src={imagePart} width={400} height={400} quality={100} alt={`Puzzle piece ${id}`} />
    </div>
  );
};

const Puzzle = () => {
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
    const initialRotations = [1, 2, 3, 4, 5, 6].reduce((acc, piece) => {
      acc[piece] = 0; // Start with 0 degrees
      return acc;
    }, {});
    setRotations(initialRotations);
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
    const allCorrect = [1, 2, 3, 4, 5, 6].every((piece) => rotations[piece] === correctRotations[piece]);

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

  return (
    <div className="flex px-[12px] py-[30px] flex-col items-center justify-center bg-violet100 rounded-[30px] mdl:rounded-[60px] 4xl:rounded-[100px] mt-[20px] mdl:mt-[25px] 4xl:mt-[30px] 4xl:py-[80px]">
      <h1 className="text-white text-[28px] mx-auto w-[90%] mdl:text-[40px] 4xl:text-[50px] mb-4 font-bold">Соберите пазл и получите подарок!</h1>
      
      {/* Grid layout with puzzle pieces placed in order */}
      <div className="grid grid-cols-3 grid-rows-2 gap-0 w-full max-w-[600px] mdl:max-w-[800px] 4xl:max-w-[1200px]">
        {/* First row */}
        <PuzzlePiece id={1} imagePart={imageMap[1]} onClick={handleClick} rotation={rotations[1]} />
        <PuzzlePiece id={2} imagePart={imageMap[2]} onClick={handleClick} rotation={rotations[2]} />
        <PuzzlePiece id={3} imagePart={imageMap[3]} onClick={handleClick} rotation={rotations[3]} />
        {/* Second row */}
        <PuzzlePiece id={4} imagePart={imageMap[4]} onClick={handleClick} rotation={rotations[4]} />
        <PuzzlePiece id={5} imagePart={imageMap[5]} onClick={handleClick} rotation={rotations[5]} />
        <PuzzlePiece id={6} imagePart={imageMap[6]} onClick={handleClick} rotation={rotations[6]} />
      </div>
      <p className="text-white font-semibold mt-[30px]  4xl:mt-[80px] text-[14px] mdl:text-[20px] 4xl:text-[25px]">Не пролистывайте просто так :)</p>
    </div>
  );
};

export default Puzzle;
