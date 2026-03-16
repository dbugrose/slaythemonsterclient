"use client";

import { useEffect, useState } from "react";
import { loggedInData } from "@/lib/user-services";
import RecordTable, { RecordRow } from "../components/RecordTable";

const RecordSection = () => {
  const [records, setRecords] = useState<RecordRow[]>([]);

  useEffect(() => {
    // Get the logged-in user from localStorage
    const user = loggedInData();

    // Get the saved score from localStorage
    const storedScore = localStorage.getItem("score");

    // If score exists, turn it into a number. If not, use 100.
    const score = storedScore ? Number(storedScore) : 100;

    // Build one row for the current user
    const currentUserRecord: RecordRow = {
      userName: user?.username || "Guest",
      monsterSlain: score === 0 ? 1 : 0,
      tasks: 0,
      easy: 0,
      med: 0,
      hard: 0,
    };

    setRecords([currentUserRecord]);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <RecordTable records={records} />
    </div>
  );
};

export default RecordSection;
