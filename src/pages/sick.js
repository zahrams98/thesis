import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {IoMdHome, IoMdBed} from "react-icons/io";
import {FaTemperatureHigh} from "react-icons/fa";
import Largenavbar from "../components/largenavbar";

export default class Sick extends React.Component {
  render() {

    return (
      <div className="termofuse-container"  style={{ textAlign: 'right' , overflow:'hidden'}} dir='rtl'>
        <Row className="justify-content-md-center">
          <Col xs="10">
            <h2>اگر بیمار هستید چه کاری باید انجام دهید</h2>
            <br />
            <h5>اگر تب ، سرفه یا علائم دیگری دارید ، ممکن است مبتلا به 
               کووید-19 باشید. بیشتر افراد به نوع خفیف بیماری مبتلا میشوند
                که تا حدی زیادی امکان بهبودی در خانه وجود دارد.
                 اگر فکر می کنید ممکن است در معرض بیماری قرار داشته باشید ، حتما با پزشک خود تماس بگیرید
               
               
               </h5>
            <br />
            <div className="sick"> 
            <ul>
            <li>علائم خود را به طور مداوم چک کنید</li>
            <li>اگر علائم هشداردهنده و اضطراری (از جمله مشکلات تنفسی) دارید ،
               فوراً به مراقبت های پزشکی و اورژانس مراجعه کنید
               </li>
            </ul>
            </div>
            <br />

            <h2>مراحلی برای جلوگیری از شیوع COVID-19 در صورت بیمار بودن شما</h2>
           <br />
           <div style={{display:'flex', alignItems: 'center'}}>
           <IoMdHome className="icon" size="50px" color='red' />
            <h4 style={{ marginTop:'15px'}}>اقامت در خانه به جز برای مراقبت های پزشکی</h4>
            </div>
            <ul>
              <li style={{fontWeight:'bold',margin:'10px'}}>در خانه بمانید، اکثر مبتلایان به کووید-19 نوع خفیف آن را دارند و بدون مراقبت پزشکی می توانند در خانه بهبود یابند.
                 خانه خود را ترک نکنید ، به جز برای مراقبت های پزشکی. از مناطق عمومی بازدید نکنید</li>
              <li style={{fontWeight:'bold',margin:'10px'}}>مراقب خودتان باشید. استراحت کنید و داروهای بدون نسخه مانند استامینوفن مصرف کنید تا به شما در بهتر شدن کمک کند</li>
              <li style={{fontWeight:'bold',margin:'10px'}}>قبل از مراجعه به پزشک ابتدا با او تماس بگیرید.
                 اگر در تنفس مشکلی دارید ، یا علائم  اضطراری دیگری دارید ، یا اگر فکر می کنید شرایط اورژانسی دارید ، حتماً باید تحت نظر باشید</li>
              <li  style={{fontWeight:'bold',margin:'10px'}}>از حمل و نقل عمومی و تاکسی خودداری کنید</li>
            </ul>
            <br />
            <div style={{display:'flex', alignItems: 'center'}}>
           <IoMdBed className="icon" size="50px" color='red' />
            <h4 style={{ marginTop:'15px'}}>خود را از افراد دیگر جدا کنید</h4>
            </div>
            <p style={{ fontWeight:'bold', margin:'10px'}}> تا حد امکان در یک اتاق خاص بمانید و 
              از سایر افراد و حیوانات خانگی در خانه خود دور شوید. 
              در صورت امکان ، باید از یک حمام جداگانه استفاده کنید. اگر نیاز دارید 
              که در نزدیکی افراد دیگر در داخل یا خارج از خانه باشید ، ماسک بپوشید.
            </p>
            <div style={{display:'flex', alignItems: 'center'}}>
           <FaTemperatureHigh className="icon" size="40px" color='red' />
            <h4 style={{ marginTop:'15px', marginRight:'7px'}}> علائم خود را چک کنید</h4>
            </div>
            <ul>
              <li style={{fontWeight:'bold',margin:'10px'}}>
              علائم کووید-19 شامل تب ، سرفه یا علائم دیگر است
              </li>
              <li style={{fontWeight:'bold',margin:'10px'}}>دستورالعمل های مراقبت و درمان
               را از ارائه دهنده مراقبت های بهداشتی 
              و بخش بهداشت محلی خود دنبال کنید. مقامات بهداشت 
              محلی شما ممکن است دستورالعمل هایی لازم را مبنی بر نحوه
                بررسی علائم و گزارش اطلاعات ارائه دهند
                </li>
              </ul>
            <br />
          </Col>
        </Row>
        <Largenavbar />
      </div>
    );
  }
}

