import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const ToDoList = () => {
  return (
    <div>
    <form className='flex justify-between my-1'><div><span className='flex'><input type="checkbox"/><p className="px-1">Mock Chore 1</p><img src="/assets/minus-button-icon-in-thin-line-art-vector-removebg-preview.png" alt="delete button" width="25px" className='mx-5' /></span></div><div><span className="bg-[#7BD576]! rounded-3xl text-[#593819]! px-15">Easy</span></div></form>
    <form className='flex justify-between  my-1'><div><span className='flex'><input type="checkbox"/><p className="px-1">Mock Chore 2</p><img src="/assets/minus-button-icon-in-thin-line-art-vector-removebg-preview.png" alt="delete button" width="25px" className='mx-5' /></span></div><div><span className="bg-[#F3E43F]! rounded-3xl text-[#593819]! px-15">Medium</span></div></form>
    <form className='flex justify-between  my-1'><div><span className='flex'><input type="checkbox"/><p className="px-1">Mock Chore 3</p><img src="/assets/minus-button-icon-in-thin-line-art-vector-removebg-preview.png" alt="delete button" width="25px" className='mx-5' /></span></div><div><span className="bg-[#FF5252]! rounded-3xl text-[#593819]! px-15">Hard</span></div></form>

    </div>
    );
}

export default ToDoList