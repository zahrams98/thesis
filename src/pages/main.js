import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from 'react-router-dom'
import Largenavbar from "../components/largenavbar";



export default class Index extends React.Component {

  render() {
    return (
      <div style={{
        width: '100%', display: 'flex', justifyContent: 'center',
        alignItems: 'center', flexDirection: 'column'
      }} >
        <div className="panel page-frame first-frame" id='vidiv'>
          <video autoPlay="autoplay" muted id='myVideo'>
            <source src={"/covid-19.mp4"} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div id="main_service" className="panel blue-bg second-frame " style={{
          display: 'flex',
          justifyContent: 'center', alignItems: 'center', width: '100%'
        }}>
          <div className="content" style={{
            width: '100%', height: '600px', display: 'flex',
            justifyContent: 'center', alignItems: 'center'
          }} >
            <div className="container">
              <Link style={{ textDecoration: 'none' }} to={{
                pathname: '/sick',
              }} >
                <h1 className="zasa"> چه کاری باید انجام دهید اگر احساس میکنید بیمار هستید</h1>
              </Link>
            </div>
          </div>
        </div>
        <div className="panel gray-bg second-frame demorighttext">
          <Row className="justify-content-md-center">
            <Col xs={5}>
              <img src={"/assert/protect.png"} className="pc" alt="protection" />
            </Col>
            <Col xs={5}>
              <div className="vertical-center" style={{ width: '100%' }} >
                <div className="righttext ">
                  <h3> چگونگی آمادگی و محافظت </h3>
                  <Link style={{ textDecoration: 'none', }} to={{
                    pathname: '/protection',
                  }}>
                    <button style={{ outline: 'none' }} type="button" className="button_in_medical_service">
                      مشاهده
                  </button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Link style={{ textDecoration: 'none', width: '100%' }} to={{
          pathname: '/Questions',
        }}>
          <div className="panel section3secondary">
            <h1 className="overflow-auto" > پرسش و پاسخ بیماری کووید-19 </h1>
          </div>
        </Link>
        <Largenavbar />
      </div>
    );
  }
}

