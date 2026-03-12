"use client"
import {useState, useContext, createContext, ReactNode, useEffect} from "react";
import { loggedInData, getToken } from '@/lib/user-services';
import { redirect } from 'next/navigation';
import { AuthContextType } from "@/interfaces/interface";


const AuthContext = createContext<AuthContextType>({
  token: "",
  userId: 0,
  username: "",
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = loggedInData();
    setUsername(user?.username || "");
    setUserId(user?.id || 0);

    const storedToken = getToken();
    setToken(storedToken);

    if (!storedToken) {
      redirect("/login");
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        username,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

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
