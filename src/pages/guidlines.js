import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import Largenavbar from "../components/largenavbar";

 export default class Guidlines extends React.Component {
  render() {
    return (
      <div dir='rtl' style={{ textAlign: 'right' }}>
        <Container fluid className="service_container">
          <CardDeck>
            <Card border="secondary">
              <Card.Body>
                <Card.Title>راهنماهای احاد جامعه</Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item>

                      <a href="http://corona.behdasht.gov.ir/files/site1/files/IP3-1.pdf" target='_blank'
                        style={{ textDecoration: 'none' }} >
                        <div className="download-button" >مسافرت </div>
                      </a>

                    </ListGroup.Item>
                    <ListGroup.Item>
                      <a href="http://corona.behdasht.gov.ir/files/site1/files/IP8-4.pdf" target='_blank'
                        style={{ textDecoration: 'none' }} >
                        <div className="download-button" >مراقبت در منزل از بیمار مشکوک </div>
                      </a>
                    </ListGroup.Item>
                    <ListGroup.Item> <a href="http://corona.behdasht.gov.ir/files/site1/files/S8-3.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > قرنطینه در منزل </div>
                    </a></ListGroup.Item>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/S9-3.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" >  زندگی با افراد مشکوک به بیماری </div>
                    </a>
                    </ListGroup.Item>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/%D9%85%D8%AF%DB%8C%D8%B1%DB%8C%D8%AA_%D8%A7%D8%B6%D8%B7%D8%B1%D8%A7%D8%A8_%DA%A9%D9%88%D8%AF%DA%A9%D8%A7%D9%86_%D8%AF%D8%B1_%D8%B4%D8%B1%D8%A7%DB%8C%D8%B7_%D9%BE%D8%A7%D9%86%D8%AF%D9%85%DB%8C_%DA%A9%D9%88%D9%88%DB%8C%D8%AF-19.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > مدیریت اضطراب کودکان </div>
                    </a>
                    </ListGroup.Item>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/%D8%A8%D9%87%D8%A8%D9%88%D8%AF_%D8%B1%D9%88%D8%A7%D8%A8%D8%B7_%D8%B5%D9%85%DB%8C%D9%85%D8%A7%D9%86%D9%87_%D8%A8%D8%A7_%DA%A9%D9%88%D8%AF%DA%A9%D8%A7%D9%86_%D8%AF%D8%B1_%D8%AF%D9%88%D8%B1%D8%A7%D9%86_%D9%82%D8%B1%D9%86%D8%B7%DB%8C%D9%86%D9%87_.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" >  		بهبود روابط با کودکان در دوران قرنطینه </div>
                    </a>
                    </ListGroup.Item>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/%D9%86%D8%AD%D9%88%D9%87_%D8%B5%D8%AD%DB%8C%D8%AD_%D8%A8%D8%B1%D8%AE%D9%88%D8%B1%D8%AF_%D8%A8%D8%A7_%D8%B4%D8%A7%DB%8C%D8%B9%D8%A7%D8%AA_%D8%AF%D8%B1_%D8%AE%D8%B5%D9%88%D8%B5_%D8%A8%DB%8C%D9%85%D8%A7%D8%B1%DB%8C_%DA%A9%D8%B1%D9%88%D9%86%D8%A7.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" >  برخورد صحیح با شایعات بیماری کرونا </div>
                    </a>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="secondary">
              <Card.Body>
                <Card.Title> راهنما های مشاغل </Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/banks.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > 	 بانک‌ها و مشاغل مالی </div>
                    </a></ListGroup.Item>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/bus.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > 	 اتوبوس و تردد شهری </div>
                    </a></ListGroup.Item>
                    <ListGroup.Item> <a href="http://corona.behdasht.gov.ir/files/site1/files/groceries.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" >	 فروشگاه‌های مواد غذایی </div>
                    </a></ListGroup.Item>
                    <ListGroup.Item> <a href="http://corona.behdasht.gov.ir/files/site1/files/busyjobs.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > مشاغل اداری و خدماتی  </div>
                    </a> </ListGroup.Item>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/taxi.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > تاکسی‌ و مسافربرها </div>
                    </a></ListGroup.Item>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/bakery.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > نانوایی </div>
                    </a></ListGroup.Item>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/mosque.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > 	 امکان متبرکه و زیارتگاه‌ها </div>
                    </a></ListGroup.Item>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/H6-4.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > 	 داروخانه‌ها </div>
                    </a></ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="secondary">
              <Card.Body>
                <Card.Title>راهنما‌های کارشناسان بهداشتی</Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item> <a href="http://corona.behdasht.gov.ir/files/site1/files/mental_health.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" >سلامت روان </div>
                    </a> </ListGroup.Item>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/nutrition_management.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > 	 مدیریت تغذیه </div>
                    </a></ListGroup.Item>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/hospital_environmental_health.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > 	 بهداشت محیط در بیمارستان‌ها </div>
                    </a></ListGroup.Item>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/icu_environmental_health.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > بهداشت محیط در بخش‌های ویژه </div>
                    </a></ListGroup.Item>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/healthcare_personnel.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > پیشگیری در پرسنل درمانی </div>
                    </a></ListGroup.Item>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/Covid-19_Treatment_Flowcharts.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > راهنمای تشخیص و درمان بیماری کووید۱۹  </div>
                    </a></ListGroup.Item>
                    <ListGroup.Item><a href="http://corona.behdasht.gov.ir/files/site1/files/Rahnema_WHOCorona2-1.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > مراقبت بیمار مشکوک با علائم خفیف </div>
                    </a></ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card border="secondary">
              <Card.Body>
                <Card.Title>راهنما های جهانی </Card.Title>
                <Card.Text>
                  <ListGroup>
                    <ListGroup.Item>
                    <a href="https://apps.who.int/iris/rest/bitstreams/1278777/retrieve" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > راهنمای سازمان بهداشت جهانی (WHO) </div>
                    </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <a href="https://www.cdc.gov/coronavirus/2019-ncov/hcp/clinical-guidance-management-patients.html" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > راهنمای (CDC)</div>
                    </a>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <a href="https://www.ohchr.org/Documents/Events/COVID-19_Guidance.pdf" target='_blank'
                      style={{ textDecoration: 'none' }} >
                      <div className="download-button" > راهنمای (OHCHR)</div>
                    </a>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Text>
              </Card.Body>
            </Card>
          </CardDeck>
        </Container>
        <Largenavbar />
      </div>
    );
  }
}

