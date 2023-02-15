import React from 'react';
import style from "./second.module.css";
import ads from "../Images/ads1.png";
import { useContext } from 'react';
import { movieContext } from './../MovieContext/MovieContext';
import { useNavigate } from 'react-router-dom';


export default function Second() {

  const navigate = useNavigate();
  const {data} = useContext(movieContext)
  const {changeType} = useContext(movieContext)
  const baseUrlImg = "https://image.tmdb.org/t/p/w500";

  const goToDetails = (id, mediaType) => {
    navigate({
      pathname : "/details",
      search : `?id=${id}&category=${mediaType}`
    })
  }

  return (
    <>
    <div className="text-white row px-5">
      <div className="col-md-8 col-sm-12">
        <div className={`${style.spanitem}`}>
          <span onClick={() => changeType("all")}>All</span>
          <span onClick={() => changeType("movie")}>Movies</span>
          <span onClick={() => changeType("tv")}>TV Shows</span>
          <span onClick={() => changeType("person")}>Person</span>
        </div>
        <div className="moviesItem my-4">
          <div className="row g-2">
            {data ? data.map((e, index) => {
              if(e.poster_path || e.profile_path){
                return (
                  <div key={index} className="col-lg-3 col-md-6">
                    <div className={`${style.smallimg} position-relative`}>
                      <img className={`${style.img}`} alt={e.name ? e.name : e.title} src= {e.poster_path ? baseUrlImg+e.poster_path
                      : baseUrlImg+e.profile_path}/>
                      <div className={`${style.over}`}>
                        <div onClick={() => goToDetails(e.id, e.media_type)} className={`btn btn-danger rounded-pill ${style.btn}`}>Read More...</div>
                        <h6 className='text-capitalize rounded p-1 mt-1 position-absolute start-0 bottom-0 m-3 text-warning'>{e.name ? e.name : e.title}</h6>
                      </div>
                    </div>
                </div>
                )
            
              }
              else return ""
            }
              
            ) : ""}
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className={`${style.ads} mt-5 p-2 bg-white`}>
          <div className="a">
            <div className='mb-0'>ads here...</div>
            <img src={ads} className={`img-fluid w-100`} alt="" />
          </div>
          <div className="a">
            <div className='mb-0'>ads here...</div>
            <img src={ads} className={`img-fluid w-100`} alt="" />
          </div>
          <div className="a">
            <div className='mb-0'>ads here...</div>
            <img src={ads} className={`img-fluid w-100`} alt="" />
          </div>
          <div className="a">
            <div className='mb-0'>ads here...</div>
            <img src={ads} className={`img-fluid w-100`} alt="" />
          </div>
          <div className={`${style.b}`}>
            <div className='mb-0'>ads here...</div>
            <img src={ads} className={`img-fluid w-100`} alt="" />
          </div>
          <div className={`${style.b}`}>
            <div className='mb-0'>ads here...</div>
            <img src={ads} className={`img-fluid w-100`} alt="" />
          </div>
          <div className={`${style.b}`}>
            <div className='mb-0'>ads here...</div>
            <img src={ads} className={`img-fluid w-100`} alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
