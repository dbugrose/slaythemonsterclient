import { Dropdown, DropdownItem } from 'flowbite-react'
import React from 'react'
import AddMissionButton from './AddMissionButton'


const MissionBoard = () => {
  return (
    <div className="w-[clamp(100px,80vw,700px)] min-h-screen p-10 bg-[url(/assets/11468999.png)] text-[#593819] bg-size-[100%_100%] flex flex-col px-15 sm:px-20 lg:px-30 md:px-30 py-35">
      <h1 className="text-center text-[clamp(20px,40px,60px)]">Missions</h1>
      <div id="taskParent"></div>
    <div className="flex justify-between items-center flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row"><div className="flex"><input type="text" id="userInput" placeholder='Custom Chore' className="text-[#593819]!"/><AddMissionButton/></div><Dropdown className="rounded-3xl bg-white! text-[#593819]!" label="Difficulty">
      <DropdownItem className="bg-[#7BD576]! rounded-tl-3xl rounded-tr-3xl  text-[#593819]! ">Easy</DropdownItem>
      <DropdownItem className="bg-[#F3E43F]!  text-[#593819]! ">Medium</DropdownItem>
      <DropdownItem className="bg-[#FF5252]! rounded-br-3xl rounded-bl-3xl text-[#593819]! ">Hard</DropdownItem>
      </Dropdown> </div>
    </div>
  )
}

export default MissionBoard