"use client";

import React, { useState, useEffect } from "react";

type Difficulty = "Easy" | "Medium" | "Hard";

interface Chore {
    id: number;
    text: string;
    difficulty: Difficulty;
    completed: boolean;
}

const HP = 100;

const difficultyPoints: Record<Difficulty, number> = {
    Easy: 5,
    Medium: 10,
    Hard: 15,
};

const ChoreList = () => {
    const [input, setInput] = useState<string>("");
    const [difficulty, setDifficulty] = useState<Difficulty>("Easy");
    const [chores, setChores] = useState<Chore[]>([]);
    const [score, setScore] = useState<number>(HP);

    /* ---------------- LOAD FROM LOCAL STORAGE ---------------- */
    useEffect(() => {
        const storedChores = localStorage.getItem("chores");
        const storedScore = localStorage.getItem("score");

        if (storedChores) {
            setChores(JSON.parse(storedChores));
        }

        if (storedScore) {
            setScore(JSON.parse(storedScore));
        }
    }, []);

    /* ---------------- SAVE TO LOCAL STORAGE ---------------- */
    useEffect(() => {
        localStorage.setItem("chores", JSON.stringify(chores));
    }, [chores]);

    useEffect(() => {
        localStorage.setItem("score", JSON.stringify(score));
    }, [score]);

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
        setChores((prevChores) =>
            prevChores.map((chore) => {
                if (chore.id === id && !chore.completed) {
                    const pointsToSubtract = difficultyPoints[chore.difficulty];

                    setScore((prevScore) =>
                        Math.max(prevScore - pointsToSubtract, 0)
                    );

                    return { ...chore, completed: true };
                }
                return chore;
            })
        );
    };

    const difficultyStyles: Record<Difficulty, string> = {
        Easy: "bg-[#7BD576] rounded-3xl text-[#593819] px-5",
        Medium: "bg-[#F3E43F] rounded-3xl text-[#593819] px-5",
        Hard: "bg-[#F87171] rounded-3xl text-white px-5",
    };

    return (
        <div>
            {/* Score Display */}
            {/* <div className="mb-4 font-bold text-lg">
                Score: {score}
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

            {/* Input Section */}
            <div className="flex justify-between items-center flex-col sm:flex-row">
                <div className="flex gap-2 my-4 items-center">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Custom Chore"
                        className="px-2 py-1 rounded"
                    />
                    <img
                        src="/assets/add-icon-free-vector-removebg-preview.png"
                        width="35px"
                        alt="Add chore"
                        className="cursor-pointer"
                        onClick={handleAddChore}
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

export default ChoreList
