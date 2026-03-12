"use client"
import { Token, UserInfo } from "@/interfaces/interface";

const url = "https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/User/"

export const createAccount = async (user: UserInfo) => {
const res = await fetch("https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/User/CreateUser", {
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
    const res = await fetch("https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/User/Login" , {
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
    const res = await fetch(`https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/User/GetUserByUsername/${username}`);
    const data = await res.json();
    localStorage.setItem("user", JSON.stringify(data));
}

export const checkToken = () => {
    const token = getStorage()?.getItem("token");
    return !!token; //returns true if token exists, false otherwise
}
export const getStorage = () => {
  if (typeof window === "undefined") return null;
  return localStorage;
};

export const getToken = () => getStorage()?.getItem("token")??"";


export const loggedInData = () => JSON.parse(getStorage()?.getItem("user")!)