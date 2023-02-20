import React from 'react';
import style from "./Loading.module.css";

export default function Loading() {
  return (
    <>
    <div className={`${style.body}`}>
    <div className={`${style.boxes}`}>
    <div className={`${style.box}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className={`${style.box}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className={`${style.box}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div className={`${style.box}`}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>
    </div>
    </>
  )
}
