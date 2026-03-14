"use client"

import { Health } from "@/interfaces/interface";

type Difficulty = "Easy" | "Medium" | "Hard";

// const url = "https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/api/Health/"

const url = "http://localhost:5218/"

export const getHealth = async (token: string) : Promise<number> => {
    const res = await fetch(url + "api/Health/GetHealth", {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });

    if (!res.ok) {
        const data = await res.json();
        const message = data.message;
        console.log(message);
        return 0;
    }

    const data: number = await res.json();
    return data;
}


export const getHealthByUserId = async (userId: number, token: string) => {
    const res = await fetch(url + `api/Health/GetHealthByUserId/${userId}`, {
    method: "GET",
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
// export const createHealth = async (health: Health, token: string) => {
//     const res = await fetch("https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/api/Health/CreateHealth", {
//         method : "POST", 
//         headers: {
//             "Content-type": "application/json",
//             "Authorization": "Bearer " + token
//         },
//         body: JSON.stringify(health)
//     });
//      if(!res.ok) {
//             const data = await res.json();
//         const message = data.message;
//         console.log(message);
//         return false;
// }
// const data = await res.json();
// return data;
// }
export const damage = async (health: Health[], difficulty: string, token: string) : Promise<number> => {
    const res = await fetch(url + `api/Health/Damage/${difficulty}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
        body: JSON.stringify(health)

        }
    );

    if (!res.ok) {
        const data = await res.json();
        console.log(data.message);
        return 0;
    }

    const data: number = await res.json();
    console.log(data);
    return data;
};

export const resetHealth = async (health: Health[], token: string) : Promise<number> => {
    const res = await fetch(url + `api/Health/Damage/ResetHealth`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            },
        body: JSON.stringify(health)

        }
    );

    if (!res.ok) {
        const data = await res.json();
        console.log(data.message);
        return 0;
    }

    const data: number = await res.json();
    console.log(data);
    return data;
};