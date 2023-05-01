import React, { useContext } from 'react';
import logo from '../../../../assets/logo.png'
import moment from 'moment/moment';
import { Button, Container,  Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";




const Header = () => {

  

    return (
        <Container>
           <div className="text-center">
           <img src={logo} alt="" />
            <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
           </div>
         <div className='d-flex'>
            <Button variant='danger'>Latest</Button>
            <Marquee className='text-danger' speed={50}>
  I can be a React component, multiple React components, or just some text.
</Marquee>
         </div>
         <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
       {/* navigation file */}
       
      </Container>
    </Navbar>
        </Container>
    );
};

export default Header;