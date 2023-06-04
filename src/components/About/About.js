import React, { Fragment } from "react";
import about from './About.css'
import { NavLink} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from './../../assets/logo2.png'

import handlingimg from '../../assets/abouthandling.jpg'
import handesignimg from '../../assets/abouthandesign.jpg'
// import f from "../../assets/f.jpg"
// import h from "../../assets/h.jpg"

import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const About =()=>{
    return(
        <Fragment>
                <section className="section_main_about ">
                     <div class="we-are-block">
                            <div id="about-us-section">
                                <div class="about-us-image">
                                    <img src={handlingimg} width="808" height="458" alt="Lobby Image"/>
                                </div>
                                <div class="about-us-info">
                                    <h2 className="about_main_title">Handling Programming Company </h2>
                                    <p class="about-us-p">Digital Upgrade, located in Evansville, IN, makes it easy for businesses to create and manage their digital presence and logistics, meaning we can make your business more efficient and profitable! We believe in our community and want to help our local business economy grow and expand. We believe in our clients, and want to assist in their digital success. The D-UP team grades ourselves on outcomes, not on sales.</p>
                                    {/* <a href="#" title="About Us Button">ABOUT US</a> */}

                                    <div class="row" className='text-center p-4' >
                                            <a href="https://www.facebook.com/profile.php?id=100090016143151" className='me-4 text-reset icons'>
                                                <MDBIcon fab icon="facebook-f" className='icons_about'/>
                                            </a>
                                            <a href="https://twitter.com/handlingpr28790" className='me-4 text-reset icons'> 
                                                <MDBIcon fab icon="twitter" className='icons_about' />
                                            </a>
                                            <a href="handlingprograming@gmail.com" className='me-4 text-reset icons'>
                                                <MDBIcon fab icon="google" className='icons_about' />
                                            </a>
                                            <a href='' className='me-4 text-reset'>
                                                <MDBIcon fab icon="instagram"  className='icons_about'/>
                                            </a>
                                            <a href="https://www.linkedin.com/in/han-pro-70967b26a/" className='me-4 text-reset icons'>
                                                <MDBIcon fab icon="linkedin" className='icons_about' />
                                            </a>
                                            {/* <a href='' className='me-4 text-reset icons'>
                                                <MDBIcon fab icon="github" className='icons_about' />
                                            </a>          */}
                                    </div> 
                                </div>
                            </div>
                            <div id="history-section">
                                <div class="history-image">
                                    <img src={handesignimg} width="951" height="471" alt="Building Pic"/>
                                </div>
                            <div class="history-info">
                                <h2>Han design</h2>
                                <p>In 2018, technology companies, Desktop Doctors & Digital Upgrade found a new place to call home, at 816 N. 9th Ave. Since the takeover of the 118-year-old building (formally Stippler Tool & Supply and Crown Chair Company), there have been many renovations completed to preserve this local piece of Evansville, IN history.</p>
                                {/* <button  class="btn11">See Our Projects <div></div> </button> */}
                                <div class="row" className='text-center p-4' >
                                        <a href="https://www.facebook.com/handesignC/" className='me-4 text-reset icons'>
                                            <MDBIcon fab icon="facebook-f" className='icons_about'/>
                                        </a>
                                        {/* <a href="https://twitter.com/handlingpr28790" className='me-4 text-reset icons'>
                                            <MDBIcon fab icon="twitter" className='icons_about' />
                                        </a>
                                        <a href="handlingprograming@gmail.com" className='me-4 text-reset icons'>
                                            <MDBIcon fab icon="google" className='icons_about' />
                                        </a>
                                        <a href='' className='me-4 text-reset'>
                                            <MDBIcon fab icon="instagram"  className='icons_about'/>
                                        </a>
                                        <a href="https://www.linkedin.com/in/han-pro-70967b26a/" className='me-4 text-reset icons'>
                                            <MDBIcon fab icon="linkedin" className='icons_about' />
                                        </a> */}
                                        {/* <a href='' className='me-4 text-reset icons'>
                                            <MDBIcon fab icon="github" className='icons_about' />
                                        </a>          */}
                                 </div> 
                            </div>
                            </div>
                        </div>
            </section>
        </Fragment>
    );
}

export default About;

