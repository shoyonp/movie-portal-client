import Swal from "sweetalert2";

const FavMovieCards = ({ movie, setFavMovies, favMovies }) => {
  const { _id, name, photo, genre, duration, releaseYear } = movie;

  const handleDeleteFav = (_id) => {
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
        fetch(`http://localhost:5000/favMovies/${_id}`, {
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
              const remaining = favMovies?.filter(
                (favmovie) => favmovie._id != _id
              );
              setFavMovies(remaining);
            }
          });
      }
    });
  };

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
            <p className="text-gray-400 text-xs mt-1 mb-1">
              Released on {releaseYear}
            </p>
            <button onClick={() => handleDeleteFav(_id)} className="btn btn-neutral">
              Delete Favorite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavMovieCards;
