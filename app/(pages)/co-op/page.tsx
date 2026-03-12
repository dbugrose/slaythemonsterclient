"use client"

import { loggedInData, getToken } from '@/lib/user-services';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {
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
    <div>page</div>
  )
}

export default page