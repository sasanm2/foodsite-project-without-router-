import { Component } from "react";
import { useState } from "react";
import "./cards.css";
import { Images} from "./image";
 

export default function Cards() {
  
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);
  const [show3, setShow3] = useState(true);
  const [show4, setShow4] = useState(true);
  

  function addclass() {
    const one = setTimeout(function () {
      setShow(false);
    }, 0);
    const two = setTimeout(function () {
      setShow1(false);
    }, 5000);
    const three = setTimeout(function () {
      setShow2(false);
    }, 10000);
    const four = setTimeout(function () {
      setShow3(false);
    }, 15000);
    const five = setTimeout(function () {
      setShow4(false);
    }, 20000);
    const six = setTimeout(() => {
      setShow(true);
      setShow1(true);
      setShow2(true);
      setShow3(true);
      setShow4(true);
      clearTimeout(one);
      clearTimeout(two);
      clearTimeout(three);
      clearTimeout(four);
      clearTimeout(five);
    }, 25000);
  }

  if (show == true) {
    addclass();
  }
  
  return (
    <div className="cards">
      {show == true ? (
        <div className="card card1"></div>
      ) : (
        <div className="card card1 show"><Images onShow={show} /></div>
      )}
      {show1 == true ? (
        <div className="card card2"></div>
      ) : (
        <div className="card card2 show"><Images onShow1={show1} /></div>
      )}
      {show2 == true ? (
        <div className="card card3"></div>
      ) : (
        <div className="card card3 show"><Images  onShow2={show2}/></div>
      )}
      {show3 == true ? (
        <div className="card card4"></div>
      ) : (
        <div className="card card4 show"><Images onShow3={show3}/></div>
      )}
      {show4 == true ? (
        <div className="card card5"></div>
      ) : (
        <div className="card card5 show"><Images onShow4={show4}/></div>
      )}
    </div>
  );
}
