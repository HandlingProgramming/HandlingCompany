
import "./Our_Project.css";
import { Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import hanSystem from '../../assets/Han System.jpg'
import possystem from '../../assets/POS System.jpg'
import ProductSystem from '../../assets/Product System.jpg'
import SHSSystem from '../../assets/SHS System.jpg'
function projects() {
  return (
    <Fragment>
        {/* <div className="col-md-4"  id='main_div'> */}
        <Container className="project_container">
        <Row>
        <Col>
            <Card  className='project_card' >
            <Card.Img  src={hanSystem}  />
            <Card.Body>
                {/* <Card.Title>Han System </Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text> */}
                <Button  href='/HanSystem' className="btn_moredetails">More details</Button>       
             </Card.Body>
            </Card>
            </Col>

            <Col>
            <Card className='project_card' >
            <Card.Img src={possystem} />
            <Card.Body>
                {/* <Card.Title>Handling System </Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text> */}
                <Button  href='/Pos' className="btn_moredetails">More details</Button>
            </Card.Body>
            </Card>
            </Col>


        </Row>
        <Row>
            <Col>
            <Card  className='project_card' >
            <Card.Img  src={SHSSystem} />
            <Card.Body>
                {/* <Card.Title>Product Tracking</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text> */}
                <Button  href='/SHSSales' className="btn_moredetails">More details</Button>       
             </Card.Body>
            </Card>
            </Col>


            <Col>
            <Card className='project_card'  >
            <Card.Img  src={ProductSystem} />
            <Card.Body>
                {/* <Card.Title>ProductTracking</Card.Title> */}
                {/* <Card.Text> */}
                {/* Soem quick example text to build on the card title and make up the
                bulk of the card's content. */}
                {/* </Card.Text>  */}
                <Button  href='/ProductTracking' className="btn_moredetails">More details</Button>  
            </Card.Body>
            </Card>
            </Col>
       </Row>


    {/* </div> */}
    </Container>
    </Fragment>
  );
}

export default projects;