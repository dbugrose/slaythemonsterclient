import { getUserByUsername } from '@/lib/user-services';
import React, { useState, useEffect, createElement } from 'react'


const FriendSearch = () => {

const [input, setInput] = useState("")
const [generatedCheck, setGeneratedCheck] = useState("")

//  useEffect(() => {
//   const handleSearch = async (friend: string) => {
//     const exists : any = await getUserByUsername(friend);
//     if (!exists?.length)
//     {setGeneratedCheck("No such user exists!");}
//     else 
//     {setGeneratedCheck("User found!");}
//   }, [])
  return (
    <div className="w-[clamp(100px,80vw,700px)] min-h-screen p-10 bg-[url(/assets/11468999.png)] text-[#593819] bg-size-[100%_100%] flex flex-col px-15 sm:px-20 lg:px-30 md:px-30 py-35">
      <h1 className="text-center text-[clamp(20px,40px,60px)]">Co-Op</h1>
      <p className='text-center text-2xl'>team up with friends to take down more enemies in party mode.</p>
      <input onChange={e => setInput(e.target.value)} placeholder="search for friend" className='bg-white '/>
      <button className="bg-[#FCC27D] rounded-3xl text-[#593819] p-5 w-[100px] rounded-3xl">
        Search User
        </button>
        <p>{generatedCheck}</p>
      </div>
  )
}

export default FriendSearch