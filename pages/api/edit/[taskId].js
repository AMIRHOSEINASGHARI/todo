import Task from "@/utils/models/Task";

export default async function handler(req, res) {
  const data = req.body.task;
  const id = req.query.taskId;
  if (req.method === "PATCH") {
    const task = await Task.findById(id);
    task.title = data.title;
    task.description = data.description;
    await task.save();
    res.status(200).json({ status: "success" });
  }
}
