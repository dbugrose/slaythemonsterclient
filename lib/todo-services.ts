"use client"
import { Todo, CreateTodo, Health, Stats } from "@/interfaces/interface";

const url = "https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/api/Todos/"

export const getTodos = async (token: string) => {
    const res = await fetch("https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/api/Todos/GetTodos", {
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

    const data: Todo[] = await res.json();
    return data;
}

export const getTodosByUserId = async (userId: number, token: string) => {
    const res = await fetch(`https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/api/Todos/GetTodosByUserId/${userId}`, {
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
     const data = await res.json();
    return data.Todos;
}
export const createTodo = async (todo: CreateTodo, token: string) => {
    const res = await fetch("https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/api/Todos/CreateTodo", {
        method : "POST", 
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(todo)
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

export const updateTodo = async (todo: Todo, token: string) => {
    const res = await fetch("https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/api/Todos/UpdateTodo", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(todo)
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

export const deleteTodo = async (todo: Todo, token: string) => {
    const res= await fetch("https://slaythemonster2526dor-ghhnbvgkercbd0gx.westus3-01.azurewebsites.net/api/Todos/HardDeleteTodo",  {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token
        },
        body: JSON.stringify(todo)
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