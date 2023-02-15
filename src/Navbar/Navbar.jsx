import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import style from "./Navbar.module.css";

export default function Navbar({userData, logout}) {

  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile")
  }

  return (
    <>
    <nav className={`navbar navbar-expand-lg ${style.bg} fixed-top`}>
  <div className="container-fluid">
    <Link className={`navbar-brand fw-bold fs-4 ${style.color} text-warning`} to="/">Free Netflix</Link>
    <button className={`navbar-toggler ${style.navbartoggler}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i className="fa-solid fa-bars-staggered text-white"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {userData ? <>
        <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <Link className={`nav-link active ${style.color}`} aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${style.color}`} to="movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${style.color}`} to="tv">Tv Shows</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${style.color}`} to="youtube">Youtube</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${style.color}`} to="about">About</Link>
        </li>
      </ul>
      </> : ""}
      {userData ? <><li className="nav-item d-flex align-items-center">
        <span onClick={() => goToProfile()} className={`nav-link ${style.color} mx-5 fw-bold text-warning`}>{userData.first_name+" "+userData.last_name}</span>
          <span className={`nav-link ${style.color}`} onClick={logout}>logout</span>
        </li></> : <><ul className="navbar-nav ms-auto">  
          <li className={`nav-item text-white me-3 d-flex align-items-center`}>
            <i className={`fa-brands fs-5 mx-2 fa-facebook ${style.icon}`}></i>
            <i className={`fa-brands fs-5 mx-2 fa-youtube ${style.icon}`}></i>
            <i className={`fa-brands fs-5 mx-2 fa-instagram ${style.icon}`}></i>
            <i className={`fa-brands fs-5 mx-2 fa-spotify ${style.icon}`}></i>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${style.color}`} to="login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${style.color}`} to="register">Register</Link>
          </li>
      </ul></>}
      
    </div>
  </div>
</nav>
    </>
  )
}
