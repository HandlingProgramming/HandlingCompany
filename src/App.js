import './App.css';
import emailjs from 'emailjs-com';
import Home from './components/Home.js/Home';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';
import About  from './components/About/About';
import Sidenav from './components/Sidenav/Sidenav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
  Form
} from "react-router-dom";
import { Navbar } from 'react-bootstrap';
import Navs from './components/Navs.js/Navs';
import Our_project from './components/Our_Project/Our_project';
import Contact_Us from './components/Contact_Us/Contact';
import Pos from './components/Our_Project/Pos';
import HanSystem from './components/Our_Project/HanSystem'
import ProductTracking from './components/Our_Project/ProductTracking'
import SHSSales from './components/Our_Project/SHSSales'
function App() {

  const SendEmail = ()=>{
    var templateParams = {
      from_name: 'marina',
      to_name: 'handling',
      message : 'hello handling',
  };
  emailjs.send('service_i7gnobg','template_selw9ig', templateParams , 'AFqehjYq5uzNkvPod')
	.then((response) => {
	   console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
	   console.log('FAILED...', err);
	});

};


  return (
    

        <>


    <BrowserRouter>
    
    <Navs> </Navs> 
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
          <Route path='/Home' element={<Home></Home>}></Route>
          <Route path='/About' element={<About></About>}></Route>
          <Route path='/Our_Project' element={<Our_project></Our_project>}></Route>
          <Route path='/Services' element={<Services></Services>}></Route>
          <Route path='/Contact_Us' element={<Contact_Us></Contact_Us>}></Route>
          <Route path='/Pos' element={<Pos></Pos>}></Route>
          <Route path='/HanSystem' element={<HanSystem></HanSystem>}></Route>
          <Route path='/ProductTracking' element={<ProductTracking></ProductTracking>}></Route>
          <Route path='/SHSSales' element={<SHSSales></SHSSales>}></Route>
      </Routes>
      <Sidenav/>
      
      <Footer></Footer>
    </BrowserRouter>
 </>
  );
}

export default App;
