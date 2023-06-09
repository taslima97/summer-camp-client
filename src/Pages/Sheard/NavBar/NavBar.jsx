import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";



const NavBar = () => {
    const { user, logOut } = useContext(AuthContext)


    const handelLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }
    const navItem = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>

        {user ? <>
            <li><Link to='/dashboard/myclass'>Dashboard</Link></li>
            <li><button onClick={handelLogOut}>logOut</button></li>

        </> : <li><Link to='/login'>LogIn</Link></li>}

    </>
    return (

        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-2xl font-bold">Art &<span className="text-amber-500">Craft</span></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user ? <div className="w-10 rounded-full">
                        <img src={user?.photoURL} />
                    </div> : ''}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
