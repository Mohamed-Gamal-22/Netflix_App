import React from 'react';
import img from "../Images/error-404-web-page-template-page-found_451939-147.jpg";
import style from "./notfound.module.css";

export default function Notfound() {
  return (
    <>
      <div className={`${style.over} position-relative d-flex justify-content-center align-items-center mt-4`}>
        <img className='w-50' src={img} alt="" />
      </div>
    </>
  )
}
