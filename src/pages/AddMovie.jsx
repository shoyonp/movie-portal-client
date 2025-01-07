import { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import UseTitle from "../components/UseTitle";

const AddMovie = () => {
  //   const [rating, setRating] = useState(0);
  const [nameError, setNameError] = useState("");
  const [summaryError, setSummaryError] = useState("");
  const [durationError, setDurationError] = useState("");
  const [urlError, setUrlError] = useState("");
  UseTitle("Add Movies");

  const handleAddMovie = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    const summary = form.summary.value;

    // console.log(summary);

    if (!photo.trim()) {
      setUrlError("URL cannot be empty");
      return;
    } else if (!/^(https?:\/\/[^\s]+)$/.test(photo)) {
      setUrlError("Input must be a valid link (https://example.com)");
      return;
    }

    if (!name.trim()) {
      setNameError("Name cannot be empty");
      return;
    } else if (name.length < 2) {
      setNameError("Name must have at least 2 characters");
      return;
    }

    if (!summary.trim()) {
      setSummaryError("Summary cannot be empty");
      return;
    } else if (summary.length < 10) {
      setSummaryError("Summary must have at least 10 characters");
      return;
    }

    if (!duration) {
      setDurationError("Duration cannot be empty");
      return;
    } else if (Number(duration) <= 60) {
      setDurationError("Duration must be greater than 60 minutes");
      return;
    }

    const newMovie = { name, photo, genre, duration, releaseYear, summary };
    fetch("https://movie-portal-server-khaki.vercel.app/movies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Movie Added Successfully",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  //   const handleRating = (rating) => {
  //     setRating(rating);
  //     console.log(rating);
  //   };

  return (
    <div className="pt-10">
      <div className="bg-[#1C1C1E] p-10 md:p-24 mx-auto">
        <h2 className="text-2xl font-semibold text-white">Add movies</h2>
        <form onSubmit={handleAddMovie}>
          {/* from row 1*/}
          <div className="flex flex-col md:flex-row gap-4">
            {/* movie poster */}
            <div className="form-control w-full md:w-1/2">
              <label className="label ">
                <span className="label-text text-white">Movie Poster</span>
              </label>
              <label className="input-group">
                <input
                  type="url"
                  name="photo"
                  id=""
                  placeholder="Photo url"
                  className="input input-bordered w-full  text-white bg-[#252525]"
                  required
                />
                {urlError && <p className="text-red-500">{urlError}</p>}
              </label>
            </div>
            {/* movie name */}
            <div className="form-control w-full md:w-1/2 ">
              <label className="label">
                <span className="label-text text-white">Movie Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Movie Title"
                  className="input input-bordered w-full text-white bg-[#252525]"
                  required
                />
                {nameError && <p className="text-red-500">{nameError}</p>}
              </label>
            </div>
          </div>
          {/* from row 2*/}
          <div className="flex flex-col md:flex-row gap-4">
            {/* genre */}
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Genre</span>
              </label>
              <label className="input-group">
                <select
                  name="genre"
                  id=""
                  className="input input-bordered w-full text-white bg-[#252525]"
                >
                  <option value="" disabled>
                    Select a Genre
                  </option>
                  <option className="text-white" value="Comedy">
                    Comedy
                  </option>
                  <option className="text-white" value="Romantic">
                    Romantic
                  </option>
                  <option className="text-white" value="Horror">
                    Horror
                  </option>
                  <option className="text-white" value="Thrilar">
                    Thrilar
                  </option>
                  <option className="text-white" value="Action">
                    Action
                  </option>
                </select>
              </label>
            </div>
            {/* duration */}
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Duration</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="duration"
                  id=""
                  placeholder="Duration"
                  className="input input-bordered w-full text-white bg-[#252525]"
                  required
                />
                {durationError && (
                  <p className="text-red-500">{durationError}</p>
                )}
              </label>
            </div>
          </div>
          {/* from row 3*/}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* relese year */}
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text text-white">Release Year</span>
              </label>
              <label className="input-group">
                <select
                  name="releaseYear"
                  id=""
                  className="input input-bordered w-full text-white bg-[#252525]"
                >
                  <option className="" value="" disabled>
                    Release Year
                  </option>
                  <option className="text-white" value="2024">
                    2024
                  </option>
                  <option className="text-white" value="2023">
                    2023
                  </option>
                  <option className="text-white" value="2022">
                    2022
                  </option>
                  <option className="text-white" value="2021">
                    2021
                  </option>
                  <option className="text-white" value="2020">
                    2020
                  </option>
                </select>
              </label>
            </div>
            {/* summary */}
            <div className="form-control w-full md:w-1/2 ">
              <label className="label">
                <span className="label-text text-white">Summary</span>
              </label>
              <label className="input-group">
                <textarea
                  className="bg-[#252525] text-white textarea textarea-bordered textarea-lg w-full max-w-xs"
                  name="summary"
                  id=""
                ></textarea>
                {summaryError && <p className="text-red-500">{summaryError}</p>}
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
            className="btn btn-block border-none text-[#0E0E0E] bg-[#FFD700] hover:bg-[#E6C200] transition-transform transform hover:scale-105"
            name=""
            id=""
          />
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
