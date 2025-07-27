import {
  Card,

  CardHeader,

} from "@/components/ui/card"
import type {  IUser } from "@/types";
import { useDispatch } from "react-redux";
import { removeUser } from "@/redux/user/userSlice";
interface IProps{
    user: IUser
}
import { AiTwotoneDelete } from "react-icons/ai";

const UserCard = ({user}:IProps) => {
    console.log(user)
  const dispatch = useDispatch()
    return (
    <Card className="m-3 p-3 justify-center ">
  <CardHeader className="flex justify-between">
  {
    user.title
  }
<AiTwotoneDelete onClick={() => dispatch((removeUser(user.id)))} className="mr-3 text-red-500"  />
  </CardHeader>
  <div className="flex">
  </div>
</Card>
    );
};

export default UserCard;