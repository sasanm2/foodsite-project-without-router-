import { getValue } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import { useContext } from "react";
import Search from "./body/sidepage/search";
import Context from "./context/context";

export default function Menu() {
  const context = useContext(Context);
  const [show, setShow] = useState(true);
  const [hover, setHover] = useState(true);
  const [hover1, setHover1] = useState(true);
  const [hover2, setHover2] = useState(true);
  const [hover3, setHover3] = useState(true);
  const [time, setTime] = useState(true);
  const [main, setMain] = useState("footer1");
  const onclick = context.onClick;
  const onclick1 = context.onClick1;
  const onclick2 = context.onClick2;
  const onclick3 = context.onClick3;
  const onclick4 = context.onClick4;
  const onclick5 = context.onClick5;
  const onclick6 = context.onClick6;
  const onclick7 = context.onClick7;
 
  const handleclick = () => {
    setShow(show == true ? false : true);
    handletime();
  };

  const handlehover = () => {
    setHover(false);
  };
  const handlehoverout = () => {
    setHover(true);
  };
  const handlehover1 = () => {
    setHover1(false);
  };
  const handlehoverout1 = () => {
    setHover1(true);
  };
  const handlehover2 = () => {
    setHover2(false);
  };
  const handlehoverout2 = () => {
    setHover2(true);
  };
  const handlehover3 = () => {
    setHover3(false);
  };
  const handlehoverout3 = () => {
    setHover3(true);
  };
  const handletime = () => {
    setTimeout(function () {
      setTime(time == true ? false : true);
    }, 500);
  };
  const search = (value) => {

  }
  
  return (
    <>
      <div onClick={() => handleclick()} className="btn">
        {show == true ? (
          <div className="line1 line"></div>
        ) : (
          <div className="line1 line show1"></div>
        )}
        {show == true ? (
          <div className="line2 line"></div>
        ) : (
          <div className="line2 line show2"></div>
        )}
        {show == true ? (
          <div className="line3 line"></div>
        ) : (
          <div className="line3 line show3"></div>
        )}
      </div>
      {show == true ? (
        <div className="navbar">
          <nav>
            <div
              className="one"
              onMouseOver={handlehover}
              onMouseOut={handlehoverout}
              onClick={onclick1}
            >
              {hover == true ? (
                <a href="#">
                  <i className="icon4"></i> صفحه اصلی
                </a>
              ) : (
                <a href="#" onClick={onclick4}>
                  <i className="icon42"></i> صفحه اصلی
                </a>
              )}
            </div>
            <div
              className="two"
              onMouseOver={handlehover1}
              onMouseOut={handlehoverout1}
              onClick={onclick}
            >
              {hover1 == true ? (
                <a href="#">
                  <i className="icon1"></i> غذاهای ایرانی
                </a>
              ) : (
                <a href="#" onClick={onclick5}>
                  <i className="icon12"></i> غذاهای ایرانی
                </a>
              )}
            </div>
            <div
              className="three"
              onMouseOver={handlehover2}
              onMouseOut={handlehoverout2}
              onClick={onclick2}
            >
              {hover2 == true ? (
                <a href="#">
                  <i className="icon2"></i> غذاهای فست فودی
                </a>
              ) : (
                <a href="#" onClick={onclick6}>
                  <i className="icon22"></i> غذاهای فست فودی
                </a>
              )}
            </div>
            <div
              className="four"
              onMouseOver={handlehover3}
              onMouseOut={handlehoverout3}
              onClick={onclick3}
            >
              {hover3 == true ? (
                <a href="#">
                  <i className="icon3"></i> غذاهای خارجی
                </a>
              ) : (
                <a href="#" onClick={onclick7}>
                  <i className="icon32"></i> غذاهای خارجی
                </a>
              )}
            </div>
          </nav>
        </div>
      ) : time == true ? (
        <div className="navbar activenav activenav1">
          <div>
            <div
              className="four4"
              onMouseOver={handlehover}
              onMouseOut={handlehoverout}
              onClick={onclick1}
            >
              {hover == true ? (
                <a href="#" className="activea">
                  <i className="icon3"></i> صفحه اصلی
                </a>
              ) : (
                <a href="#" className="activea" onClick={onclick4}>
                  <i className="icon42"></i> صفحه اصلی
                </a>
              )}
            </div>
            <div
              className="two2"
              onMouseOver={handlehover1}
              onMouseOut={handlehoverout1}
              onClick={onclick}
            >
              {hover1 == true ? (
                <a href="#" className="activea">
                  <i className="icon1"></i> غذاهای ایرانی
                </a>
              ) : (
                <a href="#" className="activea" onClick={onclick5}>
                  <i className="icon12"></i> غذاهای ایرانی
                </a>
              )}
            </div>
            <div
              className="three3"
              onMouseOver={handlehover2}
              onMouseOut={handlehoverout2}
              onClick={onclick2}
            >
              {hover2 == true ? (
                <a href="#" className="activea">
                  <i className="icon2"></i> غذاهای فست فودی
                </a>
              ) : (
                <a href="#" className="activea" onClick={onclick6}>
                  <i className="icon22"></i> غذاهای فست فودی
                </a>
              )}
            </div>
            <div
              className="one1"
              onMouseOver={handlehover3}
              onMouseOut={handlehoverout3}
              onClick={onclick3}
            >
              {hover3 == true ? (
                <a href="#" className="activea">
                  <i className="icon4"></i> غذاهای خارجی
                </a>
              ) : (
                <a href="#" className="activea" onClick={onclick7}>
                  <i className="icon32"></i> غذاهای خارجی
                </a>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="navbar activenav">
          <div>
            <div
              className="four4"
              onMouseOver={handlehover}
              onMouseOut={handlehoverout}
              onClick={onclick1}
            >
              {hover == true ? (
                <a href="#" className="activea">
                  <i className="icon3"></i> صفحه اصلی
                </a>
              ) : (
                <a href="#" className="activea" onClick={onclick4}>
                  <i className="icon42"></i> صفحه اصلی
                </a>
              )}
            </div>
            <div
              className="two2"
              onMouseOver={handlehover1}
              onMouseOut={handlehoverout1}
              onClick={onclick}
            >
              {hover1 == true ? (
                <a href="#" className="activea">
                  <i className="icon1"></i> غذاهای ایرانی
                </a>
              ) : (
                <a href="#" className="activea" onClick={onclick5}>
                  <i className="icon12"></i> غذاهای ایرانی
                </a>
              )}
            </div>
            <div
              className="three3"
              onMouseOver={handlehover2}
              onMouseOut={handlehoverout2}
              onClick={onclick2}
            >
              {hover2 == true ? (
                <a href="#" className="activea">
                  <i className="icon2"></i> غذاهای فست فودی
                </a>
              ) : (
                <a href="#" className="activea" onClick={onclick6}>
                  <i className="icon22"></i> غذاهای فست فودی
                </a>
              )}
            </div>
            <div
              className="one1"
              onMouseOver={handlehover3}
              onMouseOut={handlehoverout3}
              onClick={onclick3}
            >
              {hover3 == true ? (
                <a href="#" className="activea">
                  <i className="icon4"></i> غذاهای خارجی
                </a>
              ) : (
                <a href="#" className="activea" onClick={onclick7}>
                  <i className="icon32"></i> غذاهای خارجی
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      <Search search={search}/>
    </>
  );
}
