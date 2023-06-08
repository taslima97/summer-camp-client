import About from "../../About/About";
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClass></PopularClass>
            <About></About>
           <h2 className="text-3xl text-center">This is home</h2> 
        </div>
    );
};

export default Home;