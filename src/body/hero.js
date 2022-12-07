import { Component,useContext } from "react";
import "./hero.css";
import { useState } from "react";
import { Image1, Image2, Image3 } from "./image";
import Context from "../context/context";

const num21 = Math.ceil(Math.random() * 66);
const num22 = Math.ceil(Math.random() * 66);
const num23 = Math.ceil(Math.random() * 66);
const num24 = Math.ceil(Math.random() * 18);
const num25 = Math.ceil(Math.random() * 18);
const num26 = Math.ceil(Math.random() * 18);
const num27 = Math.ceil(Math.random() * 8);
const num28 = Math.ceil(Math.random() * 8);
const num29 = Math.ceil(Math.random() * 8);


export default function Hero(props) {
  const context1 = useContext(Context); 
  const more = context1.onClick;
  const more1 = context1.onClick5;
  const more3 = context1.onClick6;
  const more5 = context1.onClick7;
  const more2 = context1.onClick2;
  const more4 = context1.onClick3;
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
  const classes86 = context1.onClick95;
  const classes87 = context1.onClick96;
  const classes88 = context1.onClick97;
  const classes89 = context1.onClick98;
  const classes90 = context1.onClick99;
  const classes91 = context1.onClick100;
  const classes92 = context1.onClick101;
  const classes93 = context1.onClick102;

  const classes = props.className;
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(true);
  const [show2, setShow2] = useState(true);

  const showes12 = [
    <div className="cardr1" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes2}>
      <h3>طرز تهیه کباب وزیری خوش طعم به سبک رستوران‌ها</h3>
    </div>,
    <div className="cardr2" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes3}>
      <h3>طرز تهیه مرصع پلو مجلسی به همراه فوت‌و‌فن‌ها</h3>
    </div>,
    <div className="cardr3" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes4}>
      <h3>طرز تهیه کشک بادمجان با گوشت مجلسی</h3>
    </div>,
    <div className="cardr4" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes5}>
      <h3>طرز تهیه دلمه فلفل دلمه ای به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr5" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes6}>
      <h3>طرز تهیه شوید پلو خوشمزه به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr6" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes7}>
      <h3>طرز تهیه گراتن سیب زمینی به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr7" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes8}>
      <h3>طرز تهیه باقالی پلو با ماهیچه به سبک رستورانی</h3>
    </div>,
    <div className="cardr8" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes9}>
      <h3>طرز تهیه قیمه بادمجان به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr9" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes10}>
      <h3>طرز تهیه کباب نگینی به همراه فوت و فن‌های پخت</h3>
    </div>,
    <div className="cardr10" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes11}>
      <h3>طرز تهیه تاس کباب (اصیل و ساده) + فوت و فن</h3>
    </div>,
    <div className="cardr11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes12}>
      <h3>طرز تهیه نرگسی اسفناج به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr12" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes13}>
      <h3>طرز تهیه پلو پیازچه با مرغ به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr13" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes14}>
      <h3>طرز تهیه رشته پلو به همراه کوفته ریزه و فوت و فن</h3>
    </div>,
    <div className="cardr14" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes15}>
      <h3>طرز تهیه زرشک پلو مجلسی به سبک رستورانی</h3>
    </div>,
    <div className="cardr15" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes16}>
      <h3>طرز تهیه آبگوشت سنتی به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr16" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes17}>
      <h3>طرز تهیه قلیه ماهی غذای معروف جنوبی‌ها</h3>
    </div>,
    <div className="cardr17" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes18}>
      <h3>طرز تهیه آبگوشت بادمجان غذای سنتی کرمانی‌ها</h3>
    </div>,
    <div className="cardr18" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes19}>
      <h3>طرز تهیه پوره سیب زمینی رستورانی + فوت و فن</h3>
    </div>,
    <div className="cardr19" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes20}>
      <h3>طرز تهیه ماکارونی دمی ایرانی خوشمزه به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr20" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes21}>
      <h3>طرز تهیه خورشت بامیه به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr21" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes22}>
      <h3>طرز تهیه خورشت آلو اسفناج به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr22" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes23}>
      <h3>طرز تهیه فسنجان با گوشت قلقلی به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr23" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes24}>
      <h3>طرز تهیه کباب تابه ای (دیگی) مجلسی و به سبک رستورانی</h3>
    </div>,
    <div className="cardr24" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes25}>
      <h3>طرز تهیه باقلاقاتق خوشمزه به سبک گیلانی</h3>
    </div>,
    <div className="cardr25" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes26}>
      <h3>طرز تهیه خورشت کدو به همراه فوت و فن پخت</h3>
    </div>,
    <div className="cardr26" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes27}>
      <h3>طرز تهیه کباب برگ به سبک رستورانی + فوت و فن</h3>
    </div>,
    <div className="cardr27" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes28}>
      <h3>طرز تهیه اشکنه سنتی با سیب زمینی، پیاز و شنبلیله</h3>
    </div>,
    <div className="cardr28" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes29}>
      <h3>طرز تهیه میرزا قاسمی با بادمجان کبابی به سبک گیلکی</h3>
    </div>,
    <div className="cardr29" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes30}>
      <h3>طرز تهیه جوجه کباب با روش‌های مزه دار کردن</h3>
    </div>,
    <div className="cardr30" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes31}>
      <h3>طرز تهیه کلم پلو به سبک شیرازی‌ها به همراه فوت‌و‌فن</h3>
    </div>,
    <div className="cardr31" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes32}>
      <h3>طرز تهیه قیمه نثار غذای سنتی قزوین</h3>
    </div>,
    <div className="cardr32" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes33}>
      <h3>طرز تهیه خورشت هویج به همراه فوت‌و‌فن‌ها</h3>
    </div>,
    <div className="cardr33" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes34}>
      <h3>طرز تهیه ته چین روی گاز به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr34" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes35}>
      <h3>طرز تهیه آبگوشت بزباش سنتی به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr35" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes36}>
      <h3>طرز تهیه پوره سیب زمینی در فر به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr36" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes37}>
      <h3>طرز تهیه خورشت ماست به سبک اصفهانی با فوت‌و‌فن‌ها</h3>
    </div>,
    <div className="cardr37" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes38}>
      <h3>طرز تهیه کوکو سیب زمینی به همراه فوت و فن‌های پخت</h3>
    </div>,
    <div className="cardr38" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes39}>
      <h3>طرز تهیه آبگوشت گیاهی (مخصوص گیاهخواران) + فوت و فن</h3>
    </div>,
    <div className="cardr39" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes40}>
      <h3>طرز تهیه دلمه برگ مو ملس به همراه فوت‌و‌فن‌ها</h3>
    </div>,
    <div className="cardr40" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes41}>
      <h3>طرز تهیه میگو پلو بوشهری به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr41" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes42}>
      <h3>طرز تهیه کباب حسینی با گوشت به همراه سس مخصوص</h3>
    </div>,
    <div className="cardr42" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes43}>
      <h3>طرز تهیه حلیم بادمجان مجلسی به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr43" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes44}>
      <h3>طرز تهیه کوکو لوبیا سبز به همراه نکات کلیدی</h3>
    </div>,
    <div className="cardr44" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes45}>
      <h3>طرز تهیه قورمه سبزی بدون گوشت ساده و خوشمزه</h3>
    </div>,
    <div className="cardr45" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes46}>
      <h3>طرز تهیه کوکو اشپل به همراه فوت و فن شمالی‌ها</h3>
    </div>,
    <div className="cardr46" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes47}>
      <h3>طرز تهیه کباب کوبیده به همراه فوت‌و‌فن‌ها</h3>
    </div>,
    <div className="cardr47" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes48}>
      <h3>طرز تهیه لوبیا پلو مجلسی به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr48" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes49}>
      <h3>طرز تهیه اکبر جوجه با سس مخصوص به سبک رستورانی</h3>
    </div>,
    <div className="cardr49" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes50}>
      <h3>طرز تهیه خورشت فسنجان با مرغ به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr50" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes51}>
      <h3>طرز تهیه بادمجان شکم پر مجلسی به همراه فوت و فن‌ها</h3>
    </div>,
    <div className="cardr51" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes52}>
      <h3>طرز تهیه املت قهوه خانه ای (به سبک سرآشپز)</h3>
    </div>,
    <div className="cardr52" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes53}>
      <h3>طرز تهیه املت تن ماهی در کمتر از 30 دقیقه!</h3>
    </div>,
    <div className="cardr53" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes54}>
      <h3>طرز تهیه املت سبزیجات سالم با فوت و فن</h3>
    </div>,
    <div className="cardr54" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes55}>
      <h3>طرز تهیه املت کالباس (غذایی سریع و خوشمزه)</h3>
    </div>,
    <div className="cardr55" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes56}>
      <h3>طرز تهیه کوکو سبزی پف دار + روش سرو کردن</h3>
    </div>,
    <div className="cardr56" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes57}>
      <h3>طرز تهیه کتلت مرغ خانگی با طعم فوق‌العاده</h3>
    </div>,
    <div className="cardr57" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes58}>
      <h3>طرز تهیه دلمه کلم به همراه تمام فوت و فن ها</h3>
    </div>,
    <div className="cardr58" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes59}>
      <h3>طرز تهیه سوسیس تخم مرغ قهوه خانه ای</h3>
    </div>,
    <div className="cardr59" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes60}>
      <h3>طرز تهیه خورشت کرفس جا افتاده و لعاب‌دار</h3>
    </div>,
    <div className="cardr60" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes61}>
      <h3>طرز تهیه عدس پلو با گوشت چرخ کرده به سبک رستورانی</h3>
    </div>,
    <div className="cardr61" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes62}>
      <h3>طرز تهیه نرگسی بادمجان غذای ساده و سریع</h3>
    </div>,
    <div className="cardr62" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes63}>
      <h3>طرز تهیه خوراک مرغ با قارچ و هویج به همراه فوت‌و‌فن‌ها</h3>
    </div>,
    <div className="cardr63" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes64}>
      <h3>طرز تهیه خوراک زبان گاو به همراه فوت‌و‌فن پخت</h3>
    </div>,
    <div className="cardr64" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes65}>
      <h3>طرز تهیه کتلت ترد و خوشمزه با سیب زمینی خام و پخته</h3>
    </div>,
    <div className="cardr65" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes66}>
      <h3>طرز تهیه کباب چنجه رستورانی بدون ماست و کیوی</h3>
    </div>,
    <div className="cardr66" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes67}>
      <h3>طرز تهیه استانبولی پلو (دمی گوجه‌فرنگی)</h3>
    </div>,
  ];
  const showes13 = [
      <div className="cardr1"  onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes68}>
        <h3>طرز تهیه همبرگر مرغ به همراه فوت و فن‌های پخت</h3>
      </div>,
      <div className="cardr2" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes69}>
        <h3>طرز تهیه چیز برگر به همراه فوت و فن‌های رستورانی</h3>
      </div>,
      <div className="cardr3" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes70}>
        <h3>طرز تهیه پیتزا بادمجان ایتالیایی خوشمزه</h3>
      </div>,
      <div className="cardr4" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes71}>
        <h3>طرز تهیه پیتزا مارگاریتا خوشمزه ایتالیایی</h3>
      </div>,
      <div className="cardr5" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes72}>
        <h3>طرز تهیه شاورما مرغ به همراه سس + فوت و فن</h3>
      </div>,
      <div className="cardr6" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes73}>
        <h3>طرز تهیه پیتزا گوشت و قارچ سبک رستورانی + فوت و فن</h3>
      </div>,
      <div className="cardr7" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes74}>
        <h3>طرز تهیه سوسیس بندری اصل + روش سرو کردن</h3>
      </div>,
      <div className="cardr8" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes75}>
        <h3>طرز تهیه فلافل ترد و خوشمزه + فوت و فن</h3>
      </div>,
      <div className="cardr9" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes76}>
        <h3>طرز تهیه پیتزا مرغ و قارچ به همراه نکات مهم و کلیدی</h3>
      </div>,
      <div className="cardr10" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes77}>
        <h3>طرز تهیه پیتزا هاوایی یا پیتزا آناناس به همراه فوت و فن‌ها</h3>
      </div>,
      <div className="cardr11" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes78}>
        <h3>طرز تهیه پیتزا پپرونی خوشمزه به همراه فوت و فن‌ها</h3>
      </div>,
      <div className="cardr12" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes79}>
        <h3>طرز تهیه پیتزا بدون فر (پیتزا تابه ای) به همراه فوت و فن‌ها</h3>
      </div>,
      <div className="cardr13" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes80}>
        <h3>طرز تهیه پیتزا با نان تست فوری در فر یا بدون فر</h3>
      </div>,
      <div className="cardr14" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes81}>
        <h3>طرز تهیه ساندویچ کتلت به سبک بازاری</h3>
      </div>,
      <div className="cardr15" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes82}>
        <h3>طرز تهیه ساندویچ تن ماهی با سس مایونز و ذرت پخته</h3>
      </div>,
      <div className="cardr16" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes83}>
        <h3>طرز تهیه ساندویچ ماکارونی به سبک رستورانی</h3>
      </div>,
      <div className="cardr17" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes84}>
        <h3>طرز تهیه هات داگ رستورانی به همراه فوت و فن ها</h3>
      </div>,
      <div className="cardr18" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes85}>
        <h3>طرز تهیه پیتزا مخلوط خانگی به همراه فوت و فن ها</h3>
      </div>,
  
  ];
  const showes14 = [
            <div className="cardr1" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes86}>
              <h3>طرز تهیه اسپاناکوپیتا یونانی به همراه فوت و فن‌ها</h3>
            </div>,
            <div className="cardr2" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes87}>
              <h3>طرز تهیه پیده گوشت ترکیه ای به همراه فوت و فن‌ها</h3>
            </div>,
            <div className="cardr3" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes88}>
              <h3>طرز تهیه خوراک جوجه چینی به سبک رستورانی</h3>
            </div>,
            <div className="cardr4" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes89}>
              <h3>طرز تهیه چیکن پارمزان ایتالیایی خوشمزه با سس مخصوص</h3>
            </div>,
            <div className="cardr5" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes90}>
              <h3>طرز تهیه پاستیتسیو یونانی کلاسیک + فوت و فن</h3>
            </div>,
            <div className="cardr6" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes91}>
              <h3>طرز تهیه کمپیر خوشمزه (سیب زمینی شکم پر ترکیه‌)</h3>
            </div>,
            <div className="cardr7" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes92}>
              <h3>طرز تهیه بیف استروگانف حرفه ای به سبک رستورانی</h3>
            </div>,
            <div className="cardr8" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes93}>
              <h3>طرز تهیه پاستا ساده با سس آلفردو + مرغ و قارچ</h3>
            </div>
  ];
  
  const card1 = showes12[num21 - 1];
  const card2 = showes12[num22 - 1];
  const card3 = showes12[num23 - 1];
  const card4 = showes13[num24 - 1];
  const card5 = showes13[num25 - 1];
  const card6 = showes13[num26 - 1];
  const card7 = showes14[num27 - 1];
  const card8 = showes14[num28 - 1];
  const card9 = showes14[num29 - 1];


  function addclass() {
    const one = setTimeout(function () {
      setShow(false);
    }, 0);
    const two = setTimeout(function () {
      setShow1(false);
    }, 25000);
    const three = setTimeout(function () {
      setShow2(false);
    }, 50000);
    const six = setTimeout(() => {
      setShow(true);
      setShow1(true);
      setShow2(true);
      clearTimeout(one);
      clearTimeout(two);
      clearTimeout(three);
    }, 75000);
  }

  if (show == true) {
    addclass();
  }

  return (
    <>
      <div className={classes}>
        <h2>{props.title}</h2>
        <div className="recpie">
          {classes == "hero" && (
            <>
              {card1}
              {card2}
              <div className="card33">{card3}</div>
            </>
          )}
          {classes == "hero1" && (
            <>
              {card4}
              {card5}
              <div className="card33">{card6}</div>
            </>
          )}
          {classes == "hero2" && (
            <>
              {card7}
              {card8}
              <div className="card33">{card9}</div>
            </>
          )}
          {classes == "hero" &&(<div className="more" onClick={more} onClickCapture={more1}>
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <h6>بیشتر</h6>
          </div>)}
          {classes == "hero1" &&(<div className="more" onClick={more2} onClickCapture={more3}>
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <h6>بیشتر</h6>
          </div>)}
          {classes == "hero2" &&(<div className="more" onClick={more4} onClickCapture={more5}>
            <span className="dot dot1"></span>
            <span className="dot dot2"></span>
            <span className="dot dot3"></span>
            <h6>بیشتر</h6>
          </div>)}
          <div className="picture">
            {classes == "hero" && (
              <Image1 onShow={show} onShow1={show1} onShow2={show2} />
            )}
            {classes == "hero1" && (
              <Image2 onShow={show} onShow1={show1} onShow2={show2} />
            )}
            {classes == "hero2" && (
              <Image3 onShow={show} onShow1={show1} onShow2={show2} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
