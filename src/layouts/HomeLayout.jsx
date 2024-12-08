import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";

const HomeLayout = () => {
  const movies = useLoaderData();
  return (
    <div>
      <nav className="mb-10 ">
        <Navbar></Navbar>
      </nav>
      <section className="mb-10">
        <Banner></Banner>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto my-10">
        {movies?.map((movie) => (
          <Card key={movie._id} movie={movie}></Card>
        ))}
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
