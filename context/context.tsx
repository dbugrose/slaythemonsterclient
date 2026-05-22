"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { redirect } from "next/navigation";

import { loggedInData, getToken } from "@/lib/user-services";

import {
  getStats,
  resetHealth,
} from "@/lib/health-services";

import Monsters from "@/MonsterImages.json";

import {
  AuthContextType,
  Stats,
} from "@/interfaces/interface";

type GlobalContextType = AuthContextType & {
  score: number;
  stats: Stats | null;

  monster: string | null;

  // GLOBAL TASK COUNTER
  tasksCompleted: number;

  setScore: React.Dispatch<
    React.SetStateAction<number>
  >;

  setStats: React.Dispatch<
    React.SetStateAction<Stats | null>
  >;

  setMonster: React.Dispatch<
    React.SetStateAction<string | null>
  >;

  setTasksCompleted: React.Dispatch<
    React.SetStateAction<number>
  >;

  incrementTasksCompleted: () => void;

  generateNewMonster: () => void;
};

const AuthContext = createContext<
  GlobalContextType | undefined
>(undefined);

export const AuthProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  // AUTH
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(0);
  const [username, setUsername] = useState("");

  // GAME STATE
  const [score, setScore] =
    useState<number>(100);

  const [stats, setStats] =
    useState<Stats | null>(null);

  const [monster, setMonster] =
    useState<string | null>(null);

  // LOAD TASKS FROM LOCAL STORAGE
  const [tasksCompleted, setTasksCompleted] =
    useState<number>(0);

  // INITIAL LOAD
  useEffect(() => {
    const storedTasks =
      localStorage.getItem(
        "tasksCompleted"
      );

    if (storedTasks) {
      setTasksCompleted(
        Number(storedTasks)
      );
    }

    const onLoad = async () => {
      const user =
        await loggedInData();

      setUsername(user?.username || "");
      setUserId(user?.id || 0);

      const storedToken =
        await getToken();

      if (!storedToken) {
        redirect("/login");
      }

      setToken(storedToken);

      // FETCH PLAYER STATS
      const fetchedStats: any =
        await getStats(
          user.id,
          storedToken
        );

      setStats(fetchedStats);

      setScore(
        Number(fetchedStats.health)
      );

      localStorage.setItem(
        "score",
        `${fetchedStats.health}`
      );

      // LOAD MONSTER
      const storedMonster =
        localStorage.getItem(
          "selectedMonster"
        );

      if (storedMonster) {
        setMonster(storedMonster);
      } else {
        generateNewMonster(
          user.id,
          storedToken
        );
      }
    };

    onLoad();
  }, []);

  // SAVE TASKS TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(
      "tasksCompleted",
      tasksCompleted.toString()
    );
  }, [tasksCompleted]);

  // INCREMENT TASK COUNTER
  const incrementTasksCompleted =
    () => {
      setTasksCompleted((prev) => {
        const next = prev + 1;

        localStorage.setItem(
          "tasksCompleted",
          next.toString()
        );

        console.log(
          "tasksCompleted:",
          next
        );

        return next;
      });
    };

  // GENERATE NEW MONSTER
  const generateNewMonster = async (
    currentUserId?: number,
    currentToken?: string
  ) => {
    setTimeout(async () => {
      let newMonster: string;

      do {
        const randomIndex =
          Math.floor(
            Math.random() *
              Monsters.length
          );

        newMonster =
          Monsters[randomIndex]
            .download_url;
      } while (
        newMonster === monster
      );

      setMonster(newMonster);

      localStorage.setItem(
        "selectedMonster",
        newMonster
      );

      // RESET TASK COUNTER
      setTasksCompleted(0);

      localStorage.setItem(
        "tasksCompleted",
        "0"
      );

      // RESET HEALTH
      const newHealth =
        await resetHealth(
          stats as any,
          currentToken || token
        );

      setScore(Number(newHealth));

      setStats((prev) =>
        prev
          ? {
              ...prev,
              health:
                Number(newHealth),
            }
          : prev
      );

      localStorage.setItem(
        "score",
        `${newHealth}`
      );
    }, 100);
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        userId,
        username,

        score,
        stats,
        monster,

        tasksCompleted,

        setScore,
        setStats,
        setMonster,

        setTasksCompleted,
        incrementTasksCompleted,

        generateNewMonster,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context =
    useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider"
    );
  }

  return context;
};