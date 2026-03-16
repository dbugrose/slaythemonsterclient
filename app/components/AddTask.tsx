import React from 'react'
import { Dropdown, DropdownItem } from 'flowbite-react'


const AddTask = () => {
  return (
    <div>      
        <ul id="list"></ul>
    <form className="flex justify-between items-center flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row"><div className="flex"><input type="text" id="new-task-title" placeholder='Custom Chore' className="text-[#593819]!"/><img src="/assets/add-icon-free-vector-removebg-preview.png" width="35px" id="new-task-form" /></div><Dropdown className="rounded-3xl bg-white! text-[#593819]!" label="Difficulty">
      <DropdownItem className="bg-[#7BD576]! rounded-tl-3xl rounded-tr-3xl  text-[#593819]! ">Easy</DropdownItem>
      <DropdownItem className="bg-[#F3E43F]!  text-[#593819]! ">Medium</DropdownItem>
      <DropdownItem className="bg-[#FF5252]! rounded-br-3xl rounded-bl-3xl text-[#593819]! ">Hard</DropdownItem>
      </Dropdown> </form></div>
  )
}

export default AddTask