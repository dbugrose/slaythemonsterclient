"use client";

import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { getToken, loggedInData } from "@/lib/user-services";
import Monsters from "@/MonsterImages.json";
import { resetHealth, getStats } from "@/lib/health-services";
import { useAuth } from "@/context/context";

const MonsterAndHealthBar = () => {
  const {
    score,
    setScore,
    monster,
    setMonster,
    generateNewMonster,
  } = useAuth();


  return (
    <div className="w-full space-y-4">
      {/* HEALTH BAR */}
      <div className="w-full bg-red-500 h-10 rounded-3xl shadow-2xl">
        <div
          className="bg-green-500 h-10 rounded-3xl transition-all duration-300"
          style={{ width: `${score}%` }}
        />
      </div>

      {/* MONSTER */}
      {monster && (
        <img
          src={monster}
          alt="monster"
          className="object-cover transition-opacity duration-300"
        />
      )}

      {/* BUTTON */}
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