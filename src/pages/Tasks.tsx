import TaskCard from '@/components/module/TaskCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAppSelector } from '@/redux/hook';
import AddTaskModal from '@/redux/task/AddTaskModal';
import { selectFilter, selectTasks, updateFilter } from '@/redux/task/taskSlice';
import { useDispatch } from 'react-redux';

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);
    const filter = useAppSelector(selectFilter);
    const dispatch = useDispatch()

    console.log(tasks)
    console.log(filter)
    return (
        <div>
            
           <div className=' flex justify-between items-center gap-6 '>
            <h1 className='m-5 text-center font-bold underline mx-auto'>The tasks lists</h1>
             <Tabs defaultValue="all" className="w-[400px] text-center mx-7">
  <TabsList  className='grid w-full grid-cols-4 m-4'>
    <TabsTrigger onClick={() => dispatch(updateFilter("all"))} value="all">All</TabsTrigger>
    <TabsTrigger onClick={() => dispatch(updateFilter("low"))} value="low">Low</TabsTrigger>
    <TabsTrigger onClick={() => dispatch(updateFilter("medium"))} value="medium">Medium</TabsTrigger>
    <TabsTrigger onClick={() => dispatch(updateFilter("high"))} value="high">High</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
           </div>
            <div className='text-center'><AddTaskModal></AddTaskModal></div>
            <div className='m-5 flex flex-col justify-center  items-center'>
                {
                tasks.map((task) => <TaskCard task={task} key={task.id} ></TaskCard>)
            }
            </div>
          
        </div>
    );
};

export default Tasks;