import React from 'react';
import './Block_UI_3.css';
import facebook from '../../assets/images/DAY_02/block_ui_3/facebook.png';
import twitter from '../../assets/images/DAY_02/block_ui_3/twitter.png';
import google from '../../assets/images/DAY_02/block_ui_3/google.png';
import pinterest from '../../assets/images/DAY_02/block_ui_3/pinterest.png';

function Block_UI_3() {
    return (
        <div className="grid-containerUI3"> 
            <div className="grid-item1UI3">
                <img src={facebook} alt='fb' className='imgFb1'></img>
                <div className='text1'>Facebook</div>
                <div className='text2'>5,000,000 Likes</div>
            </div>
            <div className="grid-item2UI3">
                <img src={twitter} alt='fb' className='imgFb'></img>
                <div className='text1'>Twitter</div>
                <div className='text2'>40,000 Tweets</div>
            </div>
            <div className="grid-item3UI3">
                <img src={google} alt='fb' className='imgFb'></img>
                <div className='text1'>Google +</div>
                <div className='text2'>4,600,000 Plus</div>
            </div>
            <div className="grid-item4UI3">
                <img src={pinterest} alt='fb' className='imgFb'></img>
                <div className='text1'>Pinterest</div>
                <div className='text2'>34,000 Pins</div>
            </div>
        </div>
    );
}

export default Block_UI_3;