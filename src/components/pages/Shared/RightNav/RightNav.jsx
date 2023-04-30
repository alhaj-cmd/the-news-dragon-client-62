import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import {FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter} from  "react-icons/fa";
import Qzoon from '../../Home/Qzoon';
import bg from "../../../../assets/bg.png"
// import bg2 from "../../../../assets/bg1.png"

const RightNav = () => {
    return (
        <div>
            <h2>Login with</h2>
            <Button className='mb-2' variant="outline-primary"><FaGoogle/> Login with google</Button>
      <Button variant="outline-secondary"><FaGithub/> Login with github</Button>
       <div>
        <h2>Find us on</h2>
        <ListGroup>
        <ListGroup.Item><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
      <ListGroup.Item><FaInstagram></FaInstagram>Instragram</ListGroup.Item>
      <ListGroup.Item><FaTwitter></FaTwitter>Twitter</ListGroup.Item>
        </ListGroup>
       </div>
       <Qzoon></Qzoon>
       <div>
        <img src={bg} alt="" />
        {/* <img src={bg2} alt="" /> */}
       </div>
        </div>
        
    );
};

export default RightNav;