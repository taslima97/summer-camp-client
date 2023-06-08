import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import AllClasses from "../Pages/AllClasses/AllClasses";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUP/SignUp";
import Selects from "../Pages/Selects/Selects";
import PrivateRoute from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";


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
    ]

  },
]);