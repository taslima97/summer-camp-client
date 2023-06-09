import { Link, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    <Outlet></Outlet>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <Link to='/dashboard/myclass'>My Class</Link>
      <Link>My enrolled class</Link>
      <Link>Payment history</Link>
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