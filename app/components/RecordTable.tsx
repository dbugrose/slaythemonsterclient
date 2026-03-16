 "use client";
 import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

 export interface RecordRow{
  userName: string;
  monsterSlain: number;
  tasks: number;
  easy: number;
  med: number;
  hard: number;
 }

 interface RecordTableProps{
  records?: RecordRow[];
 }





const RecordTable = ({ records = [] } : RecordTableProps) => {
  console.log("records:", records);
  return (
    <div className="overflow-x-auto">
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
        <TableBody className="divide-y">
          {records.map((record) => (
            <TableRow key={record.userName} className="bg-transparent!">
              <TableCell className="whitespace-nowrap font-medium text-black">
                {record.userName}
              </TableCell>
              <TableCell className="text-center text-black">
                {record.monsterSlain}
              </TableCell>
              <TableCell className="text-black">{record.tasks}</TableCell>
              <TableCell className="text-black">{record.easy}</TableCell>
              <TableCell className="text-black">{record.med}</TableCell>
              <TableCell className="text-black">{record.hard}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default RecordTable;