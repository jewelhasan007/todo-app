import App from "@/App";
import Tasks from "@/pages/Tasks";
import ToDo from "@/pages/ToDo";
import Users from "@/pages/Users";

import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <App></App>,
        Component: App,
        children: [
            {
            
        path: "users",
       element: <Users></Users>
            },
         {
        path: "tasks",
       element:<Tasks></Tasks>
            },
             {
        path: "todo",
       element:<ToDo></ToDo>
            }
        ],
    },

])
export default router