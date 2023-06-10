// import React from "react";
import React, { Fragment } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./AllProject.css";
import { Button } from "react-bootstrap";
import hanSystem from '../../assets/Han System.jpg'
import whatsapp from '../../assets/whatsapp.png'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';


const ProductTracking = ()=>{
    return(
    <Fragment>
            <section className="MainTitle"> 
            <h1> </h1>
            </section>      




            <section className="MainTitle"> 
   
     
       
   <h1 className="proname"> <Button className="back_button" href="/Our_Project"><MDBIcon fas icon="arrow-circle-left" className="back_icon"/> </Button> PTS App </h1>
       <p  className="prodetiels">
       تطبيق تتبع المنتجات حيث يقوم بحصر وتصنيف كافة بيانات منتجاتك داخل المستودعات مما يتيح اعطاء تحكم كامل فى حركة سحب ،إضافة وجرد المنتجات بالإضافة للعديد من المزايا الاتيه :<br></br>
       التحكم الكامل : يعطى النظام كافة الصلاحيات الإدارية من حيث معرفة كمية وانواع المنتجات بالمخازن الرئيسية و عدد مندوبين المبيعات والإطلاع على كافة العمليات التى تتم من خلال المندوب والمخزن وإمكانية التحكم والتعديل فى إجراءات هذه العمليات.  المتابعة الفورية : متابعة عمليات سحب المخزون والأصناف التى تمت لها عملية البيع ، والاطلاع على فواتير البيع التى يحققها كل مندوب ومتابعة كمية المخزون الفعلى من وقت لاْخر.  سهولة الاستخدام : بضغطة زر واحدة يمكن تعديل اذن صرف المنتجات وتعديل كمية المنتجات المراد شحنها من المخزن الرئيسى إلى مندوب المبيعات . مرونة التشغيل : إرسال واستقبال اوامر التحميل والشحن ومتابعة كافة العمليات التشغيلية مما يوفر الوقت والمجهود المبذول سابقاً قبل استخدام التطبيق.  الحفظ الأمن للبيانات : يوفر التطبيق إمكانية الاحتفاظ بالفواتير والبيانات المسجلة من بدأ التشغيل ، كما يتيح حفظ البيانات فى حالة عدم وجود إتصال بالانترنت ويعطى النظام صلاحية الاطلاع على البيانات للمشرفين والمدراء والاشخاص محددين يتم إعطاء الصلاحية لهم من قبل المدير المسؤل. فواتير المبيعات : تتميز بشرح تفصيلى للمنتجات بكمياتها واسعارها ، بالإضافة لإمكانية وضع شعار  الشركة الخاص على الفاتورة ، بالإضافة لميزة الطباعة حيث تدعم جميع انواع الطابعات بكافة الاحجام الورقية المتاحة او إمكانية مشاركة الفاتورة على كافة وسائل التواصل الاجتماعى. قائمة العملاء والموردين : يوفر التطبيق قائمة خاصة بأسماء وعناوين العملاء/الموردين ، كما يتيح إمكانية البحث عن اسم العميل من خلال البحث الذكى. المشتريات : إنشاء فاتورة مشتريات مع ميزة الدفع كاش او اْجل على دفعات مع إمكانية وضع خصومات على الفاتورة. 
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
       <Card.Title>مرونه التشغيل</Card.Title>
       <Card.Text>
    إرسال واستقبال اوامر التحميل والشحن ومتابعة كافة العمليات التشغيلية والمجهود المبذول سابقاً قبل استخدام التطبيق.
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

export default ProductTracking;