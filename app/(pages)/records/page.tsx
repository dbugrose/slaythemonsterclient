"use client"
import { NavLinks } from "@/app/components/NavLinks";
import RecordTable from "@/app/components/RecordTable";
import { loggedInData, getToken } from "@/lib/user-services";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useState, useEffect } from "react";

export default function Home() {
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
    <div className="overflow-hidden flex min-h-screen items-center justify-center bg-[url(/assets/wp12696372.jpg)] bg-cover">
      <main className="w-[clamp(300px,\ 50vw,\ 600px)]">
        <div className="max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:place-self-center w-[clamp(100px,80vw,900px)] min-[1024px]:min-h-screen p-10 bg-[url(/assets/11468999.png)] max-[1024px]:order-2 bg-size-[100%_100%] flex flex-col px-15 sm:px-20 lg:px-30 md:px-30 py-35">
        <h1 className="text-center text-[clamp(20px,40px,60px)] text-[#593819]">Records</h1>
        <RecordTable></RecordTable>
        </div>
      </main>
    </div>
  );
}













