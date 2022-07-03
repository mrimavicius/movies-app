import './App.css';
import movies from './assets/movies.json'
import React, { useState, useEffect } from 'react'
import MovieCard from './components/MovieCard';
import Modal from './components/Modal';
import FavoritesModal from './components/FavoritesModal';

function App() {

  const [getMovie, setMovie] = useState({})
  const [getShowModal, setShowModal] = useState(false)
  const [getShowFavoritesModal, setShowFavoritesModal] = useState(false)
  const [getFavorites, setFavorites] = useState([])

  const [getAnimCount, setAnimCount] = useState(0)
  const [getHorrorCount, setHorrorCount] = useState(0)
  const [getComedyCount, setComedyCount] = useState(0)
  const [getActionCount, setActionCount] = useState(0)


  function openModal(item){
    setMovie(item)
    setShowModal(!getShowModal)
    console.log(getMovie)
  }

  useEffect(() => {
    let animCount = getFavorites.filter(x => x.genre.includes('Animaciniai')).length
    let horrorCount = getFavorites.filter(x => x.genre.includes('Siaubo')).length
    let comedyCount = getFavorites.filter(x => x.genre.includes('Komedijos')).length
    let actionCount = getFavorites.filter(x => x.genre.includes('Veiksmo')).length
    setAnimCount(animCount)
    setHorrorCount(horrorCount)
    setComedyCount(comedyCount)
    setActionCount(actionCount)
  }, [getFavorites])

  function addToFavorites(favMovie) {
    console.log(favMovie)

    setFavorites([...getFavorites, favMovie])
    console.log(getFavorites)
  }

  return (
    <div className="App d-flex flex-wrap">
      <div className="button">
        <button onClick={() => setShowFavoritesModal(!getShowFavoritesModal)}>Show favorites</button>
      </div>
      {getShowFavoritesModal &&
        <FavoritesModal
        getShowFavoritesModal={getShowFavoritesModal}
        setShowFavoritesModal={setShowFavoritesModal}
        getFavorites={getFavorites}
        setFavorites={setFavorites}
        getAnimCount={getAnimCount}
        getHorrorCount={getHorrorCount}
        getComedyCount={getComedyCount}
        getActionCount={getActionCount}
        />
      }
      {getShowModal &&
        <Modal 
        getShowModal={getShowModal}
        setShowModal={setShowModal}
        getMovie={getMovie}
        addToFavorites={addToFavorites}
        />
      }
      <div className="movies d-flex flex-wrap">
        {movies.slice(0, 100).map((x, i) => 
        <MovieCard
        openModal={openModal}
        getShowModal={getShowModal}
        key={i}
        index={i}
        item={x}
        />)}
      </div>

    </div>
  );
}

export default App;
