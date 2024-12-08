import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import Section2 from "../components/section2";
import Subscription from "../components/Subscription";
import UseTitle from "../components/UseTitle";


const HomeLayout = () => {
  UseTitle("Home")
  const movies = useLoaderData();
  return (
    <div>
      <nav className="">
        <Navbar></Navbar>
      </nav>
      <section className="">
        <Banner></Banner>
      </section>
      <Section2></Section2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto mb-10">
        {movies?.map((movie) => (
          <Card key={movie._id} movie={movie}></Card>
        ))}
      </div>
      <Subscription></Subscription>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
