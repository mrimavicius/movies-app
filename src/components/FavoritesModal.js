import React, { useState } from 'react'
import MovieCard from './MovieCard'

const FavoritesModal = ({ getShowFavoritesModal, setShowFavoritesModal, getFavorites, setFavorites, getAnimCount, getHorrorCount, getComedyCount, getActionCount }) => {

    function removeFavorite(index){
        setFavorites(getFavorites.filter((x, i) => i !== index))
    }

  return (
    <div className='modal'>
        <div className="modal-content">
            <div className='close d-flex flex-end'>
                <span onClick={() => setShowFavoritesModal(!getShowFavoritesModal)}>&times;</span>
            </div>
            <div className="genres-info center">
                <p>Animaciniai: {getAnimCount}</p>
                <p>Siaubo: {getHorrorCount}</p>
                <p>Komedijos: {getComedyCount}</p>
                <p>Veiksmo: {getActionCount}</p>
            </div>
                {getFavorites.map((x, i) => (
                    <div className='center'>
                        <MovieCard item={x} inFavoriteModal={true}/> 
                        <button onClick={() => removeFavorite(i)}>Remove from Favorite</button>
                    </div>
                ))}
        </div>
    </div>
  )
}

export default FavoritesModal