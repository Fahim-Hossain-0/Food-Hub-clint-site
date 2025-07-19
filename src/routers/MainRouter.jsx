import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import AddFood from "../pages/Food/AddFood";
import AvailableFoods from "../pages/Food/avaliableFood";
import FoodDetails from "../components/FoodDetails";
import ManageFood from "../pages/Food/ManageFood";
import RequestedMyFood from "../pages/Food/RequestedMyFood";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {   
                index:true,
                path:"/",
                Component:Home

            },
            {
                path:'/addFood',
                Component:AddFood
            },
            {
                path:'/availableFoods',
                Component:AvailableFoods
            },
            {
                path:'/foodDetails/:id',
                Component:FoodDetails,  
            },
            {
                path:'/manageMyFoods',
                Component:ManageFood
            },
            {
                path:'/requestedMyFood',
                Component:RequestedMyFood
            }
        ]
    },
     {
        path: "/auth",
        Component: AuthLayout,
        children: [
            {
                path: "/auth/register",
                Component: Register

            },
            {
                path: "/auth/login",
                Component: Login
            }
        ]
    },

])

 export default router