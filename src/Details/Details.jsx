import axios from 'axios';
import React, {useEffect} from 'react';
import { useSearchParams } from 'react-router-dom';
import { useState, useContext } from 'react';
import style from "./Details.module.css";
import { movieContext } from './../MovieContext/MovieContext';

export default function Details({userData}) {

  const {allNotes} = useContext(movieContext);
  const [notes, setNotes] = useState([])
  const user_id = userData._id;
  const token = localStorage.getItem("token");
  const baseUrlImg = "https://image.tmdb.org/t/p/w500";
  const [searchBaram] = useSearchParams();
  const [details, setDetails] = useState([])
  const id = searchBaram.get("id");
  const category = searchBaram.get("category");
  const [isMovieAdded , setIsMovieAdded] = useState(false);
  const [note, setNote] = useState({
    title : "ay7aga",
    desc : "",
    citizenID : user_id,
    token : token
  })

  const getDetails = async () => {
    let {data} = await axios.get(`https://api.themoviedb.org/3/${category}/${id}?api_key=941d7c8adac166c6d12ed7428eec2753&language=en-US`)
    setDetails(data);
  }

  const getMovie = (newOne) => {
    let userNote = {...note}
    userNote["desc"] = JSON.stringify(newOne);
    setNote(userNote);
    addMovie(userNote)
  }

  const addMovie = async(userNote) => {
    let allDesc = notes.map((note) => note.desc);
    allDesc = allDesc.map((desc) => desc);
    allDesc = allDesc.filter((desc) => desc !== "");
    allDesc = allDesc.map((desc) => JSON.parse(desc));
    // console.log(allDesc);
    // console.log(JSON.parse(userNote.desc));

    let res = allDesc.find((desc) => desc.id == JSON.parse(userNote.desc).id)
    if(res){
      alert("this item is already exist !");
    }
    else{
      await addTo(userNote)
      alert("added !");
      console.log(notes.length);
    }
  }

  const addTo = async(userNote) => {
    let {data} = await axios.post(`https://sticky-note-fe.vercel.app/addNote`,userNote)
    console.log(data);
  }


  const checkAddedMovie = () => {
    
    let allDesc = allNotes.map((note) => note.desc);
    allDesc = allDesc.map((desc) => desc);
    allDesc = allDesc.filter((desc) => desc !== "");
    allDesc = allDesc.map((desc) => JSON.parse(desc));
    // console.log(allDesc);

    let isExist = allDesc.find((desc) => desc.id == id);
    if(isExist){
      setIsMovieAdded(true);
    }
    else{
      setIsMovieAdded(false)
    }
  }



  useEffect(() => {
    getDetails()
  },[])

  useEffect(() => {
    if(allNotes){
      setNotes(allNotes)
    }
  },[allNotes])

  useEffect(() => {
    if(allNotes){
      checkAddedMovie()
    }
  },[notes])


  
  return (
    <>
      {details
       ? <div className="row my-5 py-5">
        <div className="col-lg-6 mb-3 text-center">
          <div className="img">
            <img className={`${style.img}`} src={`${details.poster_path ? baseUrlImg+details.poster_path : baseUrlImg+details.profile_path}`} alt="imge" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="title text-white">
            <h1 className='text-center fw-bold text-uppercase mb-3'>{details.title ? details.title : details.name}</h1>
            {category !== "person" ? <>
            <div className='cont mb-2 d-flex text-capitalize align-items-center'>
               <span className='fw-bold text-warning me-2 fs-5'>rate</span> : <span className='ms-2 fs-5'>{Number(details.vote_average).toFixed(2)}</span>
            </div>
            <div className='cont mb-2 d-flex text-capitalize align-items-center'>
               <span className='fw-bold text-warning me-2 fs-5'>language</span> : <span className='ms-2 fs-5'>{details.original_language}</span>
            </div>
            { details.adult ?
            <div className='cont mb-2 d-flex text-capitalize align-items-center'>
              <h3>this movie for adults</h3>
            </div>
            : ""} 
            <div className='cont d-flex text-capitalize align-items-center'>
               <span className='fw-bold text-warning me-2 fs-5'>date</span> : <span className='ms-2 fs-5'>{details.release_date ? details.release_date  : details.last_air_date}</span>
            </div>
            <div className='cont mt-4 text-white-50 lh-2 d-flex text-capitalize '>
               {details.overview}
            </div>
            {isMovieAdded ? 
            <div onClick={() => getMovie(details)} className={`btn btn-danger w-100 mt-5`}>Remove From WatchList</div>
            : 
            <div onClick={() => getMovie(details)} className={`btn btn-success w-100 mt-5`}>Add To WatchList</div>}
            </> : <>
            <div className='cont justify-content-center mb-2 d-flex text-capitalize align-items-center'>
               <span className='fw-bold text-warning me-2 fs-5'>popularity</span> : <span className='ms-2 fs-5'>{Number(details.popularity).toFixed(2)}</span>
            </div>
            </>}
          </div>
        </div>
      </div>
       :""}
    </>
  )
}
