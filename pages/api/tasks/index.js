import Task from "@/utils/models/Task";
import connectDB from "@/utils/mongodb";

export default async function handler(req, res) {
  // CONNECTING TO DATA BASE FUNCTION....................................................
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ status: "failed", message: "Cannot connect to data base!" });
    return;
  }
  if (req.method === "GET") {
    try {
      const AllTasks = await Task.find();
      res.status(200).json({ status: "success", data: AllTasks });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "failed", message: "Cannot get data from server" });
    }
  }
}
