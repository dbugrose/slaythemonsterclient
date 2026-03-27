type Difficulty = "Easy" | "Medium" | "Hard";
export interface Todo {
    id: number;
    userId: number;
    text: string;
    difficulty: Difficulty;
    completed: boolean;
    deleted: boolean;
}

export interface CreateTodo {
    userId: number;
    text: string;
    difficulty: Difficulty;
    completed: boolean;
    deleted: boolean;
}

export interface Token {
    token: string
}

export interface UserData {
    id: number
    username: string
}

export interface UserInfo {
    username: string
    password: string
}

export interface Stats {
id: number
userId: number
username: string
monstersSlain: number  
tasksCompleted: number
easyTasks: number
medTasks: number
hardTasks: number
health: number
}

export interface FriendRequest {
id: number
senderUser: string
senderId: number
receiverUser: string
receiverId: number
status: string
}

export interface CreateFriendRequest {
senderUser: string
senderId: number
receiverUser: string
receiverId: number
status: string
}
export interface Score {
    score: number
}
export interface AuthContextType {
  token: string;
  userId: number;
  username: string;
}

export interface StatsContextType {
    stats: Stats | null;
    setStats: (stats: Stats | null) => void
}



export interface ScoreContextType {
score: Score | null;
setScore: (score: Score | null) => void
}