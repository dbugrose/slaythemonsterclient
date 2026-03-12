"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ConfettiFireworks } from "./Fireworks";
import { Todo, CreateTodo, UserData } from "@/interfaces/interface";
import { getTodos, getTodosByUserId, createTodo, updateTodo, deleteTodo } from "@/lib/todo-services";
import { getToken, loggedInData } from "@/lib/user-services";

type Difficulty = "Easy" | "Medium" | "Hard";

const HP = 100;

const DifficultyPoints: Record<Difficulty, number> = {
  Easy: 10,
  Medium: 20,
  Hard: 30,
};

const DifficultyStyles: Record<Difficulty, string> = {
  Easy: "bg-[#7BD576] rounded-3xl text-[#593819] px-5",
  Medium: "bg-[#F3E43F] rounded-3xl text-[#593819] px-5",
  Hard: "bg-[#F87171] rounded-3xl text-white px-5",
};

const TodoList = () => {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [difficulty, setDifficulty] = useState<Difficulty>("Easy");
  const [score, setScore] = useState<number>(HP);
  const [showVictoryModal, setShowVictoryModal] = useState(false);
  const [userId, setUserId] = useState(0);

  const router = useRouter();

  /* ---------------- INITIAL SETUP ---------------- */
  useEffect(() => {
    const user = loggedInData();
    setUsername(user?.username || "");
    setUserId(user?.id || 0);

    const token = getToken();
    setToken(token);
  }, []);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const result = await getTodos(token);
        // Ensure it's always an array
        setTodos(Array.isArray(result) ? result : []);
      } catch (error) {
        console.error("Error fetching todos:", error);
        setTodos([]);
      }
    };

    fetchTodos();
  }, [todos]);

  /* ---------------- LOCAL STORAGE ---------------- */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);

  /* ---------------- ADD TODO ---------------- */
  const handleAddTodo = async () => {
    if (!input.trim()) return;

    const newTodo: CreateTodo = {
      userId,
      text: input,
      difficulty,
      completed: false,
      deleted: false,
    };

    try {
      const result = await createTodo(newTodo, token);
      setTodos(Array.isArray(result) ? result : []);
      setInput("");
      setDifficulty("Easy");
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  /* ---------------- DELETE TODO ---------------- */
  const handleDelete = async (todo: Todo, token: string) => {
    try {
      const success = await deleteTodo(todo, token);
      if (success) {
        const updatedTodos = await getTodosByUserId(userId, token);
        setTodos(Array.isArray(updatedTodos) ? updatedTodos : []);
      } else {
        alert("Todo was not deleted.");
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  /* ---------------- TOGGLE COMPLETE ---------------- */
  const handleToggleComplete = async (todo: Todo) => {
    if (todo.completed) return;

    todo.completed = true;
    try {
      const updatedTodos = await updateTodo(todo, token);
      setTodos(Array.isArray(updatedTodos) ? updatedTodos : []);

      // Deduct score
      const pointsToSubtract = DifficultyPoints[todo.difficulty];
      setScore((prev) => Math.max(prev - pointsToSubtract, 0));
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  /* ---------------- CLEAR FUNCTIONS ---------------- */
  const handleClearCompleted = () => {
    todos.map((item: Todo) => (
    item.completed == true && 
    (deleteTodo(item, token))
    ))
    setTodos(todos); };

  const handleClearAllTodos = () => {
    todos.map((item) => (
       (deleteTodo(item, token))
    ))
    setTodos(todos);
  };

  /* ---------------- VICTORY MODAL ---------------- */
  const triggerVictory = () => {
    ConfettiFireworks();
    setTimeout(() => setShowVictoryModal(true), 5500);
  };

  useEffect(() => {
    if (score === 0) {
      triggerVictory();
    }
  }, [score]);

  return (
    <div>
      {Array.isArray(todos) &&
        todos.map((todo: Todo) => (
          <div key={todo.id} className="flex justify-between my-1">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                disabled={todo.completed}
                onChange={() => handleToggleComplete(todo)}
              />
              <p className={`px-1 ${todo.completed ? "line-through text-gray-400" : ""}`}>
                {todo.text}
              </p>
              <img
                src="/assets/minus-button-icon-in-thin-line-art-vector-removebg-preview.png"
                alt="delete button"
                width="25px"
                className="mx-5 cursor-pointer"
                onClick={() => handleDelete(todo, token)}
              />
            </div>
            <span className={DifficultyStyles[todo.difficulty]}>{todo.difficulty}</span>
          </div>
        ))}

      {/* Input Section */}
      <div className="flex justify-between items-center flex-col sm:flex-row my-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Custom Chore"
          className="px-2 py-1 rounded"
        />
        <div className="flex flex-row gap-2 mt-2 sm:mt-0">
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty)}
            className="border px-2 py-1 rounded"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <img
            src="/assets/add-icon-free-vector-removebg-preview.png"
            width="35px"
            alt="Add todo"
            className="cursor-pointer"
            onClick={handleAddTodo}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-4">
        <button onClick={handleClearCompleted} className="bg-[#FCC27D] rounded-3xl text-[#593819] px-5">
          Clear completed
        </button>
        <button onClick={handleClearAllTodos} className="bg-[#FCC27D] rounded-3xl text-[#593819] px-5">
          Clear All
        </button>
      </div>

      {/* Victory Modal */}
      {showVictoryModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[url(/assets/royal-golden-border-stockcake-removebg-preview.png)] bg-size-[100%_100%] p-15 text-center max-w-md">
            <h2 className="text-2xl font-bold mb-4 text-red-800">You've slain a monster!</h2>
            <p className="mb-4">
              Check your{" "}
              <span className="text-red-800 underline cursor-pointer" onClick={() => router.push("/pages/battle")}>
                Battle tab
              </span>{" "}
              to see!
            </p>
            <button
              onClick={() => setShowVictoryModal(false)}
              className="px-4 py-2 bg-red-800 text-white rounded-xl hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;