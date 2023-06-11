import { Link, Outlet } from "react-router-dom";
import useInstructor from "../hooks/useInstructor";
import useAdmin from "../hooks/useAdmin";
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
    <h2 className="text-5xl font-bold text-center ">Welcome to your dashboard</h2>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {
        isAdmin?<>
        {/* AdminContent */}
        <Link to='/dashboard'>Admin home</Link>
       <Link to='/dashboard/manageclass'  >Manage Class</Link>
        
        <Link to='/dashboard/users'>Manage Users</Link>
        <div className="divider"></div> 
        </>:isInstructor
        ?<>
        {/* instructor content */}
        <Link to='/dashboard'>Instructor home</Link>
        
        <Link to='/dashboard/addclass'>Add a Class</Link>
        <Link to='/dashboard/allclass'>All class</Link>
        </>:
        
        <>
        {/* student content */}
        <Link to='/dashboard'>Student home</Link>
        <Link to='/dashboard/myclass'>My Class</Link>
        <Link>My enrolled class</Link>
        <Link>Payment history</Link>
        </>
      }
      <div className="divider"></div> 
        <Link to='/'>Home</Link>
      <Link to='/classes'>All Class</Link>
      <Link>Instructor</Link>
      
    </ul>
   
  </div>
</div>
    );
};

export default Dashboard;