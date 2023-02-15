import React from 'react';
import style from "./SearchBar.module.css";

export default function SearchBar({searchMovie}) {


  return (
    <>
        <form className={`px-5 mt-4 ${style.form} position-relative`}>
            <input onChange={searchMovie} className={`w-100 bg-transparent py-3 ${style.control}`} type="text" name="search" placeholder='Search for movie.......'/>
            <i className={`fa-solid fa-magnifying-glass position-absolute ${style.i}`}></i>
        </form>
    </>
    )
}
