import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Appointment from "../../Pages/Appointmentpage/Appointment/Appointment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Signup from "../../Pages/Signup/Signup";

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
                path:"/appointment",
                element:<Appointment></Appointment>
            },
            {
                path:"/signup",
                element:<Signup></Signup>
            },
            {
                path:"/login",
                element:<Login></Login>
            }
        ]
    }
])

export default router;