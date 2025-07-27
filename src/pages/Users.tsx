import UserCard from '@/components/module/UserCard';
import { useAppSelector } from '@/redux/hook';
import AddUser from '@/redux/user/AddUser';
import { selectUsers } from '@/redux/user/userSlice';


const Users = () => {
    const users = useAppSelector(selectUsers)
    console.log(users)

    return (
        <div className=' m-5'>
            <div>
            <h1 className='text-center flex justify-around items-center font-bold'>All Users</h1>
            <AddUser></AddUser>
            </div>
           
            
            <div className='grid grid-cols-4 gap-10 border-amber-950 w-full'>
              {
                users.map((user) =>   <UserCard user={user} key={user.id}></UserCard>)
              }
            </div>
        </div>
    );
};

export default Users;