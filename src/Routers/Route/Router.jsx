import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../dashboardLayout/DashboardLayout";
import Main from "../../layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";

import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";
import Private from "./Private";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
          
            {
                path:"/signup",
                element:<Signup></Signup>
            },
          
            {
            path:"/appointment",
            element:<Appointment></Appointment>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    },
    {
        path:"/dashboard",
        element:<Private><DashboardLayout></DashboardLayout></Private>,
        children:[
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            }
        ]
     },
])

export default router;