import  { Component } from 'react';
import { useState } from 'react';
import "../body/footer.css";




export default function Footer(props) {

const footer = props.className;
const cir = props.className1;
const top = props.onClick;

  return (
    <div className={footer}>
      <div className={cir} onClick={top}></div>
      <div className="email">
        <h3>ایمیل</h3>
        <span>sasanmohtashme@gmail.com</span>
      </div>
      <div className="socal">
        <span className="icon1"></span>
        <span className="icon2"></span>
        <span className="icon3"></span>
      </div>
      <div className="about">
        <span><p>design by sasan</p></span>
      </div>
    </div>
  )
}

