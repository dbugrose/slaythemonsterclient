"use client"
import { Todo, CreateTodo, FriendRequest } from "@/interfaces/interface";
import { Stats } from "fs";


// const url = "https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/api/Todos/"

const url = "http://localhost:5218/"

export const getIncomingRequests = async (userid: number, token: string) => {
    const res = await fetch(url + `api/FriendsRequest/GetIncomingRequests/${userid}`, {
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
        return [];
    }

    const data: FriendRequest[] = await res.json();
    return data;
}

export const getFriends = async (userid: number, token: string) => {
    const res = await fetch(url + `api/FriendsRequest/GetFriends/${userid}`, {
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
        return [];
    }

    const data: FriendRequest[] = await res.json();
    return data;
}

export const getFriendStats = async (userid: number, token: string) => {
    const res = await fetch(url + `api/FriendsRequest/GetFriendStats/${userid}`, {
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
        return [];
    }

    const data: Stats[] = await res.json();
    return data;
}

export const GetSentRequests = async (userId: number, token: string) => {
    const res = await fetch(url + `api/FriendsRequest/GetSentRequests/${userId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        }
    });
    if (!res.ok) {
        const data = await res.json();
        const message = data.message;
        console.log(message);
        return [];
    }
    const data = await res.json();
    return data;
}
export const SendFriendRequest = async (request: FriendRequest, userId: number, token: string) => {
    console.log(token)
    const res = await fetch(url + `api/FriendsRequest/SendRequest`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(request)
    });
    if (!res.ok) {
        const data = await res.json();
        const message = data.message;
        console.log(message);
        return false;
    }
    const data = await res.json();
    return data;
}

export const AcceptRequest = async (requestId: number, token: string) : Promise<FriendRequest> => {
    console.log(requestId);
    const res = await fetch(url + `api/FriendsRequest/AcceptRequest/${requestId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
    });
    if (!res.ok) {
        const data = await res.json();
        const message = data.message;
        console.log(message);
        console.log("accept failed")
        return data;
    }
    const data : FriendRequest = await res.json();
    return data;
}

export const DeclineRequest = async (requestId: number, token: string) : Promise<FriendRequest> => {
    console.log(requestId);
    const res = await fetch(url + `api/FriendsRequest/DeclineRequest/${requestId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
    });
    if (!res.ok) {
        const data = await res.json();
        const message = data.message;
        console.log(message);
        console.log("accept failed")
        return data;
    }
    const data : FriendRequest = await res.json();
    return data;
}

export const CancelRequest = async (request: FriendRequest, token: string) => {
    const res = await fetch(url + `api/FriendsRequest/CancelRequest`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(request)
    });
    if (!res.ok) {
        const data = await res.json();
        const message = data.message;
        console.log(message);
        return false;
    }
    const data = await res.json();
    return data;
}