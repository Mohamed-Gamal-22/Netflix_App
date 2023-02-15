import React from 'react'
import img from "../Images/nN7SOJVZ.jfif";
import video from '../Images/hhhjj1111222.mp4';
// import style from "./Youtube.module.css";

export default function Youtube() {
  return (
    <>
        <div className="row my-5 py-5">
            <h2 className='text-center text-white mb-5 text-capitalize'>you can follow us on <span className='text-danger fw-bold'>youtube</span></h2>
            <div className="col-lg-7 col-md-12 mb-4">
                <div className="vid position-relative">
                    {/*autoPlay*/}
                    <video controls width="100%" height="100%"  loop poster={img}>
                        <source src={video} type="video/mp4"/>
                    </video>
                    {/* <i className={`fa-brands fa-youtube position-absolute top-50 start-50 translate-middle ${style.i}`}></i> */}
                </div>
            </div>
            <div className="col-lg-5 col-md-12">
                <div className="lor text-white-50">
                    <h3 className='text-white fw-bold text-capitalize mb-4'>mohamed gamal</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At facilis ipsam qui quisquam quod dicta veritatis voluptatem molestiae harum culpa.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At facilis ipsam qui quisquam quod dicta veritatis voluptatem molestiae harum culpa.</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At facilis ipsam qui quisquam quod dicta veritatis voluptatem molestiae harum culpa.</p>
                </div>
            </div>
        </div>
    </>
  )
}
