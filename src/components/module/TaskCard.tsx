import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils";
import type { ITask } from "@/types";
import { useDispatch } from "react-redux";
import { Checkbox } from "../ui/checkbox";
import { deleteTask, toggleCompleteStae } from "@/redux/task/taskSlice";

interface IProps{
    task: ITask
}
import { AiTwotoneDelete } from "react-icons/ai";

const TaskCard = ({task}:IProps) => {
  const dispatch = useDispatch()
    return (
        <Card className="m-3 p-3 min-w-2/5 justify-center ">
  <CardHeader>
    <CardTitle className="flex items-center">
      <div className={cn("size-3 rounded-full mr-2", {
        "bg-green-500": task.priority === "low",
        "bg-red-500": task.priority === "medium",
        "bg-yellow-500": task.priority === "high",
      })}></div>
      <div className={cn({"line-through": task.isCompleted})}>{task.title}</div>
      </CardTitle>
    <CardDescription>{task.description}</CardDescription>
    <CardAction>{task.isCompleted}</CardAction>
  </CardHeader>
  <CardContent>
    <p>{task.priority}</p>
  </CardContent>
  <CardFooter>
    <p>{task.dueDate}</p>
  </CardFooter>
  <div className="flex">
    <AiTwotoneDelete onClick={() => dispatch(deleteTask(task.id))} className="mr-3 text-red-500"  />
  <Checkbox checked={task.isCompleted} onClick={() => dispatch(toggleCompleteStae(task.id))}></Checkbox>
  </div>
</Card>
    );
};

export default TaskCard;