// import React from "react";
import React, { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./AllProject.css";

import hanSystem from '../../assets/Han System.jpg'


const ProductTracking = ()=>{
    return(
    <Fragment>
            <section className="MainTitle"> 
            <h1> </h1>
            </section>      




            <section className="MainTitle"> 
   
     
       
   <h1 className="proname">  PTS App:</h1>
       <p  className="prodetiels">
        تطبيق تتبع المنتجات حيث يقوم بحصر وتصنيف كافة بيانات منتجاتك داخل المستودعات مما يتيح إعطاء تحكم كامل فى حركة سحب ،إضافة وجرد المنتجات بالإضافة للعديد من المزايا الأتية :
        
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
</section>
         
                     
    </Fragment>        
    );
}

export default ProductTracking;