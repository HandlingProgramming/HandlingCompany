import React, { Fragment } from "react";
import {Navbar , Nav , NavLink } from 'react-bootstrap';
import './Navs.css';
import logo from './../../assets/logo2.png'
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';


import designlogo from '../../assets/designlogo.png'

 const Navs = ()=>{
    return(
    
<Fragment>

        <Navbar bg="light" expand="lg" fixed="top">
          <Container fluid>
          <NavLink eventKey="1" as={Link} to="/Home" > 
          <img src={logo} title="logo" className="logopng" eventKey="1" as={Link} to="/Home"></img>
          </NavLink>

         {/* <img src={logo} title="logo" className="logopng" eventKey="1" as={Link} to="/Home"></img> */}
            <Navbar.Toggle aria-controls="navbarScroll" className="toggle_nav" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
            <NavLink eventKey="1" as={Link} to="/Home" > Home</NavLink>
            <NavLink eventKey="2" as={Link} to="/Services" > Service</NavLink>
            <NavLink eventKey="3" as={Link} to="/Our_Project" > Our Project</NavLink>
           <NavLink eventKey="4" as={Link} to="/About" > About</NavLink>          
              </Nav>

              {/* <NavLink  className="d-flex"eventKey="1" as={Link} to="/Contact_Us" > contact</NavLink> */}

              {/* <Button variant="outline-success"  className="d-flex"eventKey="1" as={Link} to="/Contact_Us">han design</Button> */}

                <Button variant="outline-success"  className="d-flex"eventKey="1" as={Link} to="/Contact_Us">Contact</Button>
  
            </Navbar.Collapse>
          </Container>
        </Navbar>
 







        {/* <Nav className="col-md-12 d-none d-md-block bg-light sidebar "
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                Disabled
                </Nav.Link>
            </Nav.Item>
            </Nav> */}




        </Fragment>
        
      );
    }
    


export default Navs;