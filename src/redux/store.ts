import {configureStore} from "@reduxjs/toolkit"
import taskReducer from "./task/taskSlice"


const store = configureStore({
    reducer : {
        todo: taskReducer
    },
  
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
