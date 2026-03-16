 "use client";
import { Stats } from "@/interfaces/interface";
import { getStats } from "@/lib/health-services";
import { loggedInData, getToken } from "@/lib/user-services";
 import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

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





const RecordTable = () => {

const [username, setUsername] = useState("")
const [token, setToken] = useState("")
const [userId, setUserId] = useState<number>(0)
const [records, setRecords] = useState<Stats | null>(null)



useEffect(() => {

  async function onLoad (){
const user = loggedInData();
setUsername(user?.username || "");
setUserId(user?.id || 0);

const token = getToken();
setToken(token);
if (!token)
{redirect("/")}
const records : any = await getStats(user?.id || 0, token);

setRecords(records); 
  }
  onLoad();

}, []);
 


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
          {records && (Array(records).map((record, index) => (
            <TableRow key = { index }  className="bg-transparent!">
              <TableCell className="whitespace-nowrap font-medium text-black">
                {username}
              </TableCell>
              <TableCell className="text-center text-black">
                {record.monstersSlain}
              </TableCell>
              <TableCell className="text-black">{String(record.easyTasks + record.medTasks + record.hardTasks)}</TableCell>
              <TableCell className="text-black">{record.easyTasks}</TableCell>
              <TableCell className="text-black">{record.medTasks}</TableCell>
              <TableCell className="text-black">{record.hardTasks}</TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>
    </div>
  );
};
export default RecordTable;

function setUsername(arg0: any) {
  throw new Error("Function not implemented.");
}


function setUserId(arg0: any) {
  throw new Error("Function not implemented.");
}
