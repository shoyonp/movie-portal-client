import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import UseTitle from "../components/UseTitle";

const MovieDetails = () => {
  const movies = useLoaderData();
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  UseTitle("Movie details");
  const { user } = useContext(AuthContext);
  const email = user.email;
  const navigate = useNavigate();

  useEffect(() => {
    const oneMovie = movies && movies?.find((m) => m._id == id);
    setMovie(oneMovie);
  }, [id, movies]);

  const { _id, name, photo, genre, duration, releaseYear, summary } = movie;
  const userMovie = {
    name,
    photo,
    genre,
    duration,
    releaseYear,
    summary,
    email,
  };
  //   console.log(movie);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://movie-portal-server-khaki.vercel.app/movies/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Movie has been deleted.",
                icon: "success",
              });
              navigate("/allmovies");
            }
          });
      }
    });
  };

  const handleAddFavoriteMovie = () => {
    // user favorite movie db
    fetch("https://movie-portal-server-khaki.vercel.app/favMovies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Movie Added to Favorite",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <>
      <div className="pt-28 pb-10">
        <div className="card card-side bg-[#1E1E2C] shadow-xl flex flex-col w-11/12  md:flex-row md:w-1/2 mx-auto">
          <figure>
            <img src={photo} alt="Movie" className="h-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-extrabold text-white text-2xl">
              {name}
            </h2>
            <h3 className="font-medium  text-[#B3B3B3]">{genre}</h3>
            <span className="font-medium text-[#B3B3B3]">{duration} min</span>
            <div className="font-medium text-[#B3B3B3]">
              Released on {releaseYear}
            </div>
            <p className="card-actions font-normal text-[#E0E0E0] items-center">
              {summary}
            </p>
            <hr />
            <div className="card-actions ">
              <button
                onClick={() => handleDelete(_id)}
                className="btn w-full bg-[#E63946] border-none text-white hover:bg-[#C72A38] transition-transform transform hover:scale-105"
              >
                Delete Movie
              </button>
              <button
                onClick={handleAddFavoriteMovie}
                className="btn w-full bg-[#FFD700] border-none text-black hover:bg-[#F8D200] transition-transform transform hover:scale-105"
              >
                Add to Favorite
              </button>

              <Link
                to={`/updatemovie/${_id}`}
                className="btn w-full bg-[#6C757D] border-none text-white hover:bg-[#5A6268] transition-transform transform hover:scale-105"
              >
                Update Movie
              </Link>
              <Link
                to="/allmovies"
                className="btn w-full transition-transform transform hover:scale-105"
              >
                See all movies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
