
import MissionBoard from "@/app/components/MissionBoard";
import ToDoList from "@/app/components/ToDoList";
import { getToken, loggedInData } from "@/lib/user-services";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";



export default function Missions() {
 return (
    <div className="flex min-h-screen items-center justify-center bg-[url(/assets/wp12696372.jpg)] bg-cover min-h-screen">
      <main className="">
        <MissionBoard/>
      </main>
    </div>
  );
}
