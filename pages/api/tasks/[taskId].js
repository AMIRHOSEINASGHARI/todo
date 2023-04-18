import Task from "@/utils/models/Task";

export default async function handler(req, res) {
  const id = req.query.taskId;
  if (req.method === "DELETE") {
    try {
      await Task.findOneAndDelete({ _id: id });
      res
        .status(200)
        .json({ status: "success", message: "Task deleted successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        status: "failed",
        message: "Server Error: Cannot delete task!",
      });
    }
  } else if (req.method === "PATCH") {
    const data = req.body;
    const task = await Task.findById(id);
    task.completed = !data.taskCompleted;
    await task.save();
    console.log(task);
    res.status(200).json({
      status: "success",
      message: "Task Updated successfully",
      data: task,
    });
  } else if (req.method === "GET") {
    const task = await Task.findById(id);
    res.status(200).json({
      status: "success",
      message: "Task successfully got!",
      data: task,
    });
  }
}
