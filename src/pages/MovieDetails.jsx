import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const MovieDetails = () => {
  const movies = useLoaderData();
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { user } = useContext(AuthContext);
  const email = user.email;
  const navigate = useNavigate();

  useEffect(() => {
    const oneMovie = movies && movies?.find((m) => m._id == id);
    setMovie(oneMovie);
  }, [id, movies]);

  const { _id, name, photo, genre, duration, releaseYear, summary } = movie;
  const userMovie = { name, photo, genre, duration, releaseYear, summary, email };
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
        fetch(`http://localhost:5000/movies/${_id}`, {
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
    // user movie db
    fetch("http://localhost:5000/userMovies", {
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
    <div className="w-11/12 mx-auto">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={photo} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h3>{genre}</h3>
          <p>{duration}</p>
          <div>{releaseYear}</div>
          <div className="card-actions justify-end">{summary}</div>
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete Movie
          </button>

          <button onClick={handleAddFavoriteMovie} className="btn btn-warning">Add to Favorite</button>


          <Link to={`/updatemovie/${_id}`} className="btn btn-neutral">
            Update Movie
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
