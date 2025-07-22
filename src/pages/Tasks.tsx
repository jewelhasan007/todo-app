import TaskCard from '@/components/module/TaskCard';
import { useAppSelector } from '@/redux/hook';
import { selectFilter, selectTasks } from '@/redux/task/taskSlice';

const Tasks = () => {
    const tasks = useAppSelector(selectTasks);
    const filter = useAppSelector(selectFilter);
    console.log(tasks)
    console.log(filter)
    return (
        <div>
            <h1 className='m-5 text-center font-bold underline'>The tasks lists</h1>
            <div className='m-5 flex flex-col justify-center  items-center'>
                {
                tasks.map((task) => <TaskCard task={task} ></TaskCard>)
            }
            </div>
          
        </div>
    );
};

export default Tasks;