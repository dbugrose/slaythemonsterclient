import React from 'react'
import Image from "next/image"
import SlayText from "@/public/assets/Cool Text - Slay 499977603264191.png"
import TheText from "@/public/assets/Cool Text - the 499977613698028.png"
import MonsterText from "@/public/assets/Cool Text - Monster 500002554269839.png"

const SlayTheMonsterText = () => {
  return (
    <div className="w-[clamp(300px,\ 50vw,\ 600px)] flex flex-col items-center">
        <Image
        src= {SlayText}
        alt="Slay text"
       />
      <div>
        <Image
        src= {TheText}
        alt="The text" 
       />
    </div>
    <Image
        src= {MonsterText}
        alt="Monster Text"  
        />
</div>
  )
}

export default SlayTheMonsterText