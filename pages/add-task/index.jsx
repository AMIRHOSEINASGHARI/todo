import TaskForm from "@/components/TaskForm";
import { useRouter } from "next/router";
import React, { useState } from "react";

const AddTask = () => {
  const router = useRouter();
  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    completed: false,
    doing: false,
  });
  const changeHandler = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value,
    });
  };
  const createTask = () => {
    fetch("/api/add-task", {
      method: "POST",
      body: JSON.stringify({ data: taskData }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then(router.push("/"));
  };
  return (
    <div className="m-5 mt-10 space-y-5">
      <TaskForm taskData={taskData} changeHandler={changeHandler} />
      <button
        type="button"
        className="bg-black text-white py-2 px-5 font-semibold"
        onClick={createTask}
      >
        افزودن
      </button>
    </div>
  );
};

export default AddTask;
