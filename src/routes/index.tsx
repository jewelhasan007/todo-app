import App from "@/App";
import Tasks from "@/pages/Tasks";
import ToDo from "@/pages/ToDo";
import { User } from "lucide-react";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        // element: <App></App>,
        Component: App,
        children: [
            {
                index: true,
        // path: "users",
        //element: <User></User>
            },
            {
            
        path: "users",
       element: <User></User>
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