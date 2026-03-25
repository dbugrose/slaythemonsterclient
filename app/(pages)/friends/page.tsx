"use client"
import FriendBox from "@/app/components/FriendBox"
import Requests from "@/app/components/Requests"
import { loggedInData, getToken } from "@/lib/user-services";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const page = () => {

  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState(0);
  const [token, setToken] = useState("")

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
        <div className="max-[1024px]:flex max-[1024px]:flex-col max-[1024px]:place-self-center w-[clamp(100px,80vw,900px)] min-[1024px]:min-h-screen p-10 bg-[url(/assets/11468999.png)] max-[1024px]:order-2 bg-size-[100%_100%] px-15 sm:px-20 lg:px-30 md:px-30 py-35">
        <h1 className="text-center text-[clamp(20px,40px,60px)] text-[#593819] ">Friends</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
        <div className="grid col-span-1"><Requests /></div>
        <div className="grid col-span-1"><FriendBox userId={userId} token={token} /></div></div>
        </div>
      </main>
    </div>
  )
}

export default page