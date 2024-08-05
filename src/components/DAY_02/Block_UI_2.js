import React from 'react';
import './Block_UI_2.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import html from '../..//assets/icon/Block_UI_2/html.png';
import css from '../..//assets/icon/Block_UI_2/css.png';
import php from '../..//assets/icon/Block_UI_2/php.png';
import java from '../..//assets/icon/Block_UI_2/java.png';
import net from '../..//assets/icon/Block_UI_2/net.png';

function Block_UI_2() {
    return (
            <div className='main'>
                <div className='components'>
                    <div className='component1'>
                        <img src={html} alt="html" className="imgHtml" />
                        <div className='html'>HTML</div>
                        <div class="percent-container1">
                            <div class="percent old-color1"></div>
                            <div class="percent new-color1"></div>
                        </div>
                    </div>
                    <div className='component1'>
                        <img src={css} alt="css" className="imgHtml" />
                        <div className='html'>CSS</div>
                        <div class="percent-container2">
                            <div class="percent old-color2"></div>
                            <div class="percent new-color2"></div>
                        </div>
                    </div>
                    <div className='component1'>
                        <img src={php} alt="php" className="imgHtml" />
                        <div className='html'>PHP</div>
                        <div class="percent-container3">
                            <div class="percent old-color3"></div>
                            <div class="percent new-color3"></div>
                        </div>
                    </div>
                    <div className='component1'>
                        <img src={java} alt="java" className="imgHtml" />
                        <div className='html'>Java</div>
                        <div class="percent-container4">
                            <div class="percent old-color4"></div>
                            <div class="percent new-color4"></div>
                        </div>
                    </div>
                    <div className='component1'>
                        <img src={net} alt="net" className="imgHtml" />
                        <div className='html'>.Net</div>
                        <div class="percent-container5">
                            <div class="percent old-color5"></div>
                            <div class="percent new-color5"></div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default Block_UI_2;