import React, { useContext } from "react";
import { Nav, Navbar, NavbarBrand,Container } from "react-bootstrap";
import { FiPower } from "react-icons/fi"
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext"



const Header = () => {
  const {logout } = useContext(UserContext)

  const handlelogout = () => {
    logout()
  }

  return (
    <Navbar className="bg-primary nabar-expand">
      <Container>
        <NavbarBrand>TD4Y</NavbarBrand>
    <Nav>
      <Nav.Item>
        <Link to="/trainees" className="nav-link text-white">TRAINEES</Link>
      </Nav.Item>
       
        <>
      <Nav.Item>
        <Link to="/addtrainee" className="nav-link text-white">ADD</Link>
      </Nav.Item>
      <Nav.Item>
        <Link onClick={handlelogout} className="nav-link text-white"><FiPower/></Link>
      </Nav.Item>
      </>
      
        <>
     
      <Nav.Item>
        <Link to="/login" className="nav-link text-white">SIGN IN</Link>
      </Nav.Item>
      <Nav.Item>
        <Link to="/register" className="nav-link text-white">SIGN UP</Link>
      </Nav.Item>
      </>
       
    </Nav>
    </Container>
    </Navbar>
  );
}

export default Header;
