import React from 'react';
import './Basic_UI_1.css';
import img1 from '../../assets/images/DAY_02/Basic_UI/1.jpg';

function Basic_UI_1() {
    return (
        <div className='image'>
            <img src={img1} alt="img1" className="img1" />
            <div className='main'>
                <div className='ca'>Clothing & Apparel</div>
                <div className='components'>Accessories</div>
                <div className='components'>Bags</div>
                <div className='components'>Kid's Fashion</div>
                <div className='components'>Mens</div>
            </div>
        </div>
    );
}
export default Basic_UI_1;