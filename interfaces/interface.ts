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
username: string
monstersSlain: number  
tasksCompleted: number
easyTasks: number
medTasks: number
hardTasks: number
}

export interface Health {
id: number
username: string
health: number
}

export interface FriendRequest {
id: number
senderId: string
receiverId: string
status: string
}

export interface AuthContextType {
  token: string;
  userId: number;
  username: string;
}