import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Section2 from "../components/section2";
import Card from "../components/Card";
import Subscription from "../components/Subscription";
import BlogSection from "../components/BlogSection";

const Home = () => {
  const movies = useLoaderData();
  return (
    <div className="pt-9">
      <section className="">
        <Banner></Banner>
      </section>
     <section className="mb-4"> <Section2></Section2></section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto mb-2">
        {movies?.slice(0, 6)?.map((movie) => (
          <Card key={movie._id} movie={movie}></Card>
        ))}
      </div>
      <BlogSection></BlogSection>
      <Subscription></Subscription>
    </div>
  );
};

export default Home;
