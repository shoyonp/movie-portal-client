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
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Album" />
      </figure>
      <div className="card-body text-black">
        <h2 className="card-title">{name}</h2>
        <h3>{genre}</h3>
        <p>{duration}</p>
        <div>{releaseYear}</div>
        <div className="card-actions justify-end">
          <button onClick={() => handleDeleteFav(_id)} className="btn">
            Delete Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default FavMovieCards;
