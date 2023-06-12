import { NavLink, Outlet } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";
import { FaHome } from "react-icons/fa";
import { SiGoogleclassroom, SiInstructure} from "react-icons/si";

// import useStudent from "../hooks/useStudent";


const Dashboard = () => {
  // todo
  // const isAdmin = true;
  const [isInstructor] = useInstructor();
  const [isAdmin] = useAdmin();


  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        {/* <h2 className="text-5xl font-bold text-center ">Welcome to your dashboard</h2> */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>

      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {
            isAdmin ? <>
              {/* AdminContent */}
             
              <NavLink to='/dashboard/adminhome'>Admin home</NavLink>
              <NavLink to='/dashboard/manageclass'  >Manage Class</NavLink>

              <NavLink to='/dashboard/users'>Manage Users</NavLink>
              <div className="divider"></div>
            </> : isInstructor
              ? <>
                {/* instructor content */}
                <NavLink to='/dashboard/instructorhome'>Instructor home</NavLink>

                <NavLink to='/dashboard/addclass'>Add a Class</NavLink>
                <NavLink to='/dashboard/allclass'>All class</NavLink>
              </> :

              <>
                {/* student content */}
                <NavLink to='/dashboard/userhome'>Student home</NavLink>
                <NavLink to='/dashboard/myclass'>My Class</NavLink>
                <NavLink to='/dashboard/enrollpage'>My enrolled class</NavLink>
               
              </>
          }
          <div className="divider"></div>
          <li><NavLink to='/'><FaHome></FaHome>Home</NavLink></li>
          <li><NavLink to='/classes'> <SiGoogleclassroom></SiGoogleclassroom> All Class</NavLink></li>
          <li> <NavLink to='/select'><SiInstructure></SiInstructure>Instructor</NavLink></li>
         

        </ul>

      </div>
     
    </div>
    
  );
};

export default Dashboard;