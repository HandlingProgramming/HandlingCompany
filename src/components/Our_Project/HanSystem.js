// import React from "react";
import React, { Fragment } from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./AllProject.css";
import hanSystem from '../../assets/Han System.jpg'
import Container from "react-bootstrap/esm/Container";
import Card from 'react-bootstrap/Card';

const HanSystem = ()=>{
    return(
        <Fragment>
            <section className="MainTitle"> 
            <h1 className="proname">Han System</h1>
                <p  className="prodetiels">
                      إذا كنت تريد برنامجًا يساعدك على إدارة محلاتك لجميع الأنشطة التجارية، فإن برنامج
                    الحسابات هو الخيار المثالي. بواسطته يمكنك إدارة حسابات المبيعات وحسابات العملاء
                    والموردين وحسابات المصارف بكل سهولة. يمكنك أيضًا الاطلاع على إحصائيات الأرباح
                    والخسائر وإدارة المشتريات والحصول على تقارير مفصلة. كما يمكنك معادلة المخزون
                    والاستفادة من نقاط البيع السريع لتحسين عمليات البيع. يمكنك طباعة الفواتير والتحكم في بيع
                    الجملة والتجزئة.
                    لا يتوقف دور البرنامج فقط على ذلك بل يمكنك إنشاء قاعدة بيانات العملاء والموردين
                    بسهولة. أيضًا، بإمكانك التحكم في صلاحيات المستخدمين، حيث يمكنك التحكم في نشاطات
                    السوبر ماركت، محلات الملابس، محلات الموبايلات والأحذية.
                    بالنظر إلى هذه الميزات المتعددة سوف تبني أفضل نظام تشغيل لتحسين الأداء التجاري الخاص بك         
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
            </section>               
       </Fragment>      
    );
}

export default HanSystem;