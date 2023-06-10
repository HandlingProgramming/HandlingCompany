// import React from "react";
import React, { Fragment } from "react";
import './Contact.css'
import emailjs from '@emailjs/browser';
import { ArrowRight } from 'react-bootstrap-icons';
import * as Icon from 'react-bootstrap-icons';
import Email from "./Email";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Contact =()=>{
    return(
        <Fragment>
            {/* <div className="bgcontact">  */}
           <Email/>
           {/* </div> */}
        </Fragment>
     );
}

export default Contact;


