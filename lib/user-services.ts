import { Token, UserInfo } from "@/interfaces/interface";

const url = "https://rosedcsablogdb-ffdwe0b8dpg9hrdu.westus3-01.azurewebsites.net/User"

export const createAccount = async (user: UserInfo) => {
const res = await fetch(url + "CreateUser", {
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
    const res = await fetch(url + 'Login', {
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
    const res = await fetch(url + `GetUserByUsername/${username}`);
    const data = await res.json();
    localStorage.setItem("user", JSON.stringify(data));
}

export const checkToken = () => {
    const token = localStorage.getItem("token");
    return !!token; //returns true if token exists, false otherwise
}

export const getToken = () => localStorage.getItem("token");

export const loggedInData = () => JSON.parse(localStorage.getItem("user")!)