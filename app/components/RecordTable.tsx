 "use client";
 import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";






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