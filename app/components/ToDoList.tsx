"use client";

import React, { useState } from "react";

type Difficulty = "Easy" | "Medium" | "Hard";

interface Chore {
    id: number;
    text: string;
    difficulty: Difficulty;
    completed: boolean;
}

const ChoreList = () => {
    const [input, setInput] = useState<string>("");
    const [difficulty, setDifficulty] = useState<Difficulty>("Easy");
    const [chores, setChores] = useState<Chore[]>([]);
        const [counters, setCounters] = useState<Record<Difficulty, number>>({
        Easy: 0,
        Medium: 0,
        Hard: 0,
    });

    const handleAddChore = () => {
        if (!input.trim()) return;

        const newChore: Chore = {
            id: Date.now(),
            text: input,
            difficulty,
            completed: false,
        };

        setChores([...chores, newChore]);
        setInput("");
        setDifficulty("Easy");
    };

    const handleDelete = (id: number) => {
        setChores(chores.filter((chore) => chore.id !== id));
    };

    const handleToggleComplete = (id: number) => {
        const updatedChores = chores.map((chore) => {
            if (chore.id === id && !chore.completed) {
                setCounters((prev) => ({
                    ...prev,
                    [chore.difficulty]: prev[chore.difficulty] + 1,
                }));

                return { ...chore, completed: true };
            }
            return chore;
        });

        setChores(updatedChores);
    };

    const difficultyStyles: Record<Difficulty, string> = {
        Easy: "bg-[#7BD576] rounded-3xl text-[#593819] px-5",
        Medium: "bg-[#F3E43F] rounded-3xl text-[#593819] px-5",
        Hard: "bg-[#F87171] rounded-3xl text-white px-5",
    };

    return (
        <div>
                        
            {/* <div className="flex gap-4 mb-4 font-semibold">
                <span className="text-green-600">Easy: {counters.Easy}</span>
                <span className="text-yellow-600">Medium: {counters.Medium}</span>
                <span className="text-red-600">Hard: {counters.Hard}</span>
            </div> */}
            {chores.map((chore) => (
                <div key={chore.id}>
                    <div className="flex justify-between my-1">
                        <div>
                            <span className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={chore.completed}
                                    disabled={chore.completed}
                                    onChange={() => handleToggleComplete(chore.id)}
                                />
                                <p
                                    className={`px-1 ${
                                        chore.completed
                                            ? "line-through text-gray-400"
                                            : ""
                                    }`}
                                >
                                    {chore.text}
                                </p>
                                <img
                                    src="/assets/minus-button-icon-in-thin-line-art-vector-removebg-preview.png"
                                    alt="delete button"
                                    width="25px"
                                    className="mx-5 cursor-pointer"
                                    onClick={() => handleDelete(chore.id)}
                                />
                            </span>
                        </div>
                        <div>
                            <span className={difficultyStyles[chore.difficulty]}>
                                {chore.difficulty}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
            <div className="flex justify-between items-center flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row">
                {/* Input Section */}
                <div className="flex gap-2 my-4 items-center ">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Custom Chore"
                        className="px-2 py-1 rounded"
                        width="100px"
                    />
                    {/* Image Add Button */}
                    <img
                        src="/assets/add-icon-free-vector-removebg-preview.png"
                        width="35px"
                        id="new-task-form"
                        alt="Add chore"
                        className="cursor-pointer"
                        onClick={handleAddChore}
                    />
                </div><div>
                    <select
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value as Difficulty)}
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

export default ChoreList;