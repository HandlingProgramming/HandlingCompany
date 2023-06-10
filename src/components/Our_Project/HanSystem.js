// import React from "react";
import React, { Fragment } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./AllProject.css";
import hanSystem from '../../assets/Han System.jpg'
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';
import whatsapp from '../../assets/whatsapp.png'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Button } from "react-bootstrap";

const HanSystem = ()=>{
    return(
        <Fragment>
            <section className="MainTitle"> 
            <h1 className="proname"> <Button className="back_button" href="/Our_Project"><MDBIcon fas icon="arrow-circle-left" className="back_icon"/> </Button>Han System</h1>

                <p  className="prodetiels">
                لتطوير أعمالك التجارية لا بد أن تتوفر على نظام متكامل لإدارتها بكفاءة، ويعد برنامج إدارة المخازن والحسابات والبيع نظاماً رئيسياً لكل من الشركات التجارية وتجارة الجملة. يتميز هذا النظام : بتصميم متطور وشكل جذاب، ويتمتع بسرعة في التواصل وسهولة في الاستخدام.  بالإضافة إلى إدارة مخازن وحسابات بدقة عالية وإدارة كاملة للمخزون. كما يتضمن النظام إحصائيات المخازن والمناديب، ونقاط البيع السريع وإمكانية إضافة مخزن بعدد غير محدود، بالإضافة إلى الدعم الفني على مدار الساعة. كما يتيح النظام تحويلات بين المخازن بصورة سريعة، وإضافة أكثر من مستخدم بالإضافة إلى التحكم في صلاحيات المستخدمين بكل سهولة.  برنامج حسابات متكامل يعمل بكفاءة مما يؤمن لعملك نمواً مستداماً.        
                 </p>  

            {/* <Container className="han11">
                <Row>
                    <Col>
                    <img src={hanSystem} className="imghan"/>
                    </Col>
                    <Col>
                    <h1>فاتورة خدمات</h1>
                    <p> nnnnnnnnnnnnnnnnnnnnnmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
                    </Col>
                </Row>
      
                </Container>

                <Container className="han11">
                <Row>
                    <Col>
                    <img src={hanSystem} className="imghan"/>
                    </Col>
                    <Col>
                    <h1>فاتورة مشتريات</h1>
                    <p> nnnnnnnnnnnnnnnnnnnnnmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
                    </Col>
                </Row>
      
                </Container> */}





                







<Container>
    <Row>
        <Col  className="main-card">
            <Card style={{ width: '18rem' }} className="contact_card">
            <Card.Img variant="top"   src={hanSystem} /> 
            <Card.Body>
                <Card.Title>فاتورة خدمات</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>

        <Col  className="main-card">
            <Card style={{ width: '18rem' }} className="contact_card">
            <Card.Img variant="top"   src={hanSystem} /> 
            <Card.Body>
                <Card.Title>فاتورة مشتريات</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        <Col  className="main-card">
            <Card style={{ width: '18rem' }} className="contact_card" >
            <Card.Img variant="top"   src={hanSystem} /> 
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>


    </Row>
    </Container>



     <p  className="projects_footer">
        
            لطلب النسخه التجريبيه تواصل معنا         <br></br>
            <a href='https://api.whatsapp.com/send/?phone=%2B201555341989&text&type=phone_number&app_absent=0' className='me-4 text-reset projects_phone'>
            {/* <MDBIcon fab icon="whatsapp-square" className="projects_footer_icon"> +201555341989</MDBIcon> */}
            <img src={whatsapp} className="project_whatsapp_icon"/> <span className="projects_phone">+201555341989</span>
            </a>
    </p>
            </section>               
       </Fragment>      
    );
}

export default HanSystem;