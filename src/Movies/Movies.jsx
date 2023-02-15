import React from 'react'
import style from "./Movies.module.css";
import { useContext } from 'react';
import { movieContext } from '../MovieContext/MovieContext';
import SearchBar from './../SearchBar/SearchBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Movies() {

  const baseUrlImg = "https://image.tmdb.org/t/p/w500";
  let {movies} = useContext(movieContext)
  let [movieSearch, setMovieSearch] = useState([])
  let navigate = useNavigate();

  const searchMovie = (e) => {
    let mySearchMovie = [...movies];
    let newMovies = mySearchMovie
    .filter((movie) => movie.title.toLowerCase().includes(e.target.value.toLowerCase()));
    setMovieSearch(newMovies);
    console.log(movieSearch);
  }

  const goToDetails = (id, media_type) => {
    navigate({
      pathname : "/details",
      search : `?id=${id}&category=${media_type}`
    })
  }

  return (
    <>
    <div className='pt-5'></div>
    <h1 className='text-white text-center text-capitalize mt-5 mb-3'>all trending <span className='text-warning fw-bold'>movies</span></h1>
      <SearchBar searchMovie={searchMovie} />
      <div className="row g-3 mb-5 mt-3">
        {(movieSearch.length === 0 && movies.length > 0) ? movies.map((e, index) =>
          <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6">
            <div className={`${style.smallimg} position-relative`}>
              <img className={`${style.img}`} alt='img' src= {baseUrlImg+e.poster_path}/>
              <div className={`${style.over}`}>
                <div onClick={() => goToDetails(e.id, e.media_type)} className={`btn btn-danger rounded-pill ${style.btn}`}>Read More...</div>
                <h6 className='text-capitalize rounded p-1 mt-1 position-absolute start-0 bottom-0 m-3 text-warning'>{e.name ? e.name : e.title}</h6>
              </div>
            </div>
          </div>
        )
        
        : movieSearch.map((e, index) =>
        <div key={index} className="col-lg-2 col-md-3 col-sm-4 col-6">
          <div className={`${style.smallimg} position-relative`}>
            <img className={`${style.img}`} alt='img' src= {baseUrlImg+e.poster_path}/>
            <div className={`${style.over}`}>
              <div className={`btn btn-danger rounded-pill ${style.btn}`}>Read More...</div>
              <h6 className='text-capitalize rounded p-1 mt-1 position-absolute start-0 bottom-0 m-3 text-warning'>{e.name ? e.name : e.title}</h6>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  )
}
