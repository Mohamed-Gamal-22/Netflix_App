import React from 'react';
import style from "./links.module.css";
import "./links.module.css";

export default function Links() {
  return (
    <>
    <div className={`${style.b}`}>
        <div className="container">
            <div className={`row p-5`}>
            <div className="col-lg-3 col-md-6 col-sm-6 mb-4">
                <div className="item1">
                    <h5 className='text-white mb-5'>Movie App</h5>
                    <small className='text-muted'>5th Avenue st, manhattanNew<br/> York, NY 10001</small>
                    <p className='text-white mt-4'><small className='text-muted'>Call us:</small> (+01) 202 342 6789</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
                <div className="item">
                    <h5 className='text-white mb-4'>Resources</h5>
                    <div className="links d-flex flex-column text-muted">
                        <span className={`${style.l}`}>About Block Buster</span>
                        <span className={`${style.l}`}>Contact Us</span>
                        <span className={`${style.l}`}>Forums</span>
                        <span className={`${style.l}`}>Blog</span>
                        <span className={`${style.l}`}>Help Center</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 mb-4">
                <div className="item">
                    <h5 className='text-white mb-4'>Account</h5>
                    <div className="links d-flex flex-column text-muted">
                        <span className={`${style.l}`}>My Account</span>
                        <span className={`${style.l}`}>Watchlist</span>
                        <span className={`${style.l}`}>Collections</span>
                        <span className={`${style.l}`}>User Guide</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 mb-4">
                <div className="item">
                    <h5 className='text-white mb-4'>Legal</h5>
                    <div className="links d-flex flex-column text-muted">
                        <span className={`${style.l}`}>Terms of Use</span>
                        <span className={`${style.l}`}>Privacy Policy</span>
                        <span className={`${style.l}`}>Security</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-8 mb-4">
                <div className="item">
                    <h5 className='text-white mb-4'>Newsletter</h5>
                    <small className='text-muted d-inline-block'>Subscribe to our newsletter system now to get latest news from us</small>
                    <form>
                        <div className="cont position-relative">
                            <input type="email" className={`${style.control} mt-2 w-100 h-100 p-2 bg-transparent`} placeholder='Enter your email...'/>
                            <i className="fa-regular fa-envelope position-absolute top-50 end-0 translate-middle text-muted"></i>
                        </div>
                    </form>
                    <div className={`sub mt-3 text-danger fw-bold ${style.l}`}>
                        <small >SUBSCRIBE NOW</small>
                        <i className="fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    
    </>
  )
}
