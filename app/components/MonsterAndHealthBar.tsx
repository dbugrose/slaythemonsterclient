"use client";

import React, { useEffect, useState } from "react";
import Monsters from "@/MonsterImages.json";

const MonsterAndHealthBar = () => {
  const [monster, setMonster] = useState<string | null>(null);
  const [score, setScore] = useState<number>(100);

  useEffect(() => {
    const storedMonster = localStorage.getItem("selectedMonster");
    const storedScore = localStorage.getItem("score");

    if (storedScore) {
      setScore(Number(storedScore));
    } else {
      localStorage.setItem("score", "100");
      setScore(100);
    }

    if (storedMonster) {
      setMonster(storedMonster);
    } else {
      generateNewMonster();
    }
  }, []);

  const generateNewMonster = () => {

    setTimeout(() => {
      let newMonster: string;

      do {
        const randomIndex = Math.floor(Math.random() * Monsters.length);
        newMonster = Monsters[randomIndex].download_url;
      } while (newMonster === monster);

      localStorage.setItem("selectedMonster", newMonster);
      localStorage.setItem("score", "100");

      setMonster(newMonster);
      setScore(100);

      playSound();
    }, 300); 
  };

  const playSound = () => {
    const audio = new Audio("/monster-sound.mp3"); // TO DO - add sound effect
    audio.volume = 0.5;
    audio.play().catch(() => {});
  };

  return (
    <div className="w-full space-y-4">

      <div className="w-full bg-red-500 h-10 rounded-3xl shadow-2xl">
        <div
          className="bg-green-500 h-10 rounded-3xl transition-all duration-300"
          style={{ width: `${score}%` }}
        />
      </div>

      {monster && (
        <img
          src={monster}
          alt="randomly generated monster"
          className={`object-cover transition-opacity duration-300`}
          height="100%"
        />
      )}
      <button
        onClick={generateNewMonster}
        className="bg-[#FCC27D] rounded-3xl text-[#593819] px-5 flex place-self-center"
      >
        Generate New Monster
      </button>
    </div>
  );
};

export default MonsterAndHealthBar;