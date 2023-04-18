import TaskForm from "@/components/TaskForm";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Edit = () => {
  const router = useRouter();
  const [task, setTask] = useState(null);
  useEffect(() => {
    fetch(`/api/tasks/${router.query.taskId}`)
      .then((res) => res.json())
      .then((json) => setTask(json.data));
  }, []);
  const saveTask = (id) => {
    fetch(`/api/edit/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ task }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json)
      .then((json) => console.log(json))
      .then(router.push("/"));
  };
  return (
    <div className="m-5 mt-10 space-y-5">
      {task && (
        <div className="space-y-5">
          <div className="flex flex-col space-y-2">
            <label className="font-bold text-slate-500">عنوان</label>
            <input
              value={task.title}
              onChange={(e) => {
                setTask({
                  ...task,
                  [e.target.name]: e.target.value,
                });
              }}
              name="title"
              autoFocus
              type="text"
              placeholder="عنوان"
              className="shadow-md shadow-gray-200 py-3 px-5 rounded-full outline-none placeholder:text-sm focus:outline-blue-400 focus:rounded-xl"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="font-bold text-slate-500">توضیحات</label>
            <textarea
              value={task.description}
              onChange={(e) => {
                setTask({
                  ...task,
                  [e.target.name]: e.target.value,
                });
              }}
              name="description"
              rows={5}
              placeholder="توضیحات"
              className="shadow-md shadow-gray-200 py-3 px-5 rounded-3xl outline-none placeholder:text-sm focus:outline-blue-400 focus:rounded-xl"
            />
          </div>
        </div>
      )}
      <button
        onClick={() => saveTask(task._id)}
        type="button"
        className="bg-black text-white py-2 px-5 font-semibold"
      >
        ذخیره
      </button>
    </div>
  );
};

export default Edit;
