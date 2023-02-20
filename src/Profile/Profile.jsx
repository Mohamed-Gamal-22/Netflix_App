import React from 'react';
import style from "./Profile.module.css";
import { useState, useContext, useEffect } from 'react';
import { movieContext } from './../MovieContext/MovieContext';
import axios from 'axios';


export default function Profile({userData}) {

  const token = localStorage.getItem("token")
  const {allNotes, getAllNotes} = useContext(movieContext)
  const baseUrlImg = "https://image.tmdb.org/t/p/w500";
  const [myNotes, setMyNotes] = useState([])

  const getAllNoteAsObjects = () => {
    if(allNotes){
      let notes = allNotes.filter((note) => note.desc !== "");
      // const note = notes.filter((note) => JSON.parse(note.desc).id == details.id);
      let desc = notes.map((note) => ({desc :JSON.parse(note.desc), id : note._id}))
      setMyNotes(desc);
      // console.log(desc);
    }
    else{
      setMyNotes([])
    }
  }


  // useEffect(() => {

  // }, [myNotes])

  useEffect(() => {
      getAllNoteAsObjects();
  },[allNotes])

  const deleteItem = async(id) => {
    const {data} = await axios.delete(`https://sticky-note-fe.vercel.app/deleteNote`, {data : {token : token, NoteID : id}});
    getAllNotes()
    alert("you deleted this item successfully !")
  }

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
                <img className='img-fluid' src={baseUrlImg+e.desc.poster_path ? baseUrlImg+e.desc.poster_path : baseUrlImg+e.desc.profile_path} alt="" />
                <div onClick={() => deleteItem(e.id)} className="btn btn-danger mt-1 w-100">Delete</div>
              </div>
            </div>
          ): <>
          <h1 className='text-danger mt-5'>you don't choose any movies or tv shows yet !</h1>
          <div className='mb-5 pb-5'></div>
          <div className='mb-5 pb-5'></div>
          <div className='mb-3'></div>
          </>}

        </div>
      </div>
    </>
  )
}
