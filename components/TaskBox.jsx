import React, { useState } from "react";
import { BsCheck2Square } from "react-icons/bs";
import { BiEditAlt } from "react-icons/bi";
import { HiOutlineClock } from "react-icons/hi";
import { FiTrash } from "react-icons/fi";
import { useRouter } from "next/router";
import Link from "next/link";

const TaskBox = ({ _id, title, description, completed }) => {
  const router = useRouter();
  const [taskCompleted, setTaskCompleted] = useState(completed);
  // DELETING TASK FUNCTION........................................
  const deleteTask = (id) => {
    fetch(`/api/tasks/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then(window.location.reload());
  };
  // COMPLETING TASK FUNCTION......................................
  const completeTask = (id) => {
    setTaskCompleted(!taskCompleted);
    fetch(`/api/tasks/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ taskCompleted }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then(window.location.reload());
  };
  return (
    <div
      className={`shadow-md rounded-lg p-5 border-l-8 flex items-center justify-between ${
        completed ? "border-green-500 bg-green-50" : "border-gray-400"
      }`}
    >
      <Link
        href={`/task/${_id}`}
        className={`${
          completed ? "text-green-500" : "text-slate-500"
        } font-bold px-3 py-1 w-full rounded-xl hover:bg-gray-100 ml-1 transition duration-100 ease-in-out`}
      >
        {title.length > 25 ? `${title.substring(0, 25)}...` : title}
      </Link>
      <div className="flex items-center gap-7">
        <div
          className={`rounded-lg w-7 h-7 cursor-pointer flex items-center justify-center bg-red-100`}
          onClick={() => deleteTask(_id)}
        >
          <FiTrash className="text-red-500 text-lg" />
        </div>
        <div
          onClick={() => router.push(`/edit/${_id}`)}
          className="rounded-lg w-7 h-7 cursor-pointer flex items-center justify-center bg-blue-50 text-blue-500"
        >
          <BiEditAlt />
        </div>
        <div
          className={`rounded-lg cursor-pointer w-7 h-7 flex items-center justify-center ${
            completed ? "bg-green-100" : "bg-gray-100"
          }`}
        >
          <BsCheck2Square
            onClick={() => completeTask(_id)}
            className={`${
              completed ? "text-green-500" : "text-gray-400"
            } text-lg`}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskBox;
