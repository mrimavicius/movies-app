import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const MovieCard = ({ item, openModal, getShowModal, inModal, inFavoriteModal }) => {

    function disableCardClick() {
        if(inFavoriteModal) return
        if(inModal) return
        openModal(item)
    }

  return (
    <div onClick={disableCardClick} className="movieCard">
      <img
        src={item.image}
        alt={item.titleLtu}
      />
      <div className="card-info">
        <p className="title">{item.titleLtu}</p>
        <p>Genre: {item.genre.join(', ')}</p>
        <p>
          Imdb: {item.imdbRating} / 10
          <Rating
            size={25}
            readonly={true}
            ratingValue={item.imdbRating * 10}
          />
        </p>
        <p>Duration: {item.duration}</p>
      </div>
    </div>
  );
};

export default MovieCard;
