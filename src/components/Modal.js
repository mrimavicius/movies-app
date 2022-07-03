import React from 'react'
import MovieCard from './MovieCard'

const Modal = ({ getShowModal, setShowModal, getMovie, addToFavorites }) => {

  return (
    <div className='modal'>
        <div className="modal-content">
            <div className='close d-flex flex-end'>
                <span onClick={() => setShowModal(!getShowModal)}>&times;</span>
            </div>
                <MovieCard item={getMovie} inModal={true}/>
                <div className="center">
                    <button onClick={() => addToFavorites(getMovie)}>Add to favorites</button>
                </div>
        </div>
    </div>
  )
}

export default Modal