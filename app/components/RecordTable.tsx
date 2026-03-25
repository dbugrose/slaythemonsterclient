"use client";
import { FriendRequest, Stats } from "@/interfaces/interface";
import { getFriends, getFriendStats } from "@/lib/friend-services";
import { getStats } from "@/lib/health-services";
import { loggedInData, getToken } from "@/lib/user-services";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export interface RecordRow {
  userName: string;
  monsterSlain: number;
  tasks: number;
  easy: number;
  med: number;
  hard: number;
}

interface RecordTableProps {
  records?: RecordRow[];
}

const RecordTable = () => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState<number>(0);
  const [records, setRecords] = useState<Stats | null>(null);
  const [friendStats, setFriendStats] = useState<Stats | null>(null);

  useEffect(() => {
    async function onLoad() {
      const user = loggedInData();
      setUsername(user?.username || "");
      setUserId(user?.id || 0);

      const token = getToken();
      setToken(token);
      if (!token) {
        redirect("/");
      }
      const records: any = await getStats(user?.id || 0, token);
      setRecords(records);
      const friendStats: any = await getFriendStats(user?.id || 0, token);
      setFriendStats(friendStats);
    }
    onLoad();
  }, []);

  console.log("records:", records);
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHead>
          <TableRow className="divide-y">
            <TableHeadCell className="bg-transparent! text-sm font-extrabold tracking-wider text-black">
              USERNAME
            </TableHeadCell>
            <TableHeadCell className="bg-transparent! text-sm font-extrabold tracking-wider text-black">
              MONSTERS SLAIN
            </TableHeadCell>
            <TableHeadCell className="bg-transparent! text-sm font-extrabold tracking-wider text-black">
              TASKS
            </TableHeadCell>
            <TableHeadCell className="bg-transparent! text-sm font-extrabold tracking-wider text-black">
              EASY
            </TableHeadCell>
            <TableHeadCell className="bg-transparent! text-sm font-extrabold tracking-wider text-black">
              MED
            </TableHeadCell>
            <TableHeadCell className="bg-transparent! text-sm font-extrabold tracking-wider text-black">
              HARD
            </TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {records &&
            Array(records).map((record, index) => (
              <TableRow key={index} className="bg-transparent!">
                <TableCell className="whitespace-nowrap font-medium text-black">
                  {username}
                </TableCell>
                <TableCell className="text-center text-black">
                  {record.monstersSlain}
                </TableCell>
                <TableCell className="text-black">
                  {String(
                    record.easyTasks + record.medTasks + record.hardTasks,
                  )}
                </TableCell>
                <TableCell className="text-black">{record.easyTasks}</TableCell>
                <TableCell className="text-black">{record.medTasks}</TableCell>
                <TableCell className="text-black">{record.hardTasks}</TableCell>
              </TableRow>
            ))}
          {Array.isArray(friendStats) &&
            friendStats.map((friend, index) => {
              const easy = friend.easyTasks ?? 0;
              const med = friend.medTasks ?? 0;
              const hard = friend.hardTasks ?? 0;

              return (
                <TableRow key={index} className="bg-transparent!">
                  <TableCell className="whitespace-nowrap font-medium text-black">
                    {friend.username}
                  </TableCell>
                  <TableCell className="text-center text-black">
                    {friend.monstersSlain ?? 0}
                  </TableCell>
                  <TableCell className="text-black">
                    {easy + med + hard}
                  </TableCell>
                  <TableCell className="text-black">{easy}</TableCell>
                  <TableCell className="text-black">{med}</TableCell>
                  <TableCell className="text-black">{hard}</TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </div>
  );
};
export default RecordTable;
