import React from "react";
import Largenavbar from "../components/largenavbar";
import { Carousel } from 'react-bootstrap'


export default class Training extends React.Component {
  render() {
    return (
      <div className="about-header" dir='rtl' style={{ textAlign: 'right' }}>
        <div className="content">
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1  style={{fontWeight:'bold'}}> آموزش تصویری</h1>
            </div>
          </div>
          <div className='crusl' style={{ display: 'flex', alignItems: 'center',justifyContent:'center' }}>
          <Carousel>
            <Carousel.Item>
              <img src={"/assert/20.jpg"}  className="pc" width='45%' height='700px' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={"/assert/21.jpg"}  className="pc" width='45%' height='700px' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={"/assert/22.jpg"}  className="pc" width='45%' height='700px' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={"/assert/23.jpg"} className="pc" alt="RNS"  width='45%' height='700px' />

            </Carousel.Item>
            <Carousel.Item>
              <img
                width='45%' height='700px'
                src={"/assert/pa.png"}
                className="mobile"
                alt="RNS"
              />
            </Carousel.Item>
          </Carousel>
          </div>
        </div>
        <Largenavbar />
      </div>
    );
  }
}

