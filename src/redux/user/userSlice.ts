import type { ITask, IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface InitialState{
    users : IUser[],
  
}
const initialState : InitialState = {
users : [],
}

type DraftUser = { name: string };
const createUser = (userData: DraftUser) : IUser =>{
    return {id: nanoid(),  ...userData}
}
const userSlice = createSlice({
    name : "user",
    initialState : initialState,
    reducers: {
        addUser:(state, action: PayloadAction<DraftUser>) => {
            const userData = createUser(action.payload)
            state.users.push(userData);
        },
        removeUser : (state, action: PayloadAction<string>) =>{
            state.users = state.users.filter((user) => user.id !== action.payload)
        },
       
    }
})

export const selectUsers = (state : RootState) => {
    return state.allUser.users;
}
export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;