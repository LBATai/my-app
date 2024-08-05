import React from 'react';
import './Block_UI_6.css';
import img1 from '../../assets/images/DAY_02/block-ui-6-images/1.jpg';
import img2 from '../../assets/images/DAY_02/block-ui-6-images/2.jpg';
import img3 from '../../assets/images/DAY_02/block-ui-6-images/3.jpg';
import img4 from '../../assets/images/DAY_02/block-ui-6-images/4.jpg';
import cart from '../../assets/icon/cart.png';

function Block_UI_6() {
    return (
        <div className="grid-containerUI6"> 
            <div className="grid-item1UI6">
                <img src={img1} alt='img1' className='img1'></img>
                <div className='component1UI6'>
                    <div className='text1'>EODEM MODO TYPI</div>
                    <div className='text2'>Lorem ipsum dolor sit amet,</div>
                    <div className='text2'>consectetur adipiscing elit.</div>
                    <div className='text3'>XL/XXL/S</div>
                    <div className='text4'>$25</div>
                    <button><img src={cart} alt='cart' className='icon'></img>Add to cart</button>
                </div>
            </div>
            <div className="grid-item1UI6">
                <img src={img2} alt='img2' className='img1'></img>
                <div className='component1UI6 '>
                    <div className='text1'>SEQUITUR MATATIONEM</div>
                    <div className='text2'>Lorem ipsum dolor sit amet,</div>
                    <div className='text2'>consectetur adipiscing elit.</div>
                    <div className='text3'>XL/XXL/S</div>
                    <div className='text4'>$25</div>
                    <button><img src={cart} alt='cart' className='icon'></img>Add to cart</button>
                </div>
            </div>

            <div className="grid-item1UI6">
                <img src={img3} alt='img3' className='img1'></img>
                <div className='component1UI6 '>
                    <div className='text1'>CONSUETUDIUM LECTORUM.</div>
                    <div className='text2'>Lorem ipsum dolor sit amet,</div>
                    <div className='text2'>consectetur adipiscing elit.</div>
                    <div className='text3'>XL/XXL/S</div>
                    <div className='text4'>$25</div>
                    <button><img src={cart} alt='cart' className='icon'></img>Add to cart</button>
                </div>
            </div>
            <div className="grid-item1UI6">
                <img src={img4} alt='img4' className='img1'></img>
                <div className='component1UI6 '>
                    <div className='text1'>PARUM CLARAM</div>
                    <div className='text2'>Lorem ipsum dolor sit amet,</div>
                    <div className='text2'>consectetur adipiscing elit.</div>
                    <div className='text3'>XL/XXL/S</div>
                    <div className='component2UI6'>
                        <div className='text4UI6'>$25</div>
                        <div className='text5'>$75</div>
                    </div>
                    <button><img src={cart} alt='cart' className='icon'></img>Add to cart</button>
                </div>
            </div>

        </div>
    );
}

export default Block_UI_6;