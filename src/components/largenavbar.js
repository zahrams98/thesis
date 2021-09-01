import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


class Largenavbar extends React.Component {
  render() {
    return (
      <div dir='rtl' style={{textAlign:'right'}}>
        <MDBFooter className="font-small pt-4 mt-4" dir='rtl'>
          <MDBContainer fluid className="text-center text-md-right">
            <MDBRow>
              
              <MDBCol md="4">
                <h5 className="footer-header" style={{marginRight:'40px'}}> پیوند های مرتبط</h5>
                <ul>
                  <li className="list-unstyled">
                    <a href="https://www.who.int/health-topics/coronavirus" target='_blank'>سازمان بهداشت جهانی (WHO)</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="http://health.behdasht.gov.ir/">معاونت بهداشت</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html"> مرکز کنترل و پیشگیری از بیماریها (CDC)</a>
                  </li>
                  <li className="list-unstyled">
                    <a href="http://medcare.behdasht.gov.ir/">معاونت درمان</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="5">
                <h5 className="footer-header">کلمات کلیدی: </h5>
                <div className="mapouter">
                  <div className="gmap_canvas">
                    <p>
                    کووید ۱۹، کرونا، ویروس، بهداشت، سلامت، واکسن، وزارت بهداشت، معاونت بهداشت، پیشگیری، درمان، پرهیز از سفر، در خانه بمانیم، ماسک بزنیم، فاصله اجتماعی، دست ها را بشوییم،
                  </p>
                    
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          
        </MDBFooter>
      </div>
    );
  }
}

export default Largenavbar;
