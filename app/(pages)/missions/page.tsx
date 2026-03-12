"use client"

import MissionBoard from "@/app/components/MissionBoard";
import ToDoList from "@/app/components/ToDoList";
import { getToken, loggedInData } from "@/lib/user-services";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";



export default function Missions() {
  const [token, setToken] = useState("");
      const [userId, setUserId] = useState(0);
      const [username, setUsername] = useState("");
    
      /* ---------------- INITIAL SETUP ---------------- */
      useEffect(() => {
        const user = loggedInData();
        setUsername(user?.username || "");
        setUserId(user?.id || 0);
    
        const token = getToken();
        setToken(token);
        if (!token)
        {redirect("/")}
      }, []);
 return (
    <div className="flex min-h-screen items-center justify-center bg-[url(/assets/wp12696372.jpg)] bg-cover min-h-screen">
      <main className="">
        <MissionBoard/>
      </main>
    </div>
  );
}
