import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Providers/AuthProviders';
import { FaUserCircle } from 'react-icons/fa';

const Navigation = () => {
    const {user} = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
           <Link to='/category/0'>Home</Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
           { user && <FaUserCircle style={{fontSize:"2rem"}} ></FaUserCircle>}
           
              {user ? <Button variant='secondary'>LogOut</Button> : <Link to='/login'><Button variant='secondary'>LogIn</Button></Link>}
            
          </Nav>
        </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default Navigation;