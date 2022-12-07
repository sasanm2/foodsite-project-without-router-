import  { Component,useContext, useEffect } from 'react';
import { useState } from 'react';
import "../mainpage/fastfood.css";
import Context from '../../context/context';


export default function Fastfood() {
  const context1 = useContext(Context);
  const task3 = localStorage.getItem('tasksss');
  const [main, setMain] = useState(task3);
  localStorage.setItem('tasksss',main);
  function handlechange1(){
    setMain("main1");
  }
  function handlechange2(){
    setMain("main2");
  }
  const kabab = context1.onClick8;
  const kabab1 = context1.onClick9;
  const classes68 = context1.onClick77;
  const classes69 = context1.onClick78;
  const classes70 = context1.onClick79;
  const classes71 = context1.onClick80;
  const classes72 = context1.onClick81;
  const classes73 = context1.onClick82;
  const classes74 = context1.onClick83;
  const classes75 = context1.onClick84;
  const classes76 = context1.onClick85;
  const classes77 = context1.onClick86;
  const classes78 = context1.onClick87;
  const classes79 = context1.onClick88;
  const classes80 = context1.onClick89;
  const classes81 = context1.onClick90;
  const classes82 = context1.onClick91;
  const classes83 = context1.onClick92;
  const classes84 = context1.onClick93;
  const classes85 = context1.onClick94;

  // useEffect(() => {
  //   const cards = document.querySelectorAll(".card11");
  //   const hight = window.innerHeight/1.1;
 
  //   cards[0].classList.add("showes");
  //   cards[1].classList.add("showes");
  //    if(main == "main1"){
  //   cards[2].classList.add("showes");
  //   cards[3].classList.add("showes");
  //   cards[4].classList.add("showes");
  //   cards[5].classList.add("showes");
  //   cards[6].classList.add("showes");
  //   cards[7].classList.add("showes");
  //    } 

  //   window.addEventListener("scroll", function (e) {
  //     cards.forEach((card) => {
  //       const topcard = card.getBoundingClientRect().top;
  //       if(hight > topcard){
  //         card.classList.add("showes");
  //       }else{
  //         card.classList.remove("showes");
  //       }
  //     });
  //   });
  // });
  return (
    <>
    <main className={main}>
        {(main == "main1")&&(<>
          <div className="cardr1 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes68} >
            <h3>طرز تهیه همبرگر مرغ به همراه فوت و فن‌های پخت</h3>
          </div>
          <div className="cardr2 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes69}>
            <h3>طرز تهیه چیز برگر به همراه فوت و فن‌های رستورانی</h3>
          </div>
          <div className="cardr3 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes70}>
            <h3>طرز تهیه پیتزا بادمجان ایتالیایی خوشمزه</h3>
          </div>
          <div className="cardr4 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes71}>
            <h3>طرز تهیه پیتزا مارگاریتا خوشمزه ایتالیایی</h3>
          </div>
          <div className="cardr5 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes72}>
            <h3>طرز تهیه شاورما مرغ به همراه سس + فوت و فن</h3>
          </div>
          <div className="cardr6 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes73}>
            <h3>طرز تهیه پیتزا گوشت و قارچ سبک رستورانی + فوت و فن</h3>
          </div>
          <div className="cardr7 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes74}>
            <h3>طرز تهیه سوسیس بندری اصل + روش سرو کردن</h3>
          </div>
          <div className="cardr8 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes75}>
            <h3>طرز تهیه فلافل ترد و خوشمزه + فوت و فن</h3>
          </div>
          <div className="cardr9 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes76}>
            <h3>طرز تهیه پیتزا مرغ و قارچ به همراه نکات مهم و کلیدی</h3>
          </div>
          <div className="cardr10 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes77}>
            <h3>طرز تهیه پیتزا هاوایی یا پیتزا آناناس به همراه فوت و فن‌ها</h3>
          </div>
          <div className="cardr11 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes78}>
            <h3>طرز تهیه پیتزا پپرونی خوشمزه به همراه فوت و فن‌ها</h3>
          </div>
          <div className="cardr12 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes79}>
            <h3>طرز تهیه پیتزا بدون فر (پیتزا تابه ای) به همراه فوت و فن‌ها</h3>
          </div>
          <div className="cardr13 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes80}>
            <h3>طرز تهیه پیتزا با نان تست فوری در فر یا بدون فر</h3>
          </div>
          <div className="cardr14 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes81}>
            <h3>طرز تهیه ساندویچ کتلت به سبک بازاری</h3>
          </div>
          <div className="cardr15 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes82}>
            <h3>طرز تهیه ساندویچ تن ماهی با سس مایونز و ذرت پخته</h3>
          </div>
          <div className="cardr16 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes83}>
            <h3>طرز تهیه ساندویچ ماکارونی به سبک رستورانی</h3>
          </div>
        </>)}
        {(main == "main2")&&(<>
          <div className="cardr17 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes84}>
            <h3>طرز تهیه هات داگ رستورانی به همراه فوت و فن ها</h3>
          </div>
          <div className="cardr18 card11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes85}>
            <h3>طرز تهیه پیتزا مخلوط خانگی به همراه فوت و فن ها</h3>
          </div>
        </>)}
          <div className="circle1" onClick={handlechange1}>1</div>
          <div className="circle2" onClick={handlechange2}>2</div>
    </main>
    </>
  )
}
