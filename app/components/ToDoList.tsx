"use client";

import React, { useState, useEffect } from "react";

type Difficulty = "Easy" | "Medium" | "Hard";

interface Todo {
    id: number;
    text: string;
    difficulty: Difficulty;
    completed: boolean;
}

const API_URL = "https://localhost:5001/api/todos"; 

const TodoList = () => {

    const [input, setInput] = useState<string>("");
    const [difficulty, setDifficulty] = useState<Difficulty>("Easy");
    const [todos, setTodos] = useState<Todo[]>([]);

    /* ---------------- LOAD TODOS ---------------- */

    const fetchTodos = async () => {
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setTodos(data);
        } catch (err) {
            console.error("Failed to load todos", err);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    /* ---------------- ADD TODO ---------------- */

    const handleAddTodo = async () => {

        if (!input.trim()) return;

        try {

            const res = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text: input,
                    difficulty: difficulty,
                    completed: false
                })
            });

            if (!res.ok) throw new Error("Failed to add todo");

            const newTodo = await res.json();

            setTodos((prev) => [newTodo, ...prev]);

            setInput("");
            setDifficulty("Easy");

        } catch (err) {
            console.error(err);
        }
    };

    /* ---------------- TOGGLE COMPLETE ---------------- */

    const handleToggleComplete = async (todo: Todo) => {

        try {

            const res = await fetch(`${API_URL}/${todo.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: todo.id,
                    text: todo.text,
                    difficulty: todo.difficulty,
                    completed: !todo.completed
                })
            });

            if (!res.ok) throw new Error("Failed to update");

            setTodos((prev) =>
                prev.map((t) =>
                    t.id === todo.id
                        ? { ...t, completed: !t.completed }
                        : t
                )
            );

        } catch (err) {
            console.error(err);
        }
    };

    /* ---------------- DELETE TODO ---------------- */

    const handleDelete = async (id: number) => {

        try {

            const res = await fetch(`${API_URL}/${id}`, {
                method: "DELETE"
            });

            if (!res.ok) throw new Error("Delete failed");

            setTodos((prev) => prev.filter((t) => t.id !== id));

        } catch (err) {
            console.error(err);
        }
    };

    const difficultyStyles: Record<Difficulty, string> = {
        Easy: "bg-green-300 rounded-3xl px-4",
        Medium: "bg-yellow-300 rounded-3xl px-4",
        Hard: "bg-red-400 text-white rounded-3xl px-4",
    };

    return (
        <div>

            {/* Todo List */}

            {todos.map((todo) => (

                <div key={todo.id} className="flex justify-between my-1">

                    <span className="flex items-center">

                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => handleToggleComplete(todo)}
                        />

                        <p
                            className={`px-2 ${
                                todo.completed
                                    ? "line-through text-gray-400"
                                    : ""
                            }`}
                        >
                            {todo.text}
                        </p>

                        <img
                            src="/assets/minus-button-icon-in-thin-line-art-vector-removebg-preview.png"
                            alt="delete"
                            width="25px"
                            className="mx-5 cursor-pointer"
                            onClick={() => handleDelete(todo.id)}
                        />

                    </span>

                    <span className={difficultyStyles[todo.difficulty]}>
                        {todo.difficulty}
                    </span>

                </div>

            ))}

            {/* Input Section */}

            <div className="flex justify-between items-center flex-col sm:flex-row">

                <div className="flex gap-2 my-4 items-center">

                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="New Todo"
                        className="px-2 py-1 rounded"
                    />

                    <img
                        src="/assets/add-icon-free-vector-removebg-preview.png"
                        width="35px"
                        alt="Add todo"
                        className="cursor-pointer"
                        onClick={handleAddTodo}
                    />

                </div>

                <div>

                    <select
                        value={difficulty}
                        onChange={(e) =>
                            setDifficulty(e.target.value as Difficulty)
                        }
                        className="border px-2 py-1 rounded"
                    >

                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>

                    </select>

                </div>

            </div>

        </div>
    );
};

export default TodoList;