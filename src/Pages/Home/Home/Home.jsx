import About from "../../About/About";
import Banner from "../Banner/Banner";
import Instructor from "../Instructor/Instructor";
import PopularClass from "../PopularClass/PopularClass";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <Instructor></Instructor>
            <About></About>
           
        </div>
    );
};

export default Home;