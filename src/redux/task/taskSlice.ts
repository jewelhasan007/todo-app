import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";



interface InitialState{
    tasks : ITask[],
    filter : "all" | "high" | "medium" | "low"
}
const initialState : InitialState = {
tasks : [
    
],
filter : "all"
}

type DraftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate">;
const createTask = (taskData: DraftTask) : ITask =>{
    return {id: nanoid(), isCompleted: false, ...taskData}
}
const taskSlice = createSlice({
    name : "task",
    initialState,
    reducers: {
        addTask:(state, action: PayloadAction<ITask>) => {
           
            const taskData = createTask(action.payload)
            state.tasks.push(taskData);
        },
        toggleCompleteStae: (state, action: PayloadAction<string>) => {
            console.log(action);
            state.tasks.forEach((task)=> task.id === action.payload ? task.isCompleted = !task.isCompleted : task)
        },
        deleteTask : (state, action: PayloadAction<string>) =>{
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        updateFilter: (state, action: PayloadAction<"all" | "low" | "medium" | "high">) =>{
            state.filter = action.payload
        },
    }
})

export const selectTasks = (state : RootState) => {
    const filter = state.todo.filter;
    if(filter === "low"){
        return state.todo.tasks.filter(task => task.priority === "low")
    }else if(filter === "medium") {
         return state.todo.tasks.filter(task => task.priority === "medium")
    }else if(filter === "high") {
         return state.todo.tasks.filter(task => task.priority === "high")
    } else{
        return state.todo.tasks
    }

}
export const selectFilter = (state : RootState) => {
    return state.todo.filter;
}
export const {addTask, toggleCompleteStae, deleteTask, updateFilter} = taskSlice.actions;

export default taskSlice.reducer;