import React from 'react';
import './Resume.css';
import img from '../../assets/images/DAY_03/img.jpg';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Resume = () => {
    return (
        <div className="resume">
            <div className="left-section">
                <div className="profile">
                    <img src={img} alt="Profile" />
                </div>
                <div className="contact">
                    <h2>CONTACT</h2>
                    <p><i className="fas fa-phone"></i> +1 654 645 55</p>
                    <p><i className="fas fa-map-marker-alt"></i> 4567 Street</p>
                    <p><i className="fas fa-envelope"></i> name@contact.com</p>
                </div>
                <div className="languages">
                    <h2>LANGUAGES</h2>
                    <div className="language-bar">
                        <span>English</span>
                        <div className="bar">
                            <div className="progress english"></div>
                        </div>
                    </div>
                    <div className="language-bar">
                        <span>Spanish</span>
                        <div className="bar">
                            <div className="progress spanish"></div>
                        </div>
                    </div>
                    <div className="language-bar">
                        <span>French</span>
                        <div className="bar">
                            <div className="progress french"></div>
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <h2>SKILLS</h2>
                    <div className="skill-bar">
                        <span>Photoshop</span>
                        <div className="bar">
                            <div className="progress photoshop"></div>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <span>Illustrator</span>
                        <div className="bar">
                            <div className="progress illustrator"></div>
                        </div>
                    </div>
                    <div className="skill-bar">
                        <span>InDesign</span>
                        <div className="bar">
                            <div className="progress indesign"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-section">
                <div className="header">
                    <h1>OLIVER <span>SMITH</span></h1>
                </div>
                <div className="about">
                    <h2>ABOUT ME</h2>
                    <p className='textSmall'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="education">
                    <h2>EDUCATION</h2>
                    <div className="education-item">
                        <div className='h3circle'>
                            <div className='circle'></div>
                            <h3>2010-2013</h3>
                        </div>
                        <p>Lorem Ipsum</p>
                        <p className='textSmall'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="education-item">
                        <div className='h3circle'>
                            <div className='circle'></div>
                            <h3>2013-2015</h3>
                        </div>
                        <p>Lorem Ipsum</p>
                        <p className='textSmall'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="education-item">
                        <div className='h3circle'>
                            <div className='circle'></div>
                            <h3>2015-2017</h3>
                        </div>
                        <p>Lorem Ipsum</p>
                        <p className='textSmall'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <div className="experience">
                    <h2>EXPERIENCE</h2>
                    <div className="experience-item">
                        <div className='h3circle'>
                            <div className='circle'></div>
                            <h3>2017-2018</h3>
                        </div>
                        <p>Lorem Ipsum</p>
                        <p className='textSmall'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="experience-item">
                        <div className='h3circle'>
                            <div className='circle'></div>
                            <h3>2018-2019</h3>
                        </div>
                        <p>Lorem Ipsum</p>
                        <p className='textSmall'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="experience-item">
                        <div className='h3circle'>
                            <div className='circle'></div>
                            <h3>2019-2020</h3>
                        </div>
                        <p>Lorem Ipsum</p>
                        <p className='textSmall'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
