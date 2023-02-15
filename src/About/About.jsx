import React from 'react';
import style from "./About.module.css";
import img from "../Images/nN7SOJVZ.jfif";

export default function About() {
  return (
    <>
      <div className="row p-5 my-5 text-white">
        <div className="col-lg-8 col-md-7">
          <div className="item">
            <h4>LATEST NEWS</h4>
            <p className={`${style.h}`}>Benaughty shall be various other regional casual dating situation on line</p>
            <span className='text-muted'>5 months ago</span>
            <p className='w-75 mt-2 text-muted lh-2'>Benaughty shall be various other regional casual dating situation on line Bens having cell phones and machines, and you can blackberrys. It online dating web site will allow</p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-6 col-md-12">
              <div className="itemleft">
                <h6>LATEST NEWS</h6>
                <p className={`${style.h}`}>Benaughty shall be various other regional casual dating situation on line</p>
                <span className='text-muted'>5 months ago</span>
              </div>
              <hr className='my-4'/>
              <div className="itemleft">
              <h6>LATEST NEWS</h6>
                <p className={`${style.h}`}>Benaughty shall be various other regional casual dating situation on line</p>
                <span className='text-muted'>5 months ago</span>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="itemleft mt-5">
                <p className={`${style.h}`}>Benaughty shall be various other regional casual dating situation on line</p>
                <span className='text-muted'>5 months ago</span>
              </div>
              <hr />
              <div className="itemleft">
                <p className={`${style.h} mt-5`}>Benaughty shall be various other regional casual dating situation on line</p>
                <span className='text-muted'>5 months ago</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-5 mt-5">
          <div className="twitter bg-light text-dark p-3 rounded-2">
            <div className="head d-flex align-items-start">
              <div className="left me-3 mt-2">
                <i className="fa-regular fa-bookmark"></i>
              </div>
              <div className="right">
                <div className='fw-bold my-0'>MohamedGamal</div>
                <small className='my-0'>@MohamedGamal</small>
                <div><i className={`fa-brands fa-twitter ${style.t}`}></i></div>
              </div>
            </div>
            <div className="body">
              <p className='mb-0'>WordPress Names 5.5 Release Leads, Plans All-Women Release Squad for 5.6.</p>
              <span className={`${style.a} text-primary`}>wptavern.com/wordpress-names-5 …</span>  
            </div>
            <div className="card mt-2 rounded-2">
              <img src={img} className="card-img-top" alt="img" />
              <div className="card-body">
                <h6 className="card-title">this is the name of card</h6>
                <div className="card-text">Some quick example text to build on the card title and make up the bulk of .</div>
                <span className='text-muted'>@Mohamed Gamal</span>
              </div>
            </div>
              <div className="react mt-1 d-flex flex-column align-items-start">
                <i className="fa-solid fa-heart text-danger"></i>
                <span className='text-muted'>223</span>
                <span className={`${style.a} text-primary`}>10:34 PM - 18 Jun 2023</span>
                <p className='mt-3 text-capitalize btn btn-outline-primary'>see more about projects</p>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
