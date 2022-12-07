import  { Component,useContext } from 'react';
import "../mainpage/kharjifood.css";
import Context from '../../context/context';


export default function Kharjifood() {
  const context1 = useContext(Context);

  const kabab = context1.onClick8;
  const kabab1 = context1.onClick9;
  const classes86 = context1.onClick95;
  const classes87 = context1.onClick96;
  const classes88 = context1.onClick97;
  const classes89 = context1.onClick98;
  const classes90 = context1.onClick99;
  const classes91 = context1.onClick100;
  const classes92 = context1.onClick101;
  const classes93 = context1.onClick102;
  return (
    <>
    <main>
          <div className="cardr1" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes86}>
            <h3>طرز تهیه اسپاناکوپیتا یونانی به همراه فوت و فن‌ها</h3>
          </div>
          <div className="cardr2" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes87}>
            <h3>طرز تهیه پیده گوشت ترکیه ای به همراه فوت و فن‌ها</h3>
          </div>
          <div className="cardr3" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes88}>
            <h3>طرز تهیه خوراک جوجه چینی به سبک رستورانی</h3>
          </div>
          <div className="cardr4" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes89}>
            <h3>طرز تهیه چیکن پارمزان ایتالیایی خوشمزه با سس مخصوص</h3>
          </div>
          <div className="cardr5" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes90}>
            <h3>طرز تهیه پاستیتسیو یونانی کلاسیک + فوت و فن</h3>
          </div>
          <div className="cardr6" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes91}>
            <h3>طرز تهیه کمپیر خوشمزه (سیب زمینی شکم پر ترکیه‌)</h3>
          </div>
          <div className="cardr7" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes92}>
            <h3>طرز تهیه بیف استروگانف حرفه ای به سبک رستورانی</h3>
          </div>
          <div className="cardr8" onClick={kabab}  onClickCapture={kabab1} onMouseDown={classes93}>
            <h3>طرز تهیه پاستا ساده با سس آلفردو + مرغ و قارچ</h3>
          </div>
    </main>
    </>
  )
}