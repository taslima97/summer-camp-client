import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUP/SignUp";
import Selects from "../Pages/Instructor/Instructor";
import PrivateRoute from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../Layout/Dashboard";
import MyClass from "../Pages/Dashboard/MyClass/MyClass";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddClass from "../Pages/Dashboard/AddClass/AddClass";
import AdminRoutes from "./AdminRoutes";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/classes',
        element: <AllClasses></AllClasses>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/select',
        element:<PrivateRoute><Selects></Selects></PrivateRoute>
      }
    ],
   },
   {
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
      {
        path:'myclass',
        element:<MyClass></MyClass>
      },{
        path:'users',
        element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path:'addclass',
        element:<AddClass></AddClass>
      }
    ]
   }
]);