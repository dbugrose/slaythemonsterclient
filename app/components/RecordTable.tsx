"use client";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

interface ToDo{
  userName: string;
  monsterSlain: number;
  tasks: number;
  easy: number;
  med: number;
  hard: number;
}

// function generateRow({userName, monsterSlain, tasks, easy, med, hard}:ToDo,)
// {
//     userName.map(userName) => {<TableRow className="bg-transparent! dark:border-black dark:bg-black"> 
// <TableCell className="whitespace-nowrap font-medium text-black dark:text-black">{userName}</TableCell>
// <TableCell className="text-black text-center">{monsterSlain}</TableCell>
// <TableCell className="text-black">{tasks}</TableCell>
// <TableCell className="text-black">{easy}</TableCell>
// <TableCell className="text-black">{med}</TableCell>
// <TableCell className="text-black">{hard}</TableCell>
// </TableRow>
// }
// };


const RecordTable = () => {
  return (
    <div>
      <Table>
        <TableHead>
          <TableRow className="divide-y">
            <TableHeadCell className="bg-transparent! text-sm font-extrabold tracking-wider text-black">USERNAME</TableHeadCell>
            <TableHeadCell className="bg-transparent! text-sm font-extrabold tracking-wider text-black">MONSTERS SLAIN</TableHeadCell>
            <TableHeadCell className="bg-transparent! text-sm font-extrabold tracking-wider text-black">TASKS</TableHeadCell>
            <TableHeadCell className="bg-transparent! text-sm font-extrabold tracking-wider text-black">EASY</TableHeadCell>
            <TableHeadCell className="bg-transparent! text-sm font-extrabold tracking-wider text-black">MED</TableHeadCell>
            <TableHeadCell className="bg-transparent! text-sm font-extrabold tracking-wider text-black">HARD</TableHeadCell>
          </TableRow>
        </TableHead>
      </Table>
    </div>
  );
};
export default RecordTable;