import Link from "next/link";
import { useRouter } from "next/router";
import { BiAddToQueue } from "react-icons/bi";

const AddTask = () => {
  const router = useRouter();
  return (
    <div className="flex items-center">
      <button
        type="button"
        onClick={() => router.push("/add-task")}
        className="bg-gray-50 p-5 rounded-full shadow-md shadow-gray-300 cursor-pointer text-blue-500 text-xl"
      >
        <BiAddToQueue />
      </button>
    </div>
  );
};

export default AddTask;
