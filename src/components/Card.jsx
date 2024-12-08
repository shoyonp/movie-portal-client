import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  //   console.log(movie);
  const { name, photo, genre, duration, releaseYear } = movie;

  return (
    <>
      <div>
        <div
          className="bg-cover bg-center h-[450px] rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition-all duration-300"
          style={{ backgroundImage: `url(${photo})` }}
        >
          <div className="bg-gradient-to-t from-black/70 to-transparent h-full flex flex-col justify-end p-4">
            <h2 className="text-white text-2xl font-bold">{name}</h2>
            <p className="text-gray-200 text-sm">{genre}</p>
            <p className="text-gray-300 text-xs mt-1">
              Duration: {duration} mins
            </p>
            <p className="text-gray-400 text-xs mt-1 mb-1">Released on {releaseYear}</p>
            <Link to={`/detail/${movie._id}`} className="btn bg-neutral text-white border-none ">
              See Ditails
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
