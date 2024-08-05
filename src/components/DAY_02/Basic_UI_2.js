import React from 'react';
import './Basic_UI_2.css';
import img2 from '../../assets/images/DAY_02/Basic_UI/2.jpg';

function Basic_UI_2() {
    return (
        <div className='image'>
            <img src={img2} alt="img2" className="img2" />
            <div className='main'>
                <div className='ca'>YOUNG SHOP</div>
                <hr/>
                <div className='component1'>Samsung UDH TV 24inch</div>
                <div class="star-rating">
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star-outline">☆</span>
                    <span className='rating'>02</span>
                </div>
                <div className='components'>$599</div>
            </div>
        </div>
    );
}
export default Basic_UI_2;