import React from 'react';
import style from "./Footer.module.css";

export default function Footer() {

  function up() {
    window.scrollTo(0, 0);
  }

  return (
    <>
    <div className={`${style.bg} mb-0 up text-muted py-4 px-5`}>
      <div className="container">
        <div className={`${style.item}`}>
          <div className={`${style.left}`}>
          © 2018 Blockter. All Rights Reserved. Designed by <span className=' text-primary'>Mohamed Gamal</span>.
          </div>
          <div className={`${style.right}`} onClick={up}>
            Back to top <i className="fa-solid fa-arrow-up ms-2"></i>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
