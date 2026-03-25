"use client";

import { useEffect, useState } from "react";
import RecordTable, { RecordRow } from "./RecordTable";
import { loggedInData } from "@/lib/user-services";

const RecordSection = () => {
  const [records, setRecords] = useState<RecordRow[]>([]);

  useEffect(() => {

    const user = loggedInData(); 

    const storedScore = localStorage.getItem("score"); // This will get the saved score form localStorage

    const score = storedScore ? Number(storedScore) : 100; //If the score exists, turn it into a number. If not, use 100.

    const currentUserRecord: RecordRow = {
      userName: user?.username || "Guest",
      monsterSlain: score === 0 ? 1 : 0,
      tasks: 0,
      easy: 0,
      med: 0,
      hard: 0
    }; 

    setRecords([currentUserRecord]);
  }, []);

  

  return (
    <div className="flex flex-col gap-4">
      <RecordTable />   
    </div>
  );
};

export default RecordSection;