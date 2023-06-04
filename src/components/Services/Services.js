import React, { Fragment ,useState } from "react";
import './Services.css'
import img1 from '.././../assets/img1.jpg'
import ab from "./../../assets/moa.png"
import {Carousel} from 'react-bootstrap';
import slider1 from '../../assets/S1.jpg';
import slider2 from '../../assets/S2.jpg';
import slider3 from '../../assets/S3.jpg';
import slider4 from '../../assets/S4.jpg';
import slider5 from '../../assets/S5.jpg';
import Model1 from "./Model1";
const Services =()=>{
    return(
        <Fragment >
            {/* sliders */}
            {/* <section className="slider"> */}
                <Carousel className="main_sliders">
                        <Carousel.Item interval={2000}>
                            <img src={slider1}
                                className="d-block w-100"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>This is the first slide!</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                            </Carousel.Caption >
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src={slider2}
                                className="d-block w-100 "
                                alt="Second slide"
                        
                            />
                            <Carousel.Caption>
                                {/* <h3>Second slide label</h3> */}
                                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item >
                        <Carousel.Item interval={2000}>
                            <img src={slider3}
                                className="d-block w-100"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img src={slider4}
                                className="d-block w-100"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>Fourth slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item interval={2000}>
                            <img src={slider5}
                                className="d-block w-100"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                {/* <h3>Fourth slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
            {/* </section> */}



<Model1></Model1>

</Fragment>  
      
    );
}



export default Services;

