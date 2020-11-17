import React, { useState, useEffect } from 'react';
import MovieSearch from './search.js';
import { API_URL, API_KEY, IMAGE_URL, MovieSearchAPI } from './api';


function Home() {
  const [ movies, setMovies ] = useState([]);
  const [ searchedMovies, setSearchedMovies ] = useState([]);
  const [ query, setQuery ] = useState('');
  const [ searched, setSearched ] = useState(false);
  const [ movieId, setMovieId ] = useState('');
  const [ movieTitle, setMovieTitle ] = useState('');
  const [ movieDir, setMovieDir ] = useState('');
  const [ movieDate, setMovieDate ] = useState('');
  const [ movieDes, setMovieDes ] = useState('');
  const [ movieLikes, setMovieLikes ] = useState(0);
  const [ movieDisLikes, setMovieDisLikes ] = useState(0);
  const popMovieAPI = `${API_URL}trending/movie/day?api_key=${API_KEY}&language=en-US`;


  useEffect(() => {
    getMovies(popMovieAPI)

  })

  const getMovies = (apiURL) => {
    fetch(apiURL)
    .then((response) =>
      response.json())
    .then((response) => {
      setMovies(response.results)
    })
  }

  const movieModal = ( movie, image ) => {
    return (
      <div className='modal'>
        <div className='modal-dialog modal-dialog-centered'>
        </div>
      </div>
    )
  }

  const popMovieList = () => {
    return movies.map((movie, index) => {
      const movieImage = `${IMAGE_URL}w500${movie.poster_path}`;
      const movieId = movie.id
      const movieTitle = movie.title
      const movieDes = movie.overview
      const movieDate = movie.release_date
      return (
        <div className='' key={index}>
          <img onClick={ event => {
            setMovieId(movieId);
            setMovieDes(movieDes);
            setMovieDate(movieDate);
            setMovieTitle(movieTitle);
            movieModal(event.target);
            console.log(movieId);
            console.log(movieDes);
            console.log(movieDate);
            console.log(movieTitle);
          } } className='' src={movieImage} />
        </div>
      )
    })
  }
  const searchedMovieList = () => {
    return searchedMovies.map((movie, index) => {
      const movieImage = `${IMAGE_URL}w500${movie.poster_path}`;
      const movieId = movie.id
      const movieTitle = movie.title
      const movieDes = movie.overview
      const movieDate = movie.release_date
      return (
        <div className='' key={index}>
        {(movie.poster_path) ?
          <img onClick={ (event) => {
            setMovieId(movieId);
            setMovieDes(movieDes);
            setMovieDate(movieDate);
            setMovieTitle(movieTitle);
            movieModal(event.target);
            console.log(movieId);
            console.log(movieDes);
            console.log(movieDate);
            console.log(movieTitle);
          } } className='' src={movieImage} />
          : ('') }
        </div>
      )
    })
  }
  const movieQuery = (event) => {
    event.preventDefault();
    event.target.reset();
    fetch(`${MovieSearchAPI}${query}`)
    .then(response => response.json())
    .then((response) => {
      setSearchedMovies(response.results);
      setSearched(true);
    })
  }
  const onChange = (event) => {
    setQuery(event.target.value)
  }
  const check = () => {
    console.log(movies[0].id);
  }
  const trendMovies = () => {
    setSearched(false);
  }
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={trendMovies}>Trending Movies</button>
      <button onClick={check}>X</button>
      <MovieSearch movieQueryOnSubmit={movieQuery} onChange={onChange}   />
      { searched ?
        <div className="d-flex flex-wrap">
          { searchedMovieList() }
        </div>
        :
        <div className="d-flex flex-wrap">
        { popMovieList() }
        </div>
      }

    </div>

  );




}

export default Home;
