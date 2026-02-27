"use client";

import React, { useState } from "react";

type Difficulty = "Easy" | "Medium" | "Hard";

interface Chore {
    id: number;
    text: string;
    difficulty: Difficulty;
}

const ChoreList = () => {
    const [input, setInput] = useState<string>("");
    const [difficulty, setDifficulty] = useState<Difficulty>("Easy");
    const [chores, setChores] = useState<Chore[]>([]);

    const handleAddChore = () => {
        if (!input.trim()) return;

        const newChore: Chore = {
            id: Date.now(),
            text: input,
            difficulty,
        };

        setChores([...chores, newChore]);
        setInput("");
        setDifficulty("Easy");
    };

    const handleDelete = (id: number) => {
        setChores(chores.filter((chore) => chore.id !== id));
    };

    const difficultyStyles: Record<Difficulty, string> = {
        Easy: "bg-[#7BD576] rounded-3xl text-[#593819] px-5",
        Medium: "bg-[#F3E43F] rounded-3xl text-[#593819] px-5",
        Hard: "bg-[#F87171] rounded-3xl text-white px-5",
    };

    return (
        <div>
            {/* Rendered Chores */}
            {chores.map((chore) => (
                <div key={chore.id}>
                    <div className="flex justify-between my-1">
                        <div>
                            <span className="flex items-center">
                                <input type="checkbox" />
                                <p className="px-1">{chore.text}</p>
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