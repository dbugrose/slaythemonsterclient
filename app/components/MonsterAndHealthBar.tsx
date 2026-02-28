"use client";

import React from 'react'
import Image from 'next/image'
import ToDoList from './ToDoList';
import Monsters from '@/MonsterImages.json';

let rndMonster : number;
let Monster : string;


// interface Monster {
//     name: string,
//     path: string,
//     sha: string,
//     size: number,
//     url: string,
//     html_url: string,
//     git_url: string,
//     download_url: string,
//     type: string,
//     _links: object,
// }

async function RandomizeMonster(){
    rndMonster = Math.floor(Math.random() * (Monsters.length+1));
    console.log(Monsters[rndMonster]);
    console.log(Monsters[rndMonster].download_url);
    Monster = Monsters[rndMonster].download_url;
}

const MonsterAndHealthBar = () => {
  if(!Monster)
    {RandomizeMonster();}

    return (
        <div className="w-full">
            <div className="w-full bg-red-500 h-10 rounded-3xl shadow-2xl"><div className="w-full bg-green-500 h-10 rounded-3xl"></div></div>
            <img src={Monster} 
            alt="randomly generated monster"
            className="object-cover"
            height="100%"
            ></img>
        </div>
  )
}

export default MonsterAndHealthBar