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
interface IProps{
    task: ITask
}

const TaskCard = ({task}:IProps) => {
    return (
        <Card className="m-3 p-3 min-w-2/5 justify-center ">
  <CardHeader>
    <CardTitle className="flex items-center">
      <div className={cn("size-3 rounded-full mr-2", {
        "bg-green-500": task.priority === "Low",
        "bg-red-500": task.priority === "Medium",
        "bg-yellow-500": task.priority === "High",
      })}></div>
      <div>{task.title}</div>
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
</Card>
    );
};

export default TaskCard;