import React from 'react';

const FavMovieCards = ({movie}) => {
    const {name,photo,genre,duration,releaseYear} = movie;
    return (
        <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          alt="Album"
        />
      </figure>
      <div className="card-body text-black">
        <h2 className="card-title">{name}</h2>
        <h3>{genre}</h3>
        <p>{duration}</p>
        <div>{releaseYear}</div>
        <div className="card-actions justify-end">
         <button className='btn'>Delete Favorite</button>
        </div>
      </div>
    </div>
    );
};

export default FavMovieCards;