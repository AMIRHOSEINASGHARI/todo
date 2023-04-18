import React from "react";

const TaskForm = ({ taskData, changeHandler }) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col space-y-2">
        <label className="font-bold text-slate-500">عنوان</label>
        <input
          onChange={changeHandler}
          name="title"
          autoFocus
          type="text"
          placeholder="عنوان"
          className="shadow-md shadow-gray-200 py-3 px-5 rounded-full outline-none placeholder:text-sm focus:outline-blue-400 focus:rounded-xl"
          value={taskData.title}
        />
      </div>
      <div className="flex flex-col space-y-2">
        <label className="font-bold text-slate-500">توضیحات</label>
        <textarea
          onChange={changeHandler}
          name="description"
          rows={5}
          placeholder="توضیحات"
          className="shadow-md shadow-gray-200 py-3 px-5 rounded-3xl outline-none placeholder:text-sm focus:outline-blue-400 focus:rounded-xl"
          value={taskData.description}
        />
      </div>
    </div>
  );
};

export default TaskForm;
