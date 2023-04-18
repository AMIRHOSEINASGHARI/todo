import Task from "@/utils/models/Task";
import connectDB from "@/utils/mongodb";

export default async function hadnler(req, res) {
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
  const { data } = req.body;
  if (req.method === "POST") {
    try {
      const task = await Task.create(data);
      res.status(200).json({ status: "success", data: task });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ status: "failed", message: "Cannot send data to data base!" });
    }
  }
}
