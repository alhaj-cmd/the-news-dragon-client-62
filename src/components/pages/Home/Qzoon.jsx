import React from 'react';
import Qzoon1 from '../../../assets/qZone1.png'
import Qzoon2 from '../../../assets/qZone2.png'
import Qzoon3 from '../../../assets/qZone3.png'

const Qzoon = () => {
    return (
        <div className='bg-secondary text-center py-4 my-4'>
            <h4>Q-zoon</h4>
            <div>
                <img src={Qzoon1} alt="" />
                <img src={Qzoon2} alt="" />
                <img src={Qzoon3} alt="" />
            </div>
        </div>
    );
};

export default Qzoon;