import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const TaskDetails = () => {
  const router = useRouter();
  const [task, setTask] = useState(null);
  useEffect(() => {
    fetch(`/api/tasks/${router.query.taskId}`)
      .then((res) => res.json())
      .then((json) => setTask(json.data));
  }, []);
  console.log(task);
  return (
    <div className="m-5">
      {task && (
        <div className="space-y-5">
          <div className="bg-slate-100 rounded-md p-3">
            <h1 className="px-2">عنوان:</h1>
            <hr className="mb-3 mt-1" />
            <p className="px-2 font-bold text-xl text-slate-600">
              {task.title}
            </p>
          </div>
          <div className="bg-slate-100 rounded-md p-3">
            <h1 className="px-2">توضیحات:</h1>
            <hr className="mb-3 mt-1" />
            <p className="px-2 font-bold text-xl text-slate-600">
              {task.description ? task.description : "هیچ توضیحی وجود ندارد!"}
            </p>
          </div>
          <div className="bg-slate-100 rounded-md p-3">
            <h1 className="px-2">وضعیت: </h1>
            <hr className="mb-3 mt-1" />
            <p
              className={`font-bold text-xl ${
                task.completed
                  ? "text-green-500 bg-green-100 rounded-md px-2"
                  : "text-orange-500"
              }`}
            >
              {task.completed ? "انجام شده" : "هنوز تکمیل نشده است"}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskDetails;
