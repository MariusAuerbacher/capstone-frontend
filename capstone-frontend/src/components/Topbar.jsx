import React from "react";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,

} from "react-bootstrap";
import "../css/Topbar.css"
import { useDispatch } from "react-redux";
import { SET_ROLE, SET_USER } from "../redux/actions";




const Topbar = () => {

const dispatch = useDispatch()
const logoutHandler= () => {
  localStorage.removeItem("token")
  dispatch({
    type: SET_USER,
    payload: null
  })
  dispatch({
    type: SET_ROLE,
    payload: null
  })
}
  return (
    <>

      <Navbar  bg="primary" variant="dark" className="d-flex justify-content-center"  >
      <Nav>
      <Navbar.Brand  className="mx-3">Make a</Navbar.Brand>
      <NavDropdown title="One Time" id="basic-nav-dropdown" className="top-outline">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    
      <Navbar.Brand  className="mx-3">donation of</Navbar.Brand>
      <NavDropdown title="$ Amount" id="basic-nav-dropdown" className="top-outline">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>

      <Navbar.Brand className="mx-3">to</Navbar.Brand>
      <NavDropdown title="Where Needed Most" id="basic-nav-dropdown" className="top-outline">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <div className="mx-5">
<Button variant="outline-light" size="lg" className="ml-4 px-4">
         Donate
          </Button>
  <span className="px-4 ml-5">100% Donation Policy</span>
  </div>
      </Navbar>
     
      <div>
      <Navbar bg="light" variant="light" className="d-flex whole-brand">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Nav className="justify-content-between mr-auto">
          <Nav.Link href="#features">Appeals</Nav.Link>
          <Nav.Link href="#cards">Projects</Nav.Link>
          <Nav.Link href="#pricing">Ramadan</Nav.Link>
          <Nav.Link href="#pricing">Get Involved</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <Nav.Link href="#footer">Contact</Nav.Link>
        </Nav>
  
 
        <p> <a href="/login">Login </a> / <a href="/register"> Register</a>
        </p>
   
        <p onClick={logoutHandler}> Logout
        </p>
    
      </Navbar>
      
</div>

    </>
  );
};

export default Topbar;
