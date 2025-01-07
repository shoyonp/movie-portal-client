import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import UseTitle from "../components/UseTitle";

const HomeLayout = () => {
  UseTitle("Home");

  return (
    <div>
      <nav className="">
        <Navbar></Navbar>
      </nav>
      <div className=""><Outlet></Outlet></div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
