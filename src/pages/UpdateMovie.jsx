import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "react-simple-star-rating";
import Swal from "sweetalert2";
import UseTitle from "../components/UseTitle";

const UpdateMovie = () => {
  //   const [rating, setRating] = useState(0);
  const [nameError, setNameError] = useState("");
  const [summaryError, setSummaryError] = useState("");
  const [durationError, setDurationError] = useState("");
  const [urlError, setUrlError] = useState("");
  UseTitle("Update Movie");
  const movie = useLoaderData();
  console.log(movie);
  const { _id, name, photo, genre, duration, releaseYear, summary } = movie;

  const handleUpdateMovie = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const photo = form.photo.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    const summary = form.summary.value;

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

    const updatedMovie = { name, photo, genre, duration, releaseYear, summary };

    console.log(updatedMovie);

    fetch(`https://movie-portal-server-khaki.vercel.app/movies/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Movie Updated Successfully",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="pt-10">
      <div className="bg-[#F4F3F0] p-10 md:p-24">
        <h2 className="text-2xl font-bold">Update Movie</h2>
        <form onSubmit={handleUpdateMovie}>
          {/* from row 1*/}
          <div className="flex flex-col md:flex-row gap-4">
            {/* movie poster */}
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Movie Poster</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue={photo}
                  id=""
                  placeholder="Photo url"
                  className="input input-bordered w-full"
                />
                {urlError && <p className="text-red-500">{urlError}</p>}
              </label>
            </div>
            {/* movie name */}
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Movie Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  id=""
                  placeholder="Movie Title"
                  className="input input-bordered w-full"
                />
                {nameError && <p className="text-red-500">{nameError}</p>}
              </label>
            </div>
          </div>
          {/* from row 2*/}
          <div className="flex flex-col md:flex-row gap-4">
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
            <div className="form-control w-full md:w-1/2">
              <label className="label">
                <span className="label-text">Duration</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="duration"
                  defaultValue={duration}
                  id=""
                  placeholder="Duration"
                  className="input input-bordered w-full"
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
                <span className="label-text">Release Year</span>
              </label>
              <label className="input-group">
                <select
                  name="releaseYear"
                  id=""
                  className="input input-bordered w-full"
                  defaultValue={releaseYear}
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

            <div className="form-control w-full md:w-1/2">
              {/* summary */}
              <label className="label">
                <span className="label-text">Summary</span>
              </label>
              <label className="input-group">
                <textarea
                defaultValue={summary}
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
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
            value="Update Movie"
            className="btn btn-block btn-neutral transition-transform transform hover:scale-105"
            name=""
            id=""
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
