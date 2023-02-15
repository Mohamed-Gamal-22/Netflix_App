import React from 'react';
import style from "./Profile.module.css";
import { useState, useContext, useEffect } from 'react';
import { movieContext } from './../MovieContext/MovieContext';


export default function Profile({userData}) {

  const {allNotes} = useContext(movieContext)
  const baseUrlImg = "https://image.tmdb.org/t/p/w500";
  const [myNotes, setMyNotes] = useState([])

  const getAllNoteAsObjects = () => {
    let notes = allNotes.filter((note) => note.desc !== "");
    let desc = notes.map((note) =>  JSON.parse(note.desc))
    setMyNotes(desc);
    console.log(desc);
  }

  // useEffect(() => {
  //   if(allNotes.length > 0){
  //     // getAllNoteAsObjects()
  //     console.log(allNotes);
  //   }
  // },[allNotes])

  useEffect(() => {
    if(allNotes !== undefined){
      getAllNoteAsObjects();
    }
  },[allNotes])

  // const deleteItem = (id) => {
  //   let allItems = JSON.parse(localStorage.getItem("watchlist"));
  //   let newItems = allItems.filter((item) => item.id !== id);
  //   localStorage.setItem("watchlist", JSON.stringify(newItems));
  //   setWatchist(newItems)
  // }

  return (
    <>
      <div className={`${style.parent} px-5`}>
        <h3 className='text-white text-uppercase rounded-2 '>welcome {userData.first_name}</h3>
        <p className='text-white my-3'>this is every thing you added to your watchlist.</p>
      </div>
      <div className="container text-white my-3">
        <div className="row g-3 p-5">
          {myNotes.length > 0 ? myNotes.map((e, index) => <div key={index} className="col-md-3 col-sm-4">
              <div className="item bg-white p-1">
                <img className='img-fluid' src={baseUrlImg+e.poster_path ? baseUrlImg+e.poster_path : baseUrlImg+e.profile_path} alt="" />
                <div className="btn btn-danger mt-1 w-100">Delete</div>
              </div>
            </div>
          ): <h1 className='text-danger mt-5'>you don't choose any myNotes yet !</h1>}
        </div>
      </div>
    </>
  )
}
