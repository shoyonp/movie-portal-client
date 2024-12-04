import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";

const AddMovie = () => {
  //   const [rating, setRating] = useState(0);
  const handleAddMovie = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    const summary = form.summary.value;

    const newMovie = { name, photo, genre, duration, releaseYear, summary };

    console.log(newMovie);

    fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                icon: "success",
                title: "Success!",
                text: "Movie Added Successfully",
                confirmButtonText: 'Cool'
              });
        }
      });
  };

  //   const handleRating = (rating) => {
  //     setRating(rating);
  //     console.log(rating);
  //   };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-2xl font-bold">Add movies</h2>
      <form onSubmit={handleAddMovie}>
        {/* from row 1*/}
        <div className="md:flex">
          {/* movie poster */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Movie Poster</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                id=""
                placeholder="Photo url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* movie name */}
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Movie Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                id=""
                placeholder="Movie Title"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* from row 2*/}
        <div className="md:flex">
          {/* genre */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Genre</span>
            </label>
            <label className="input-group">
              <select
                name="genre"
                id=""
                className="input input-bordered w-full"
              >
                <option value="" disabled>
                  Select a Genre
                </option>
                <option value="Comedy">Comedy</option>
                <option value="Romantic">Romantic</option>
                <option value="Horror">Horror</option>
                <option value="Thrilar">Thrilar</option>
                <option value="Action">Action</option>
              </select>
            </label>
          </div>
          {/* duration */}
          <div className="form-control w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Duration</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="duration"
                id=""
                placeholder="Duration"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* relese year */}
        <div className="md:flex mb-8">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Release Year</span>
            </label>
            <label className="input-group">
              <select
                name="releaseYear"
                id=""
                className="input input-bordered w-full"
              >
                <option value="" disabled>
                  Release Year
                </option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
            </label>
          </div>
          {/* from row 3*/}
          <div className="form-control w-1/2 ml-4">
            {/* summary */}
            <label className="label">
              <span className="label-text">Summary</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="summary"
                id=""
                placeholder="Summary"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* rating */}
        <div className="mb-8">
          <Rating
          // onClick={() => handleRating(rating)}
          // onPointerEnter={onPointerEnter}
          // onPointerLeave={onPointerLeave}
          // onPointerMove={onPointerMove}
          /* Available Props */
          />
        </div>
        <input
          type="submit"
          value="Add Movie"
          className="btn btn-block btn-neutral"
          name=""
          id=""
        />
      </form>
    </div>
  );
};

export default AddMovie;
