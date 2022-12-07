import "./Header.css";
import { Component, useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import Menu from "./menu";
import Cards from "./body/cards";
import Hero from "./body/hero";
import Footer from "./body/footer";
import Context from "./context/context";
import Iranianfood from "./body/mainpage/iranianfood";
import Fastfood from "./body/mainpage/fastfood";
import Kharjifood from "./body/mainpage/kharjifood";
import Page5 from "./body/sidepage/page5";


function Header() {
  const task = localStorage.getItem("task");
  const task1 = localStorage.getItem("tasks");
  const tas = localStorage.getItem('tas');
  const [pages, setPages] = useState(task);
  localStorage.setItem("task", pages);
  const [main, setMain] = useState(task1);
  localStorage.setItem("tasks", main);
  const [class1, setClass1] = useState(tas);
  localStorage.setItem("tas", class1);
  const[scroll, setScroll] = useState(false);
 
  let scrolling = ['header'];
  let cir = [];
  
  function handlescroll(){
    const offset = window.scrollY;
    if(offset > 200){
      setScroll(true);
    }else{
      setScroll(false);
    }
  }
  

  function top(){
    window.scrollTo({top: 0, behavior : "smooth"})
  }
  
  useEffect((e)=>{
    window.addEventListener('scroll', handlescroll);
  })

  

  if(scroll == true){
    scrolling.push('sticky');
    cir.push('circle');
  }

  function handleclick1() {
    setPages("page2");
    localStorage.setItem("tasksss", "main1");
    // window.scrollTo({top:0});
  }
  function handleclick2() {
    setPages("page1");
    localStorage.setItem("tasksss", "main1");
    localStorage.setItem("taskss", "main1");
  }
  function handleclick3() {
    setPages("page3");
    localStorage.setItem("taskss", "main1");
  }
  function handleclick4() {
    setPages("page4");
    localStorage.setItem("tasksss", "main1");
    localStorage.setItem("taskss", "main1");
  }
  function handleclick5() {
    setPages("page5");
    localStorage.setItem("tasksss", "main1");
    localStorage.setItem("taskss", "main1");
  }
  function handlechange1() {
    setMain("footer1");
  }
  function handlechange2() {
    setMain("footer2");
  }
  function handlechange3() {
    setMain("footer3");
  }
  function handlechange4() {
    setMain("footer4");
  }
  function handlechange5() {
    setMain("footer5");
  }
  function handleclass1() {
    setClass1("main1");
  }
  function handleclass2() {
    setClass1("main2");
  }
  function handleclass3() {
    setClass1("main3");
  }
  function handleclass4() {
    setClass1("main4");
  }
  function handleclass5() {
    setClass1("main5");
  }
  function handleclass6() {
    setClass1("main6");
  }
  function handleclass7() {
    setClass1("main7");
  }
  function handleclass8() {
    setClass1("main8");
  }
  function handleclass9() {
    setClass1("main9");
  }
  function handleclass10() {
    setClass1("main10");
  }
  function handleclass11() {
    setClass1("main11");
  }
  function handleclass12() {
    setClass1("main12");
  }
  function handleclass13() {
    setClass1("main13");
  }
  function handleclass14() {
    setClass1("main14");
  }
  function handleclass15() {
    setClass1("main15");
  }
  function handleclass16() {
    setClass1("main16");
  }
  function handleclass17() {
    setClass1("main17");
  }
  function handleclass18() {
    setClass1("main18");
  }
  function handleclass19() {
    setClass1("main19");
  }
  function handleclass20() {
    setClass1("main20");
  }
  function handleclass21() {
    setClass1("main21");
  }
  function handleclass22() {
    setClass1("main22");
  }
  function handleclass23() {
    setClass1("main23");
  }
  function handleclass24() {
    setClass1("main24");
  }
  function handleclass25() {
    setClass1("main25");
  }
  function handleclass26() {
    setClass1("main26");
  }
  function handleclass27() {
    setClass1("main27");
  }
  function handleclass28() {
    setClass1("main28");
  }
  function handleclass29() {
    setClass1("main29");
  }
  function handleclass30() {
    setClass1("main30");
  }
  function handleclass31() {
    setClass1("main31");
  }
  function handleclass32() {
    setClass1("main32");
  }
  function handleclass33() {
    setClass1("main33");

  }
  function handleclass34() {
    setClass1("main34");
  }
  function handleclass35() {
    setClass1("main35");
  }
  function handleclass36() {
    setClass1("main36");
  }
  function handleclass37() {
    setClass1("main37");
  }
  function handleclass38() {
    setClass1("main38");
  }
  function handleclass39() {
    setClass1("main39");
  }
  function handleclass40() {
    setClass1("main40");
  }
  function handleclass41() {
    setClass1("main41");
  }
  function handleclass42() {
    setClass1("main42");
  }
  function handleclass43() {
    setClass1("main43");
  }
  function handleclass44() {
    setClass1("main44");
  }
  function handleclass45() {
    setClass1("main45");
  }
  function handleclass46() {
    setClass1("main46");
  }
  function handleclass47() {
    setClass1("main47");
  }
  function handleclass48() {
    setClass1("main48");
  }
  function handleclass49() {
    setClass1("main49");
  }
  function handleclass50() {
    setClass1("main50");
  }
  function handleclass51() {
    setClass1("main51");
  }
  function handleclass52() {
    setClass1("main52");
  }
  function handleclass53() {
    setClass1("main53");
  }
  function handleclass54() {
    setClass1("main54");
  }
  function handleclass55() {
    setClass1("main55");
  }
  function handleclass56() {
    setClass1("main56");
  }
  function handleclass57() {
    setClass1("main57");
  }
  function handleclass58() {
    setClass1("main58");
  }
  function handleclass59() {
    setClass1("main59");
  }
  function handleclass60() {
    setClass1("main60");
  }
  function handleclass61() {
    setClass1("main61");
  }
  function handleclass62() {
    setClass1("main62");
  }
  function handleclass63() {
    setClass1("main63");
  }
  function handleclass64() {
    setClass1("main64");
  }
  function handleclass65() {
    setClass1("main65");
  }
  function handleclass66() {
    setClass1("main66");
  }
  function handleclass67() {
    setClass1("main67");
  }
  function handleclass68() {
    setClass1("main68");
  }
  function handleclass69() {
    setClass1("main69");
  }
  function handleclass70() {
    setClass1("main70");
  }
  function handleclass71() {
    setClass1("main71");
  }
  function handleclass72() {
    setClass1("main72");
  }
  function handleclass73() {
    setClass1("main73");
  }
  function handleclass74() {
    setClass1("main74");
  }
  function handleclass75() {
    setClass1("main75");
  }
  function handleclass76() {
    setClass1("main76");
  }
  function handleclass77() {
    setClass1("main77");
  }
  function handleclass78() {
    setClass1("main78");
  }
  function handleclass79() {
    setClass1("main79");
  }
  function handleclass80() {
    setClass1("main80");
  }
  function handleclass81() {
    setClass1("main81");
  }
  function handleclass82() {
    setClass1("main82");
  }
  function handleclass83() {
    setClass1("main83");
  }
  function handleclass84() {
    setClass1("main84");
  }
  function handleclass85() {
    setClass1("main85");
  }
  function handleclass86() {
    setClass1("main86");
  }
  function handleclass87() {
    setClass1("main87");
  }
  function handleclass88() {
    setClass1("main88");
  }
  function handleclass89() {
    setClass1("main89");
  }
  function handleclass90() {
    setClass1("main90");
  }
  function handleclass91() {
    setClass1("main91");
  }
  function handleclass92() {
    setClass1("main92");
  }
  function handleclass93() {
    setClass1("main93");
  }
  function handleclass94() {
    setClass1("main94");
  }
  function handleclass95() {
    setClass1("main95");
  }
  function handleclass96() {
    setClass1("main96");
  } 
  return (
    <>
      <Context.Provider
        value={{
          onClick: handleclick1,
          onClick1: handleclick2,
          onClick2: handleclick3,
          onClick3: handleclick4,
          onClick4: handlechange1,
          onClick5: handlechange2,
          onClick6: handlechange3,
          onClick7: handlechange4,
          onClick8: handleclick5,
          onClick9: handlechange5,
          onClick11: handleclass1,
          onClick12: handleclass2,
          onClick13: handleclass3,
          onClick14: handleclass4,
          onClick15: handleclass5,
          onClick16: handleclass6,
          onClick17: handleclass7,
          onClick18: handleclass8,
          onClick19: handleclass9,
          onClick20: handleclass10,
          onClick21: handleclass11,
          onClick22: handleclass12,
          onClick23: handleclass13,
          onClick24: handleclass14,
          onClick25: handleclass15,
          onClick26: handleclass16,
          onClick27: handleclass17,
          onClick28: handleclass18,
          onClick29: handleclass19,
          onClick30: handleclass20,
          onClick31: handleclass21,
          onClick32: handleclass22,
          onClick33: handleclass23,
          onClick34: handleclass24,
          onClick35: handleclass25,
          onClick36: handleclass26,
          onClick37: handleclass27,
          onClick38: handleclass28,
          onClick39: handleclass29,
          onClick40: handleclass30,
          onClick41: handleclass31,
          onClick42: handleclass32,
          onClick43: handleclass33,
          onClick44: handleclass34,
          onClick45: handleclass35,
          onClick46: handleclass36,
          onClick47: handleclass37,
          onClick48: handleclass38,
          onClick49: handleclass39,
          onClick50: handleclass40,
          onClick51: handleclass41,
          onClick52: handleclass42,
          onClick53: handleclass43,
          onClick54: handleclass44,
          onClick55: handleclass45,
          onClick56: handleclass46,
          onClick57: handleclass47,
          onClick58: handleclass48,
          onClick59: handleclass49,
          onClick60: handleclass50,
          onClick61: handleclass51,
          onClick62: handleclass52,
          onClick63: handleclass53,
          onClick64: handleclass54,
          onClick65: handleclass55,
          onClick66: handleclass56,
          onClick67: handleclass57,
          onClick68: handleclass58,
          onClick69: handleclass59,
          onClick70: handleclass60,
          onClick71: handleclass61,
          onClick72: handleclass62,
          onClick73: handleclass63,
          onClick74: handleclass64,
          onClick75: handleclass65,
          onClick76: handleclass66,
          onClick77: handleclass67,
          onClick78: handleclass68,
          onClick79: handleclass69,
          onClick80: handleclass70,
          onClick81: handleclass71,
          onClick82: handleclass72,
          onClick83: handleclass73,
          onClick84: handleclass74,
          onClick85: handleclass75,
          onClick86: handleclass76,
          onClick87: handleclass77,
          onClick88: handleclass78,
          onClick89: handleclass79,
          onClick90: handleclass80,
          onClick91: handleclass81,
          onClick92: handleclass82,
          onClick93: handleclass83,
          onClick94: handleclass84,
          onClick95: handleclass85,
          onClick96: handleclass86,
          onClick97: handleclass87,
          onClick98: handleclass88,
          onClick99: handleclass89,
          onClick100: handleclass90,
          onClick101: handleclass91,
          onClick102: handleclass92,
          onClick103: handleclass93,
          onClick104: handleclass94,
          onClick105: handleclass95,
          onClick106: handleclass96,
          onScroll: handlescroll,
          
        }}
      >
        <div className={pages} >
         <div className={scrolling.join(" ")}>
            <Menu />
            <div className="logo"></div>
          </div>

          {pages == "page1" && (
            <>
              <Cards />
              <Hero className={"hero"} title="غذاهای ایرانی" />
              <Hero className={"hero1"} title="غذاهای فست فودی" />
              <Hero className={"hero2"} title=" غذاهای خارجی" />
            </>
          )}
          {pages == "page2" && (
            <>
              <Iranianfood />
            </>
          )}
          {pages == "page3" && (
            <>
              <Fastfood />
            </>
          )}
          {pages == "page4" && (
            <>
              <Kharjifood />
            </>
          )}
          {pages == "page5" && (
            <>
              {class1 == "main1" && <Page5 />}
              {class1 == "main2" && <Page5 />}
              {class1 == "main3" && <Page5 />}
              {class1 == "main4" && <Page5 />}
              {class1 == "main5" && <Page5 />}
              {class1 == "main6" && <Page5 />}
              {class1 == "main7" && <Page5 />}
              {class1 == "main8" && <Page5 />}
              {class1 == "main9" && <Page5 />}
              {class1 == "main10" && <Page5 />}
              {class1 == "main11" && <Page5 />}
              {class1 == "main12" && <Page5 />}
              {class1 == "main13" && <Page5 />}
              {class1 == "main14" && <Page5 />}
              {class1 == "main15" && <Page5 />}
              {class1 == "main16" && <Page5 />}
              {class1 == "main17" && <Page5 />}
              {class1 == "main18" && <Page5 />}
              {class1 == "main19" && <Page5 />}
              {class1 == "main20" && <Page5 />}
              {class1 == "main21" && <Page5 />}
              {class1 == "main22" && <Page5 />}
              {class1 == "main23" && <Page5 />}
              {class1 == "main24" && <Page5 />}
              {class1 == "main25" && <Page5 />}
              {class1 == "main26" && <Page5 />}
              {class1 == "main27" && <Page5 />}
              {class1 == "main28" && <Page5 />}
              {class1 == "main29" && <Page5 />}
              {class1 == "main30" && <Page5 />}
              {class1 == "main31" && <Page5 />}
              {class1 == "main32" && <Page5 />}
              {class1 == "main33" && <Page5 />}
              {class1 == "main34" && <Page5 />}
              {class1 == "main35" && <Page5 />}
              {class1 == "main36" && <Page5 />}
              {class1 == "main37" && <Page5 />}
              {class1 == "main38" && <Page5 />}
              {class1 == "main39" && <Page5 />}
              {class1 == "main40" && <Page5 />}
              {class1 == "main41" && <Page5 />}
              {class1 == "main42" && <Page5 />}
              {class1 == "main43" && <Page5 />}
              {class1 == "main44" && <Page5 />}
              {class1 == "main45" && <Page5 />}
              {class1 == "main46" && <Page5 />}
              {class1 == "main47" && <Page5 />}
              {class1 == "main48" && <Page5 />}
              {class1 == "main49" && <Page5 />}
              {class1 == "main50" && <Page5 />}
              {class1 == "main51" && <Page5 />}
              {class1 == "main52" && <Page5 />}
              {class1 == "main53" && <Page5 />}
              {class1 == "main54" && <Page5 />}
              {class1 == "main55" && <Page5 />}
              {class1 == "main56" && <Page5 />}
              {class1 == "main57" && <Page5 />}
              {class1 == "main58" && <Page5 />}
              {class1 == "main59" && <Page5 />}
              {class1 == "main60" && <Page5 />}
              {class1 == "main61" && <Page5 />}
              {class1 == "main62" && <Page5 />}
              {class1 == "main63" && <Page5 />}
              {class1 == "main64" && <Page5 />}
              {class1 == "main65" && <Page5 />}
              {class1 == "main66" && <Page5 />}
              {class1 == "main67" && <Page5 />}
              {class1 == "main68" && <Page5 />}
              {class1 == "main69" && <Page5 />}
              {class1 == "main70" && <Page5 />}
              {class1 == "main71" && <Page5 />}
              {class1 == "main72" && <Page5 />}
              {class1 == "main73" && <Page5 />}
              {class1 == "main74" && <Page5 />}
              {class1 == "main75" && <Page5 />}
              {class1 == "main76" && <Page5 />}
              {class1 == "main77" && <Page5 />}
              {class1 == "main78" && <Page5 />}
              {class1 == "main79" && <Page5 />}
              {class1 == "main80" && <Page5 />}
              {class1 == "main81" && <Page5 />}
              {class1 == "main82" && <Page5 />}
              {class1 == "main83" && <Page5 />}
              {class1 == "main84" && <Page5 />}
              {class1 == "main85" && <Page5 />}
              {class1 == "main86" && <Page5 />}
              {class1 == "main87" && <Page5 />}
              {class1 == "main88" && <Page5 />}
              {class1 == "main89" && <Page5 />}
              {class1 == "main90" && <Page5 />}
              {class1 == "main91" && <Page5 />}
              {class1 == "main92" && <Page5 />}
              {class1 == "main93" && <Page5 />}
              {class1 == "main94" && <Page5 />}
              {class1 == "main95" && <Page5 />}
              {class1 == "main96" && <Page5 />}
            </>
          )}

          <Footer className={main} className1={cir} onClick={top} />
        </div>
      </Context.Provider>
    </>
  );
}

export default Header;
