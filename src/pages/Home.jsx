import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {

    return (
        <div>
            <div className=""><Navbar></Navbar></div>
            <div className="my-10"><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;