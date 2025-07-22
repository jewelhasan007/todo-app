import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../store";


interface InitialState{
    tasks : ITask[],
    filter : "all" | "high" | "medium" | "low"
}
const initialState : InitialState = {
tasks : [
    {
    id : "92385712954",
    title : "Initialize frontend",
    description : "create home page and routing",
    dueDate : "2025-07-15",
    isCompleted : false,
    priority : "High",
},
    {
    id : "92385712955",
    title : "Initialize backend",
    description : "create backend",
    dueDate : "2025-07-16",
    isCompleted : false,
    priority : "Medium",
}
],
filter : "all"
}
const taskSlice = createSlice({
    name : "task",
    initialState,
    reducers: {}
})

export const selectTasks = (state : RootState) => {
    return state.todo.tasks;
}
export const selectFilter = (state : RootState) => {
    return state.todo.filter;
}
export default taskSlice.reducer;