"use client"
import { Token, UserInfo } from "@/interfaces/interface";

// const url = "https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/User/"

const url = "http://localhost:5218/"

export const createAccount = async (user: UserInfo) => {
const res = await fetch(url + "User/CreateUser", {
    method: "POST",
    headers: {
        "Content-Type":  "application/json"
    },
    body: JSON.stringify(user)
});

if (!res.ok)
{const data = await res.json();
    const message = data.message;
    console.log(message);
    return data.success;
}

const data = await res.json();
return data.success;
}

export const login = async (user: UserInfo) => {
    const res = await fetch(url + "User/Login" , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if(!res.ok){
        const data = await res.json();
        const message = data.message;
        console.log(message);
        return null;
    }
    const data: Token = await res.json();
    return data;
}

export const getUserByUsername = async (username: string) => {
    const res = await fetch(url + `User/GetUserByUsername/${username}`);
    const data = await res.json();
    localStorage.setItem("user", JSON.stringify(data));
}

export const getUserByUserID = async (id: number) => {
    const res = await fetch(url + `User/GetUserByUserId/${id}`);
    const data = await res.json();
    localStorage.setItem("user", JSON.stringify(data));
}

export const checkToken = () => {
    const token = localStorage.getItem("token");
    return !!token;
}


export const getToken = () => localStorage.getItem("token")??"";

export const loggedInData = () => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser) {
    return null;
  }

  try {
    return JSON.parse(storedUser);
  } catch {
    return null;
  }
}
