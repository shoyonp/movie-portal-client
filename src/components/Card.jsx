import { Link } from "react-router-dom";

const Card = ({ movie }) => {
//   console.log(movie);
  const {name,photo,genre,duration,releaseYear} = movie;


  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          alt="Album"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3>{genre}</h3>
        <p>{duration}</p>
        <div>{releaseYear}</div>
        <div className="card-actions justify-end">
          <Link to={`/detail/${movie._id}`} className="btn btn-primary">See Ditails</Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
