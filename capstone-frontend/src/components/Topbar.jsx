import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
 /* Button,
  NavDropdown,
  Form,*/

} from "react-bootstrap";
import "../css/Topbar.css"
import { useDispatch } from "react-redux";
import { SET_ROLE, SET_USER } from "../redux/actions/index.js";
import { Link, useNavigate } from "react-router-dom";
//import axios from "axios";




const Topbar = () => {
//const [amount, setAmount] = useState("")
//const[category, setCategory] = useState("")
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
const onUmmatiHandler = () => {
  navigate("/");
  
};
/*const donationHandler = async() => {
  const res = await axios.get("/beneficiaries/");
  console.log(res.data);
  const result =  res.data.filter((beneficiary)=>{
    if(beneficiary.category.toLowerCase().includes(category.toLowerCase())) return true
  })*/
  return (
    <>

 
     
      <div>
      <Navbar id="topbar"  className="d-flex whole-brand" sticky="top" >
        <button onClick={onUmmatiHandler} className="topbar-logo">Ummati</button>
        <Nav className="justify-content-between mr-auto">
        <NavDropdown id="dropdown-appeals" title="Projects" className="text-decoration-none topbar-dropdown-appeals">
        <NavDropdown.Item href="#action/3.1">Zakat</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Ramadan</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Sadaqah Jariyah</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Orphans</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Widows</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Crisis and Emergencies</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Agriculture and Wells</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Sponsor a Talib ul Ilm</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Al Muhajireen wal-Ansar</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Business Partnership</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/beneficiaries" className="topbar-text text-decoration-none">Appeals</Nav.Link>
          <Nav.Link href="#cards" className="topbar-text">Get Involved</Nav.Link>
          <Nav.Link href="#vision" className="topbar-text">About</Nav.Link>
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

{/*<Navbar  variant="dark" className="d-flex justify-content-center topbar-colour" sticky="top">
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
      {/*<NavDropdown title="$ Amount" id="basic-nav-dropdown" className="top-outline">
        <NavDropdown.Item href="#action/3.1">$ 10</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">$ 50</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">$100</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Own Amount</NavDropdown.Item>
  </NavDropdown>*/}

      {/*  <Form.Select value={amount} onChange={(e)=>{setAmount(e.target.value)}}>
          <option value="10">$10</option>
          <option value="20">$20</option>
          <option value="30">$30</option>
          <option value="40">$40</option>
          <option value="50">$50</option>
        </Form.Select>

      <Navbar.Brand className="mx-3">to</Navbar.Brand>
      {/*<NavDropdown title="Where Needed Most" id="basic-nav-dropdown" className="top-outline">
        <NavDropdown.Item href="#action/3.1">Medical</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Orphan</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Natural Disaster</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Choose another Category</NavDropdown.Item>
</NavDropdown>*/}
  {/*<Form.Select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
          <option >Medical</option>
          <option >Orphan</option>
          <option >Natural Disaster</option>
          <option >Widow</option>
        </Form.Select>
    </Nav>
    <div className="mx-5">
<Button variant="outline-light" size="lg" className="ml-4 px-4" /*onClick={donationHandler}*//*>
         Donate
          </Button>
  <span className="px-4 ml-5 topbar-policy">100% Donation Policy</span>
  </div>
      </Navbar>
    */}
    </>
  );
};

export default Topbar;
