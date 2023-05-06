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
import { Link, useNavigate } from "react-router-dom";




const Topbar = () => {
const navigate = useNavigate();
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
  navigate("/")
}
  return (
    <>

 
     
      <div>
      <Navbar id="topbar" variant="light" className="d-flex whole-brand" sticky="top" >
        <Nav.Link to="/" className="topbar-logo">Ummati</Nav.Link>
        <Nav className="justify-content-between mr-auto">
          <Nav.Link to="/features" className="topbar-text text-decoration-none">Appeals</Nav.Link>
          <Nav.Link href="#cards" className="topbar-text text-decoration-none">Projects</Nav.Link>
          <Nav.Link href="#ramadan" className="topbar-text text-decoration-none">Ramadan</Nav.Link>
          <Nav.Link href="#involve" className="topbar-text">Get Involved</Nav.Link>
          <Nav.Link href="#about" className="topbar-text">About</Nav.Link>
          <Nav.Link href="#footer" className="topbar-text">Contact</Nav.Link>
        </Nav>
  
        <div>
          <Link to="/login"> <button className="topbar-lower-buttons">Login</button></Link>
          <Link to="/register">
        <button className="topbar-lower-buttons"> Register</button>
        </Link>
   
        <button onClick={logoutHandler} className="topbar-lower-buttons logout-button" > Logout
        </button>
        </div>
      </Navbar>
      
</div>

<Navbar  variant="dark" className="d-flex justify-content-center topbar-colour" sticky="top">
      <Nav>
      <Navbar.Brand  className="mx-3">Make a</Navbar.Brand>
      <NavDropdown title="One Time" id="basic-nav-dropdown" className="top-outline">
        <NavDropdown.Item href="#action/3.1">Weekly</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Monthly</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Yearly</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Adoption</NavDropdown.Item>
      </NavDropdown>
    
      <Navbar.Brand  className="mx-3">donation of</Navbar.Brand>
      <NavDropdown title="$ Amount" id="basic-nav-dropdown" className="top-outline">
        <NavDropdown.Item href="#action/3.1">$ 10</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">$ 50</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">$100</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Own Amount</NavDropdown.Item>
      </NavDropdown>

      <Navbar.Brand className="mx-3">to</Navbar.Brand>
      <NavDropdown title="Where Needed Most" id="basic-nav-dropdown" className="top-outline">
        <NavDropdown.Item href="#action/3.1">Medical</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Orphan</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Natural Disaster</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Choose another Category</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <div className="mx-5">
<Button variant="outline-light" size="lg" className="ml-4 px-4">
         Donate
          </Button>
  <span className="px-4 ml-5 topbar-policy">100% Donation Policy</span>
  </div>
      </Navbar>
    </>
  );
};

export default Topbar;
