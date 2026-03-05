import React from 'react'
import Image from "next/image"
import MonsterAndHealthBar from '@/app/components/MonsterAndHealthBar'

const page = () => {
  return (
    <div className="min-h-screen bg-cover bg-fixed bg-[url(/assets/battle-background-2.jpg)] grid xl:grid-cols-[1fr_1fr_1fr] lg:grid-cols-[1fr_1fr_1fr] max-[770px]:grid-cols-[1fr] xl:p-20 lg:p-20 p-0 w-full sm: grid-cols-1">
      <div className="w-[clamp(100px,50vw,600px)] min-h-50 max-[1024px]:min-w-screen max-[1024px]:order-3 bg-[url(/assets/11468999.png)] max-h-50 bg-size-[100%_100%]">
      </div>
      <div></div>
      <div className="max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:place-self-center w-[clamp(100px,80vw,400px)] min-[1024px]:min-h-screen p-10 bg-[url(/assets/11468999.png)] max-[1024px]:order-2 bg-size-[100%_100%] flex flex-col px-10 sm:px-10 lg:px-10 md:px-10 py-35">
            <MonsterAndHealthBar/>
      </div>
      <img className="min-[1024px]:fixed min-[1024px]:bottom-0 max-[1024px]:place-self-center min-[1024px]:left-[20%]  max-[1024px]:order-2 h-[clamp(100px,50vh,500px)]" src="/assets/ranger.png"/>
    </div>
  )
}

export default page