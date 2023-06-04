import React, { Fragment } from "react";
import "./Header.css";
import { Container, Row, Col } from "react-bootstrap";
// import header3 from '../../assets/header3.jpg'
import headerimg from "./../../assets/header.jpg"
import headerleft from "../../assets/headerleft.png"
const Header = ()=>{
    return(

<Fragment>

<img src={headerimg} className="imge"></img>

<Container className="HeaderContainer">
      <Row>
        <Col sm={6}> 
               <img src={headerleft} className="HeaderLeftImg" ></img> 
        </Col>
         {/* <Col>
             <div class="d-flex" className="headerline">
                 <div ></div>
            </div> 
        </Col> */}
        <Col sm={6}>
             <div className="home_det">
                     <h1 className="home_title"> 
                      رواد تقديم الخدمات الرقمية و تطوير البرامج و المواقع الالكترونية
                    </h1>
                    <p className="home_p"> تُعد شركتنا واحدة من أفضل الشركات الرائدة
                    في مجال تطوير وتصميم المواقع الإلكترونية  
                    في مصر والعالم العربي 

                    <div ><br></br></div>
                    ولدينا خبرات طويلة في  مجال التسويق الإلكتروني
                     وبرمجة التطبيقات وبرامج المحاسبه
                        والكاشير 
                     </p>
             </div> 
        </Col>
      </Row>
         </Container>
















        </Fragment>
    );
}

export default Header;