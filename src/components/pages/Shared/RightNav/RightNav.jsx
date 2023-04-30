import React from 'react';
import { Button } from 'react-bootstrap';
import {FaGoogle, FaGithub} from  "react-icons/fa";

const RightNav = () => {
    return (
        <div>
            <h2>Login with</h2>
            <Button className='mb-2' variant="outline-primary"><FaGoogle/> Login with google</Button>
      <Button variant="outline-secondary"><FaGithub/> Login with github</Button>
        </div>
    );
};

export default RightNav;