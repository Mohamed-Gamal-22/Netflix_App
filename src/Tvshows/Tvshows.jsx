import React from 'react'
import style from "./Tvshows.module.css";
import { useContext } from 'react';
import SearchBar from './../SearchBar/SearchBar';
import { movieContext } from './../MovieContext/MovieContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Movies() {

  const baseUrlImg = "https://image.tmdb.org/t/p/w500";
  let {tv} = useContext(movieContext);
  let [tvShowesSearch, setTvShoweSearch] = useState([])
  let navigate = useNavigate();


  const searchMovie = (e) => {
    let mySearchMovie = [...tv];
    let newTvShowes = mySearchMovie
    .filter((TvShowe) => TvShowe.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setTvShoweSearch(newTvShowes);
  }

  const goToDetails = (id, media_type) => {
    navigate({
      pathname : "/details",
      search : `?id=${id}&category=${media_type}`
    })
  }

  return (
    <>
    <div className="pt-5"></div>
    <h1 className='text-white text-center text-capitalize pb-0 mt-5 mb-0'>all trending <span className='text-warning fw-bold'>tv shows</span></h1>
    <SearchBar searchMovie={searchMovie}/>
      <div className="row g-3 my-4">
        {tvShowesSearch.length === 0 && tv.length > 0 ? tv.map((e, index) =>
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
        
        : tvShowesSearch.map((e, index) =>
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
