"use client"

import { Health } from "@/interfaces/interface";

type Difficulty = "Easy" | "Medium" | "Hard";

const url = "https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/api/Health/"

export const getHealth = async (token: string) => {
    const res = await fetch("https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/api/Health/GetHealth", {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });

    if(!res.ok) {
        const data = await res.json();
        const message = data.message;
        console.log(message);
        return [];
    }

    const data: Health[] = await res.json();
    return data;
}

export const createHealth = async (health: Health, token: string) => {
    const res = await fetch("https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/api/Health/CreateHealth", {
        method : "POST", 
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(health)
    });
     if(!res.ok) {
            const data = await res.json();
        const message = data.message;
        console.log(message);
        return false;
}
const data = await res.json();
return data;
}

export const damage = async (health: Health, difficulty: Difficulty, token: string) => {
    const res = await fetch("https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/api/Health/Damage", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(health)
    });
         if(!res.ok) {
        const data = await res.json();
        const message = data.message;
        console.log(message);
        return false;
    }

    const data = await res.json();
    return data;
}