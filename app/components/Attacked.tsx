"use client";

import { useAuth } from "@/context/context";

const Attacked = () => {
  const { tasksCompleted } = useAuth();
console.log("ATTACKED RENDER:", tasksCompleted);
  return (
    <div className="flex justify-center items-center h-full">
      {tasksCompleted >= 1 ? (
        <p>
          You've attacked {tasksCompleted}{" "}
          {tasksCompleted === 1 ? "time" : "times"}!
        </p>
      ) : (
        <p>Attack with all your might!</p>
      )}
    </div>
  );
};

export default Attacked;