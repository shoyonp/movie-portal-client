import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";

const AllMovies = () => {
    const movies = useLoaderData();
  const [search, setSearch] = useState("");
  const [data, setData] = useState(movies);

  useEffect(() => {
    fetch(`http://localhost:5000/movies?search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [search]);

  return (
    <div>
      <div className="">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="Search here"
          className=" p-3 border border-red-300 input-bordered w-11/12 mx-auto"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto my-10">
        {data?.map((movie) => (
          <Card key={movie._id} movie={movie}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllMovies;
