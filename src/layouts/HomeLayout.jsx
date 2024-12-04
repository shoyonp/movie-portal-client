import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div>
      <nav className="mb-10"><Navbar></Navbar></nav>
      <section className="mb-10"><Banner></Banner></section>
      <footer><Footer></Footer></footer>
    </div>
  );
};

export default HomeLayout;
