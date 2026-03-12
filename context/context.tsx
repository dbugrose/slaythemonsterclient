"use client"
import {useState, useContext, createContext, ReactNode, useEffect} from "react";
import { loggedInData, getToken } from '@/lib/user-services';
import { redirect } from 'next/navigation';

const loginAuth = createContext<any | null>(null);


export function LoginAuthProvider({children} : {children: ReactNode}) {
const [loginAuth, setLoginAuth] = useState<any |null>(null);

    return (
        <loginAuth.Provider value ={{loginAuthFunc}}>
            {children}
        </loginAuth.Provider>
    )

}

export function loginAuthFunc() {


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
      {redirect("/login")}
    }, []);
}
