import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {IoMdMedical, IoIosPeople} from "react-icons/io";
import {GiGlowingHands, GiBallGlow} from "react-icons/gi";

import { fontsize } from "react-read-more-less";
import Largenavbar from "../components/largenavbar";

export default class Protection extends React.Component {
  render() {

    return (
      <div className="termofuse-container"  style={{ textAlign: 'right' , overflow:'hidden'}} dir='rtl'>
        <Row className="justify-content-md-center">
          <Col xs="10">
            <h2>چگونه از خود و دیگران محافظت کنید </h2>
            <br />
            
            <br />
                       <br />
           <div style={{display:'flex', alignItems: 'center'}}>
           <IoMdMedical className="icon" size="40px" color='red' />
            <h4 style={{ marginTop:'15px'}}>بدانید که چگونه گسترش می یابد</h4>
            </div>
            <ul>
              <li style={{fontWeight:'bold',margin:'10px'}}> در حال حاضر هیچ واکسنی برای جلوگیری از بیماری کروناویروس 2019 وجود ندارد </li>
              <li style={{fontWeight:'bold',margin:'10px' , fontSize:'1.2em'}}>بهترین راه برای پیشگیری از بیماری جلوگیری از قرار گرفتن در معرض این ویروس است</li>
              <li style={{fontWeight:'bold',margin:'10px'}}>تصور می شود که ویروس عمدتا از فردی به فرد دیگر انتقال یابد</li>
              <li  style={{fontWeight:'bold',margin:'10px'}}>بین افرادی که با یکدیگر ارتباط نزدیک دارند ( حدود دو متر)</li>
              <li style={{fontWeight:'bold',margin:'10px'}}>از طریق قطرات تنفسی که فرد آلوده سرفه، عطسه و یا صحبت می کند </li>

            </ul>
            <br />
            <div style={{display:'flex', alignItems: 'center'}}>
           <GiGlowingHands className="icon" size="50px" color='red' />
            <h4 style={{ marginTop:'15px'}}>دست هایتان را بشویید</h4>
            </div>
            <p style={{ fontWeight:'bold', margin:'10px'}}>
            دستان خود را حداقل به مدت 20 ثانیه با صابون و آب بشویید ،
             مخصوصاً بعد از اینکه در یک مکان عمومی قرار گرفتید ، یا بعد از سرفه و عطسه کردن. اگر آب و صابون در دسترس نبود از محلول الکل رقیق شده (حداقل 60درصد) استفاده کنید
            </p>
            <br />
            <h4> در موقعیت های زیر حتما دستان خود را بشویید</h4>
            <ul>
              <li style={{fontWeight:'bold',margin:'10px'}}>قبل از خوردن غذا و تهیه آن </li>
              <li style={{fontWeight:'bold',margin:'10px'}}>قبل از دست زدن به صورتتان </li>
              <li style={{fontWeight:'bold',margin:'10px'}}>بعد از ترک مکان های عمومی</li>
              <li  style={{fontWeight:'bold',margin:'10px'}}>بعد از دست زدن به حیوانات</li>
              <li style={{fontWeight:'bold',margin:'10px'}}>بعد از دست زدن به ماسک خود </li>

            </ul>
            <div style={{display:'flex', alignItems: 'center'}}>
           <IoIosPeople className="icon" size="40px" color='red' />
            <h4 style={{ marginTop:'15px', marginRight:'7px'}}> از تماس نزدیک خودداری کنید</h4>
            </div>
            <ul>
              <li style={{fontWeight:'bold',margin:'10px'}}>
              داخل خانه خود: از تماس نزدیک با افرادی که مریض هستند خودداری کنید.
              در صورت امکان ،2متر فاصله را بین فرد بیمار و سایر اعضای خانواده نگه دارید     
              </li>
              <li style={{fontWeight:'bold',margin:'10px'}}>خارج از خانه خود: 2متر فاصله بین خود و افرادی که در خانواده شما زندگی نمی کنند قرار دهید
                </li>
              </ul>
            <br />
            <div style={{display:'flex', alignItems: 'center'}}>
           <GiBallGlow className="icon" size="40px" color='red' />
            <h4 style={{ marginTop:'15px', marginRight:'7px'}}> سطوح را تمیز و ضدعفونی کنید</h4>
            </div>
            <Largenavbar />
          </Col>
        </Row>
        
      </div>
    );
  }
}

