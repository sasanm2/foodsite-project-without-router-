import { Component, useContext, useEffect } from "react";
import { useState } from "react";
import "../mainpage/iranianfood.css";
import Context from "../../context/context";
import Hero from "../hero";

export default function Iranianfood() {
  const context1 = useContext(Context);

  const task2 = localStorage.getItem("taskss");
  const [main, setMain] = useState(task2);
  localStorage.setItem("taskss", main);

  const innerhight = window.innerHeight / 1.2;

  function handlechange1() {
    setMain("main1");
  }
  function handlechange2() {
    setMain("main2");
  }
  function handlechange3() {
    setMain("main3");
  }
  function handlechange4() {
    setMain("main4");
  }
  function handlechange5() {
    setMain("main5");
  }

  // useEffect(() => {
  //   const cards = document.querySelectorAll(".card12");
  //   const hight = window.innerHeight/1.1;

  //   console.log(cards)
    
  //   cards[0].classList.add("showes");
  //   cards[1].classList.add("showes");
  //   cards[2].classList.add("showes");
  //   cards[3].classList.add("showes");
  //   cards[4].classList.add("showes");
  //   cards[5].classList.add("showes");
  //   cards[6].classList.add("showes");
  //   cards[7].classList.add("showes");

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

  const kabab = context1.onClick8;
  const kabab1 = context1.onClick9;
  const classes2 = context1.onClick11;
  const classes3 = context1.onClick12;
  const classes4 = context1.onClick13;
  const classes5 = context1.onClick14;
  const classes6 = context1.onClick15;
  const classes7 = context1.onClick16;
  const classes8 = context1.onClick17;
  const classes9 = context1.onClick18;
  const classes10 = context1.onClick19;
  const classes11 = context1.onClick20;
  const classes12 = context1.onClick21;
  const classes13 = context1.onClick22;
  const classes14 = context1.onClick23;
  const classes15 = context1.onClick24;
  const classes16 = context1.onClick25;
  const classes17 = context1.onClick26;
  const classes18 = context1.onClick27;
  const classes19 = context1.onClick28;
  const classes20 = context1.onClick29;
  const classes21 = context1.onClick30;
  const classes22 = context1.onClick31;
  const classes23 = context1.onClick32;
  const classes24 = context1.onClick33;
  const classes25 = context1.onClick34;
  const classes26 = context1.onClick35;
  const classes27 = context1.onClick36;
  const classes28 = context1.onClick37;
  const classes29 = context1.onClick38;
  const classes30 = context1.onClick39;
  const classes31 = context1.onClick40;
  const classes32 = context1.onClick41;
  const classes33 = context1.onClick42;
  const classes34 = context1.onClick43;
  const classes35 = context1.onClick44;
  const classes36 = context1.onClick45;
  const classes37 = context1.onClick46;
  const classes38 = context1.onClick47;
  const classes39 = context1.onClick48;
  const classes40 = context1.onClick49;
  const classes41 = context1.onClick50;
  const classes42 = context1.onClick51;
  const classes43 = context1.onClick52;
  const classes44 = context1.onClick53;
  const classes45 = context1.onClick54;
  const classes46 = context1.onClick55;
  const classes47 = context1.onClick56;
  const classes48 = context1.onClick57;
  const classes49 = context1.onClick58;
  const classes50 = context1.onClick59;
  const classes51 = context1.onClick60;
  const classes52 = context1.onClick61;
  const classes53 = context1.onClick62;
  const classes54 = context1.onClick63;
  const classes55 = context1.onClick64;
  const classes56 = context1.onClick65;
  const classes57 = context1.onClick66;
  const classes58 = context1.onClick67;
  const classes59 = context1.onClick68;
  const classes60 = context1.onClick69;
  const classes61 = context1.onClick70;
  const classes62 = context1.onClick71;
  const classes63 = context1.onClick72;
  const classes64 = context1.onClick73;
  const classes65 = context1.onClick74;
  const classes66 = context1.onClick75;
  const classes67 = context1.onClick76;

  return (
    <>
      <main className={main}>
        {main == "main1" && (
          <>
            <div
              className="cardr1 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes2}
            >
              <h3>طرز تهیه کباب وزیری خوش طعم به سبک رستوران‌ها</h3>
            </div>
            <div
              className="cardr2 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes3}
            >
              <h3>طرز تهیه مرصع پلو مجلسی به همراه فوت‌و‌فن‌ها</h3>
            </div>
            <div
              className="cardr3 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes4}
            >
              <h3>طرز تهیه کشک بادمجان با گوشت مجلسی</h3>
            </div>
            <div
              className="cardr4 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes5}
            >
              <h3>طرز تهیه دلمه فلفل دلمه ای به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr5 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes6}
            >
              <h3>طرز تهیه شوید پلو خوشمزه به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr6 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes7}
            >
              <h3>طرز تهیه گراتن سیب زمینی به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr7 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes8}
            >
              <h2></h2>
              <h3>طرز تهیه باقالی پلو با ماهیچه به سبک رستورانی</h3>
            </div>
            <div
              className="cardr8 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes9}
            >
              <h3>طرز تهیه قیمه بادمجان به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr9 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes10}
            >
              <h3>طرز تهیه کباب نگینی به همراه فوت و فن‌های پخت</h3>
            </div>
            <div
              className="cardr10 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes11}
            >
              <h3>طرز تهیه تاس کباب (اصیل و ساده) + فوت و فن</h3>
            </div>
            <div
              className="cardr11 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes12}
            >
              <h3>طرز تهیه نرگسی اسفناج به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr12 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes13}
            >
              <h3>طرز تهیه پلو پیازچه با مرغ به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr13 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes14}
            >
              <h3>طرز تهیه رشته پلو به همراه کوفته ریزه و فوت و فن</h3>
            </div>
            <div
              className="cardr14 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes15}
            >
              <h3>طرز تهیه زرشک پلو مجلسی به سبک رستورانی</h3>
            </div>
            <div
              className="cardr15 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes16}
            >
              <h3>طرز تهیه آبگوشت سنتی به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr16 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes17}
            >
              <h3>طرز تهیه قلیه ماهی غذای معروف جنوبی‌ها</h3>
            </div>
          </>
        )}
        {main == "main2" && (
          <>
            <div
              className="cardr17 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes18}
            >
              <h3>طرز تهیه آبگوشت بادمجان غذای سنتی کرمانی‌ها</h3>
            </div>
            <div
              className="cardr18 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes19}
            >
              <h3>طرز تهیه پوره سیب زمینی رستورانی + فوت و فن</h3>
            </div>
            <div
              className="cardr19 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes20}
            >
              <h3>طرز تهیه ماکارونی دمی ایرانی خوشمزه به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr20 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes21}
            >
              <h3>طرز تهیه خورشت بامیه به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr21 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes22}
            >
              <h3>طرز تهیه خورشت آلو اسفناج به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr22 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes23}
            >
              <h3>طرز تهیه فسنجان با گوشت قلقلی به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr23 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes24}
            >
              <h3>طرز تهیه کباب تابه ای (دیگی) مجلسی و به سبک رستورانی</h3>
            </div>
            <div
              className="cardr24 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes25}
            >
              <h3>طرز تهیه باقلاقاتق خوشمزه به سبک گیلانی</h3>
            </div>
            <div
              className="cardr25 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes26}
            >
              <h3>طرز تهیه خورشت کدو به همراه فوت و فن پخت</h3>
            </div>
            <div
              className="cardr26 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes27}
            >
              <h3>طرز تهیه کباب برگ به سبک رستورانی + فوت و فن</h3>
            </div>
            <div
              className="cardr27 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes28}
            >
              <h3>طرز تهیه اشکنه سنتی با سیب زمینی، پیاز و شنبلیله</h3>
            </div>
            <div
              className="cardr28 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes29}
            >
              <h3>طرز تهیه میرزا قاسمی با بادمجان کبابی به سبک گیلکی</h3>
            </div>
            <div
              className="cardr29 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes30}
            >
              <h3>طرز تهیه جوجه کباب با روش‌های مزه دار کردن</h3>
            </div>
            <div
              className="cardr30 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes31}
            >
              <h3>طرز تهیه کلم پلو به سبک شیرازی‌ها به همراه فوت‌و‌فن</h3>
            </div>
            <div
              className="cardr31 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes32}
            >
              <h3>طرز تهیه قیمه نثار غذای سنتی قزوین</h3>
            </div>
            <div
              className="cardr32 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes33}
            >
              <h3>طرز تهیه خورشت هویج به همراه فوت‌و‌فن‌ها</h3>
            </div>
          </>
        )}
        {main == "main3" && (
          <>
            <div
              className="cardr33 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes34}
            >
              <h3>طرز تهیه ته چین روی گاز به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr34 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes35}
            >
              <h3>طرز تهیه آبگوشت بزباش سنتی به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr35 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes36}
            >
              <h3>طرز تهیه پوره سیب زمینی در فر به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr36 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes37}
            >
              <h3>طرز تهیه خورشت ماست به سبک اصفهانی با فوت‌و‌فن‌ها</h3>
            </div>
            <div
              className="cardr37 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes38}
            >
              <h3>طرز تهیه کوکو سیب زمینی به همراه فوت و فن‌های پخت</h3>
            </div>
            <div
              className="cardr38 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes39}
            >
              <h3>طرز تهیه آبگوشت گیاهی (مخصوص گیاهخواران) + فوت و فن</h3>
            </div>
            <div
              className="cardr39 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes40}
            >
              <h3>طرز تهیه دلمه برگ مو ملس به همراه فوت‌و‌فن‌ها</h3>
            </div>
            <div
              className="cardr40 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes41}
            >
              <h3>طرز تهیه میگو پلو بوشهری به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr41 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes42}
            >
              <h3>طرز تهیه کباب حسینی با گوشت به همراه سس مخصوص</h3>
            </div>
            <div
              className="cardr42 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes43}
            >
              <h3>طرز تهیه حلیم بادمجان مجلسی به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr43 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes44}
            >
              <h3>طرز تهیه کوکو لوبیا سبز به همراه نکات کلیدی</h3>
            </div>
            <div
              className="cardr44 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes45}
            >
              <h3>طرز تهیه قورمه سبزی بدون گوشت ساده و خوشمزه</h3>
            </div>
            <div
              className="cardr45 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes46}
            >
              <h3>طرز تهیه کوکو اشپل به همراه فوت و فن شمالی‌ها</h3>
            </div>
            <div
              className="cardr46 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes47}
            >
              <h3>طرز تهیه کباب کوبیده به همراه فوت‌و‌فن‌ها</h3>
            </div>
            <div
              className="cardr47 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes48}
            >
              <h3>طرز تهیه لوبیا پلو مجلسی به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr48 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes49}
            >
              <h3>طرز تهیه اکبر جوجه با سس مخصوص به سبک رستورانی</h3>
            </div>
          </>
        )}
        {main == "main4" && (
          <>
            <div
              className="cardr49 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes50}
            >
              <h3>طرز تهیه خورشت فسنجان با مرغ به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr50 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes51}
            >
              <h3>طرز تهیه بادمجان شکم پر مجلسی به همراه فوت و فن‌ها</h3>
            </div>
            <div
              className="cardr51 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes52}
            >
              <h3>طرز تهیه املت قهوه خانه ای (به سبک سرآشپز)</h3>
            </div>
            <div
              className="cardr52 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes53}
            >
              <h3>طرز تهیه املت تن ماهی در کمتر از 30 دقیقه!</h3>
            </div>
            <div
              className="cardr53 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes54}
            >
              <h3>طرز تهیه املت سبزیجات سالم با فوت و فن</h3>
            </div>
            <div
              className="cardr54 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes55}
            >
              <h3>طرز تهیه املت کالباس (غذایی سریع و خوشمزه)</h3>
            </div>
            <div
              className="cardr55 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes56}
            >
              <h3>طرز تهیه کوکو سبزی پف دار + روش سرو کردن</h3>
            </div>
            <div
              className="cardr56 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes57}
            >
              <h3>طرز تهیه کتلت مرغ خانگی با طعم فوق‌العاده</h3>
            </div>
            <div
              className="cardr57 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes58}
            >
              <h3>طرز تهیه دلمه کلم به همراه تمام فوت و فن ها</h3>
            </div>
            <div
              className="cardr58 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes59}
            >
              <h3>طرز تهیه سوسیس تخم مرغ قهوه خانه ای</h3>
            </div>
            <div
              className="cardr59 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes60}
            >
              <h3>طرز تهیه خورشت کرفس جا افتاده و لعاب‌دار</h3>
            </div>
            <div
              className="cardr60 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes61}
            >
              <h3>طرز تهیه عدس پلو با گوشت چرخ کرده به سبک رستورانی</h3>
            </div>
            <div
              className="cardr61 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes62}
            >
              <h3>طرز تهیه نرگسی بادمجان غذای ساده و سریع</h3>
            </div>
            <div
              className="cardr62 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes63}
            >
              <h3>طرز تهیه خوراک مرغ با قارچ و هویج به همراه فوت‌و‌فن‌ها</h3>
            </div>
            <div
              className="cardr63 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes64}
            >
              <h3>طرز تهیه خوراک زبان گاو به همراه فوت‌و‌فن پخت</h3>
            </div>
            <div
              className="cardr64 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes65}
            >
              <h3>طرز تهیه کتلت ترد و خوشمزه با سیب زمینی خام و پخته</h3>
            </div>
          </>
        )}
        {main == "main5" && (
          <>
            <div
              className="cardr65 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes66}
            >
              <h3>طرز تهیه کباب چنجه رستورانی بدون ماست و کیوی</h3>
            </div>
            <div
              className="cardr66 card12"
              onClick={kabab}
              onClickCapture={kabab1}
              onMouseDown={classes67}
            >
              <h3>طرز تهیه استانبولی پلو (دمی گوجه‌فرنگی)</h3>
            </div>
          </>
        )}
        <div className="circle1" onClick={handlechange1}>
          1
        </div>
        <div className="circle2" onClick={handlechange2}>
          2
        </div>
        <div className="circle3" onClick={handlechange3}>
          3
        </div>
        <div className="circle4" onClick={handlechange4}>
          4
        </div>
        <div className="circle5" onClick={handlechange5}>
          5
        </div>
      </main>
    </>
  );
}
