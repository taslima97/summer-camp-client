import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Sheard/NavBar/NavBar";
import Footer from "../Pages/Sheard/Footer/Footer";


const MainLayout = () => {
    return (
        <div>
            <NavBar></NavBar>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;