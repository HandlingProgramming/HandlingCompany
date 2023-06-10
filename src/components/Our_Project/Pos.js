import React, { Fragment } from "react";
import "./AllProject.css";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hanSystem from '../../assets/Han System.jpg'
import whatsapp from '../../assets/whatsapp.png'
import { Button } from "react-bootstrap";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const Pos = ()=>{
    return(
     
       <Fragment>
        <section className="MainTitle"> 
   
     
       
            <h1 className="proname"> <Button className="back_button" href="/Our_Project"><MDBIcon fas icon="arrow-circle-left" className="back_icon"/> </Button> pos System </h1>
                <p  className="prodetiels">
                إن نظام كاشير هو أحد الأدوات التي يمكن أن تضيف قيمة كبيرة لمشروعك،
والجدير في هذا النظام هو أنه لا يتطلب معرفة مسبقة بالمحاسبة أو تقنيات
البرمجة، فالنظام يعمل على تبسيط عمليات البيع والشراء ، ويتضمن العديد من
المميزات التي ستوفر عليك الكثير من الوقت والجهد : يمكن من خلال هذا النظام إصدار الفواتير للعملاء بسهولة ووصول الدفعات بكل يسر، حيث يدعم النظام جميع طرق الدفع الشائعة من (نقدي، بنكي، أي طريقة دفع أخرى) ويمكنك الاستفادة من الميزة الرائعة لإضافة قوائم الأسعار الغير محدودة  وتخصيصها حسب العملاء والأصناف بسهولة وبسرعة. كما يتميز النظام بدعمه لنظام الباركود والوزن والسعر على المنتج، وتتيح هذه الميزة إمكانية تسجيل المنتجات باستخدام الباركود وبسرعة كبيرة. وأخيراً، يتيح لك النظام إعداد تقارير دقيقة وشاملة عن حسابات العملاء والمخازن والمبيعات، مما يجعله تطبيق مثالي ومفيد لمشروعك.  لا تتردد في التحول إلى نظام كاشير لجعل عملياتك التجارية أكثر سلاسة وسهولة        
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
            <Card style={{ width: '18rem' }} className="contact_card">
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

export default Pos;