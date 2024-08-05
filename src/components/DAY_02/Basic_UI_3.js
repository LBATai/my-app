import React from 'react';
import './Basic_UI_3.css';
import img3 from '../../assets/images/DAY_02/Basic_UI/3.jpg';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function Basic_UI_3() {
    return (
        <div className='image'>
            <img src={img3} alt="img3" className="img3" />
            <div className='main'>
                <div className='technology'>Teachnology</div>
                <div className='component1'>Harman Kadon Onyx Studio Mini,</div>
                <div className='component1'>Reviews & Experiences</div>
                <div className='component2'>
                    <div className='component2_1'>Feb 21, 2021 by</div>
                    <div className='component2_2'>dfurion</div>
                </div>
            </div>
        </div>
    );
}
export default Basic_UI_3;