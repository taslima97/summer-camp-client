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
import InstructorRoute from "./InstructorRoute";
import ManageClass from "../Pages/Dashboard/ManageClass/ManageClass";
import Payment from "../Pages/Dashboard/Payment/Payment";
import EnrollPage from "../Pages/Dashboard/EnrollPage/EnrollPage";
import InstructorClass from "../Pages/Dashboard/InstructorClass/InstructorClass";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import InsHome from "../Pages/Dashboard/InsHome/InsHome";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
// import StudentRoute from "./StudentRoute";



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
        path:'adminhome',
        element:<AdminHome></AdminHome>
      },
      {
        path:'instructorhome',
        element:<InsHome></InsHome>
      },
      {
        path:'userhome',
        element:<UserHome></UserHome>
      },
      {
        path:'myclass',
        element:<MyClass></MyClass>
      },
      {
        path:'users',
        element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
      },
      {
        path:'addclass',
        element:<InstructorRoute><AddClass></AddClass></InstructorRoute>
      },
      {
        path:'allclass',
        element:<InstructorRoute><InstructorClass></InstructorClass></InstructorRoute>
      },

      {
        path:'manageclass',
        element:<AdminRoutes><ManageClass></ManageClass></AdminRoutes>
      },
      {
        path:'payment',
        element:<Payment></Payment>,
       
      },
      {
        path:'enrollpage',
        element:<EnrollPage></EnrollPage>,
       
      },

    ]
   }
]);