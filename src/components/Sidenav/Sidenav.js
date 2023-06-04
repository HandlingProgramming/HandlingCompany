 import React, { Fragment } from "react";
 import './Sidenav.css'
import { Button } from "react-bootstrap";
import designlogo from '../../assets/designlogo.png'
import designtext from '../../assets/designtext.png'
 const Sidenav = ()=>{
    return(
        <Fragment>
             <div class="sidebar">
                    <div class="brand">
                        <p> 
                            <a href="https://www.facebook.com/handesignC/" target="_blank" class="facebook">
                            <img src={designlogo} className="designlogo"/>
                            </a>
                      
                            <a href="https://www.facebook.com/handesignC/" target="_blank" class="facebook">
                              <span><img src={designtext} className="designtext"/></span>
                            </a>
                        </p>
                    </div>
            </div>
        </Fragment>
    ) ;
}
 export default Sidenav;












