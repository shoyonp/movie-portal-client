import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import FavMovieCards from "../components/FavMovieCards";

const MyFavoriteMovies = () => {
  const { user } = useContext(AuthContext);
  const [favMovies, setFavmovies] = useState([]);
  const email = user.email;
  console.log(email);

  console.log(favMovies);

  useEffect(() => {
    fetch(`http://localhost:5000/favMovies/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFavmovies(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-white text-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-11/12 mx-auto">
          {favMovies?.map((movie) => (
            <FavMovieCards key={movie._id} movie={movie}></FavMovieCards>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default MyFavoriteMovies;
