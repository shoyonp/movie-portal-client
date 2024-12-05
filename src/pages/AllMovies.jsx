import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";


const AllMovies = () => {
    const movies = useLoaderData()
    // console.log(movies);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto my-10">
        {movies?.map((movie) => (
          <Card key={movie._id} movie={movie}></Card>
        ))}
      </div>
        </div>
    );
};

export default AllMovies;