import './App.css';
import { Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
// import User from './components/User'
import Contact from './components/Contact'
import Technologies from './components/Technologies'
import Html from './components/Html'
import Javascript from './components/Javascript'
import {Navbar,Nav,Container} from 'react-bootstrap'
import React ,{useState} from 'react';

function App() {



  return (
    <div className=" App">

 <Navbar bg="dark" expand="lg"  variant="dark" >
        <Container className='nav-heads'>
          <Navbar.Brand href="#">Welcome User</Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
            <div className='ms-5 '>
            <div class="form-group row">
            <div className='col-sm-8'>
            <input type="file" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <div className='col-sm-4'>
            <button type='submit' className='btn btn-danger w-100' >Submit</button>
            </div>
 
    
  </div>
            </div>
             <Nav className="ms-auto">
              <Nav.Link href="/"  >Home</Nav.Link>
               {/* <Nav.Link href="user "  >User</Nav.Link> */}
             <Nav.Link href="technologies" >About Us</Nav.Link>
             <Nav.Link href="contact" >Signup/Login</Nav.Link>
              
             
              
            </Nav>
          </Navbar.Collapse>
       </Container>
      </Navbar>

       <Routes>
         <Route path="/" element={<Home />} />
         {/* <Route path="/user" element={<User />} /> */}
         <Route path="/contact" element={<Contact />} />
         <Route path="/technologies" element={<Technologies />} >
           <Route path="Html" element={<Html />} />
           <Route path="javascript" element={<Javascript />} />
         </Route>
      </Routes>
      
     
    </div>  
 
  )
}

export default App;



