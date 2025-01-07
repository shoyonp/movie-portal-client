import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import UseTitle from "../components/UseTitle";

const AllMovies = () => {
  const movies = useLoaderData();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [data, setData] = useState(movies);
  UseTitle("All Movies");
console.log(sort);
  useEffect(() => {
    fetch(
      `https://movie-portal-server-khaki.vercel.app/movies?search=${search}&sort=${sort}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [search,sort]);

  return (
    <div className="pt-24">
      <div className="flex flex-col md:flex-row items-center justify-around gap-4 w-3/5 mx-auto">
      <div className="md:w-3/4 ">
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          name=""
          id=""
          placeholder="Search here"
          className=" p-3 rounded-lg w-full"
        />
      </div>
      <div className="dropdown dropdown-bottom ">
          <select
            name=""
            id=""
            onChange={(e) => setSort(e.target.value)}
            className="border p-3 rounded-lg"
          >
            <option value="">Sort By release year</option>
            <option value="dsc">Descending Order</option>
            <option value="asc">Ascending Order</option>
          </select>
        </div>
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
