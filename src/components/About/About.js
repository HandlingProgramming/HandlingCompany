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
                                    <p class="about-us-p">
                                    تحقيق اهدافك المهنية عن طريق خلق حلول جديدة لأغلب المشكلات التى تواجه رواد الأعمال وأصحاب الشركات فى مختلف الأسواق. كما تعمل الشركة على توفير أقصى سبل الراحة والسهولة فى التحكم بعلامتك التجارية بمجهود اقل وفى اسرع وقت . 
                                        </p>
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
                                <p>
                                نطمح إلى تحقيق التواجد بعلامة تجارية قوية والانتشار لأعمالك على أرض الواقع بجانب منصات التواصل الاجتماعى . وإدارة منصات السوشيال ميديا بخطط استراتيجية مدروسة وتصميمات جذابة تعبر عن هوية علامتك التجارية للانتقال لمستوى أخر من النجاح والتطور. 
                                    </p>
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

