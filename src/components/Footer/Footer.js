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
                  <MDBIcon fab icon="facebook-f" className='icons'/>
                </a>
                <a href="https://twitter.com/handlingpr28790" className='me-4 text-reset icons'>
                  <MDBIcon fab icon="twitter" className='icons' />
                </a>
                <a href="handlingprograming@gmail.com" className='me-4 text-reset icons'>
                  <MDBIcon fab icon="google" className='icons' />
                </a>

                <a href="https://www.linkedin.com/in/han-pro-70967b26a/" className='me-4 text-reset icons'>
                  <MDBIcon fab icon="linkedin" className='icons' />
                </a>
              <a href='https://maps.app.goo.gl/AxApGLnBd5nZqgjg8' className='me-4 text-reset'>
                  {/* <MDBIcon fab icon="instagram"  className='icons'/> */}
                  <MDBIcon fas icon="map-marker-alt" className='icons' />
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