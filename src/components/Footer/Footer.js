import React, { Fragment } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css'
import { IconName } from "react-icons/bs";

import elfayez from '../../assets/elfayez3.png'


export default function App() {
  return (
    <Fragment>

        <section className=' fixed="bottom" mainfooter'>

        <div class="row" className='text-center p-2' >
                  <div class="col-lg-12 col-sm-12 col-xs-12">

                      <p  className='footer_p'>  
                      {/* <MDBIcon fas icon="home" className='icons'/> */}
                       <img src={elfayez} className="elfayez"/>
                       تحت رعايه الفايز جروب
                       {/* <MDBIcon fab icon="whatsapp" className='icons' /> */}
                       </p>
                   </div>          
          </div> 

            <div class="row" className='text-center p-4' >
               <a href="https://www.facebook.com/profile.php?id=100090016143151" className='me-4 text-reset '>
                  <MDBIcon fab icon="facebook-f" className='icons' id="face_icon"/>
                </a>
                <a href="https://twitter.com/handlingpr28790" className='me-4 text-reset '>
                  <MDBIcon fab icon="twitter" className='icons' id="twitter_icon" />
                </a>
                {/* <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" className='me-4 text-reset icons'>
                  <MDBIcon fab icon="google" className='icons' id="gmail_icon"/>
                </a> */}

                <a href="https://www.linkedin.com/in/han-pro-70967b26a/" className='me-4 text-reset '>
                  <MDBIcon fab icon="linkedin" className='icons' id="linkedin_icon" />
                </a>
              <a href='https://maps.app.goo.gl/AxApGLnBd5nZqgjg8' className='me-4 text-reset'>
                  <MDBIcon fas icon="map-marker-alt" className='icons' id="location_icon" />
                </a>

                <a href='https://api.whatsapp.com/send/?phone=%2B201555341989&text&type=phone_number&app_absent=0' className='me-4 text-reset'>

                  <MDBIcon fab icon="whatsapp" className='icons'id="whatsapp_icon" />  
                </a>

                <a href='https://www.youtube.com/channel/UCviRVkh4-sodG40oJP3N04w' className='me-4 text-reset'>
                <MDBIcon fab icon="youtube" className='icons'id="youtube_icon" />
                </a>
          </div> 
          
            <div class="row" className='text-center p-2' >
                  <div class="col-lg-12 col-sm-12 col-xs-12">
                      <p class="copyright">Copyright © 2023 <a  className='footer_company_name' href="/Home">Handling Programming Company </a>.</p>
                   </div>          
          </div> 

</section>          

    </Fragment>
  );
}