"use client";

import React, { useEffect, useState } from "react";
import Monsters from "@/MonsterImages.json";

let storedScore: string | null;
let storedMonster: string | null;

const MonsterAndHealthBar = () => {
  const [monster, setMonster] = useState<string | null>(null);

  useEffect(() => {
    storedMonster = localStorage.getItem("selectedMonster");
    storedScore = localStorage.getItem("score");


    if (storedMonster) {
      setMonster(storedMonster);
    } else {
      const randomIndex = Math.floor(Math.random() * Monsters.length);
      const randomMonster = Monsters[randomIndex].download_url;

      localStorage.setItem("selectedMonster", randomMonster);
      setMonster(randomMonster);
    }
  }, []);

  return (
    <div className="w-full">
      <div className="w-full bg-red-500 h-10 rounded-3xl shadow-2xl">
        <div
          className={`bg-green-500 h-10 rounded-3xl`}
          style={{ width: `${storedScore}%` }}
        />
      </div>

      {monster && (
        <img
          src={monster}
          alt="randomly generated monster"
          className="object-cover"
          height="100%"
        />
      )}
    </div>
  );
};

export default MonsterAndHealthBar;