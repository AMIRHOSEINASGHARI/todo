import AddTask from "@/components/AddTask";
import TaskBox from "@/components/TaskBox";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("/api/tasks")
      .then((res) => res.json())
      .then((json) => setTasks(json.data));
  }, []);
  const completedTasks = tasks.filter((task) => task.completed === true);
  const notCompletedTasks = tasks.filter((task) => task.completed === false);
  return (
    <div className="m-5">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-between gap-2">
            <h1 className="font-bold">همه‌ی تسک‌ها:</h1>
            <p className="font-montserrat font-bold w-7 h-7 flex items-center justify-center rounded-lg text-slate-500 bg-slate-200">
              {tasks.length}
            </p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <h1 className="font-bold">انجام شده:</h1>
            <p className="font-montserrat font-bold w-7 h-7 flex items-center justify-center rounded-lg text-green-500 bg-green-200">
              {completedTasks.length}
            </p>
          </div>
        </div>
        <AddTask />
      </div>
      {tasks.length > 0 ? (
        <div className="space-y-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {completedTasks.length > 0 &&
              completedTasks.map((task) => (
                <TaskBox key={task._id} {...task} />
              ))}
          </div>
          {notCompletedTasks.length !== 0 && <hr />}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {notCompletedTasks.map((task) => (
              <TaskBox key={task._id} {...task} />
            ))}
          </div>
        </div>
      ) : (
        <h1>Loading Tasks...</h1>
      )}
    </div>
  );
};

export default Home;
