import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const MovieDetails = () => {
  const movies = useLoaderData();
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const oneMovie = movies && movies?.find((m) => m._id == id);
    setMovie(oneMovie);
  }, [id, movies]);

  const { _id, name, photo, genre, duration, releaseYear, summary } = movie;

  //   console.log(movie);

  const handleDelete = (_id) => {
    console.log(_id);
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
          <button className="btn btn-warning">Add to Favorite</button>
          <button className="btn btn-neutral">Update Movie</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
