import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.min.css";
import "owl.carousel/dist/assets/owl.theme.default.min.css";
import style from "./Carousle.module.css";
import { useContext } from 'react';
import { movieContext } from './../MovieContext/MovieContext';
import { useNavigate } from 'react-router-dom';


export default function Carousle() {

const {trendingAll} = useContext(movieContext)
const baseUrlImg = "https://image.tmdb.org/t/p/w500";
const options = {
    margin: 20,
    responsiveClass: true,
    dots: false,
    autoplay: true,
    loop : true,
    smartSpeed: 800,
    responsive: {
        0   : { items: 1 },
        767 : { items: 1 },
        800 : { items: 2 },
        990 : { items: 3 },
        1200: { items: 4 }
    },
};
const navigate = useNavigate();

const goToDetails = (id, mediaType) => {
  navigate({
    pathname : "/details",
    search : `?id=${id}&category=${mediaType}`
  })
}



  return (
    <>
      {trendingAll.length > 0 ? 
      <OwlCarousel className='mb-5 mt-5 p-5' {...options}> 
      {trendingAll && baseUrlImg ? trendingAll.map((movie, index) =>
        <div key={index} className={`position-relative ${style.item}`}>
          <img className={`${style.img}`} alt='img' src= {baseUrlImg+movie.poster_path}/>
          <div className={`${style.over}`}>
            <div onClick={() => goToDetails(movie.id, movie.media_type)} className={`btn btn-danger rounded-pill ${style.btn}`}>Read More...</div>
            <span className='position-absolute top-0 end-0 bg-danger text-white p-2 m-2 rounded-2'>Vote : {movie.vote_average}</span>
          </div>
          <div className={`${style.info}`}>
              <span className='bg-warning text-dark'>{movie.release_date}</span>
              <h4 className='text-capitalize rounded p-1 mt-1'>{movie.title ? movie.title : movie.name}</h4>
          </div>
        </div>) : ""}
      </OwlCarousel>
      : 
      ""}  
    </>
  )
}
