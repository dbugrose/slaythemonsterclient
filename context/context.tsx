"use client"
import {useState, useContext, createContext, ReactNode, useEffect} from "react";
import { loggedInData, getToken } from '@/lib/user-services';
import { redirect } from 'next/navigation';
import { AuthContextType } from "@/interfaces/interface";
import { Score, ScoreContextType, Stats, StatsContextType } from "@/interfaces/interface";
import { getStats } from "@/lib/health-services";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

const StatsContext = createContext<StatsContextType | undefined>(undefined);

// export function ScoreProvider({children}: {children: ReactNode}){
//     useEffect(() => {
//     const user = loggedInData();
//     const storedToken = getToken();
//     }, []);

//   return (
//     <ScoreContext.Provider value={{score, setScore}}>
//     {children}
//     </ScoreContext.Provider>

//   )
// }

// export function StatsProvider({children}: {children: ReactNode}){
//     useEffect(() => {
//     const statLoad = async () => {
//     const user = await loggedInData();
//     console.log("this is coming from statsprovider" + stats)
//     }
//     statLoad();
// }, []);
//   return (
//     <StatsContext.Provider value={{stats, setStats}}>
//     {children}
//     </StatsContext.Provider>

//   )
// }


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState<Score | null>(null);
  const [stats, setStats] = useState<Stats | null>(null);
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const onLoad = async () => {
     const user = await loggedInData();
    await setUsername(user?.username || "");
    await setUserId(user?.id || 0);

    const storedToken = await getToken();
    setToken(storedToken);
    
    if (!storedToken) {
      redirect("/login");
    }

    const stats : any = await getStats(user.id, storedToken)
    await setScore(stats.health)
    localStorage.setItem("score", stats.health)


  }
  onLoad();
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

export function useAuth() {
const context = useContext(AuthContext);
  if(context === undefined)
  {return}
  return context;  
};

export function useStats() {
const context = useContext(ScoreContext);
  if(context === undefined)
  {return}
  return context;
}

export function useScore() {
  const context = useContext(StatsContext);
  if(context === undefined)
  {return}
  return context;

}