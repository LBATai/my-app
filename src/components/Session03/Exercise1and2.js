import React, { useState } from 'react';
import star from '../../assets/icon/star.png';
import like from '../../assets/icon/like.png';
import searchWhite from '../../assets/icon/searchWhite.png';
import setting from '../../assets/icon/setting.png';
import home from '../../assets/icon/home.png';
import camera from '../../assets/icon/camera.png';
import avatar from '../../assets/images/Session03/avatar.png';

const Exercise1and2 = () => {
    const [rating, setRating] = useState(0);
    const [liked, setLiked] = useState(false);

    const handleStarClick = (index) => {
        setRating(index + 1);
    };

    const handleLikeClick = () => {
        setLiked(!liked);
    };

    return (
        <div style={{ backgroundColor: '#e2e9ee', padding: 200 }}>
            <div style={{ width: 316, height: 204, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex' }}>
                <div style={{ alignSelf: 'stretch', padding: 24, background: 'linear-gradient(90deg, #8E2DE2 0%, #4A00E0 100%)', borderRadius: 20, overflow: 'hidden', justifyContent: 'center', alignItems: 'center', gap: 16, display: 'inline-flex' }}>
                    <button style={{ padding: 10, background: 'white', borderRadius: 100, display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: 20, height: 20 }} src={home} alt='Home'></img>
                    </button>
                    <button style={{ padding: 10, borderRadius: 100, display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: 20, height: 20 }} src={searchWhite} alt='Search'></img>
                    </button>
                    <button
                        style={{ padding: 10, borderRadius: 100, display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}
                        onClick={handleLikeClick}
                    >
                        <img
                            style={{
                                width: 20,
                                height: 20,
                                filter: liked ? 'invert(25%) sepia(99%) saturate(7484%) hue-rotate(350deg) brightness(90%) contrast(107%)' : 'none'
                            }}
                            src={like}
                            alt='Like'
                        ></img>
                    </button>
                    <button style={{ height: 40, padding: 10, borderRadius: 100, display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: 20, height: 20 }} src={camera} alt='Camera'></img>
                    </button>
                    <button style={{ padding: 10, borderRadius: 100, display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img style={{ width: 20, height: 20 }} src={setting} alt='Setting'></img>
                    </button>
                </div>
                <div style={{ alignSelf: 'stretch', padding: 24, background: 'white', borderRadius: 20, overflow: 'hidden', justifyContent: 'flex-start', alignItems: 'center', gap: 16, display: 'inline-flex', backgroundColor: '#fff' }}>
                    <img style={{ width: 52, height: 52, borderRadius: 50, border: '1px white solid' }} src={avatar} alt='' />
                    <div style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                        <div style={{ alignSelf: 'stretch', padding: 10, justifyContent: 'center', alignItems: 'flex-start', gap: 10, display: 'inline-flex' }}>
                            {[...Array(5)].map((_, index) => (
                                <img
                                    key={index}
                                    style={{
                                        width: 22.66,
                                        height: 21.87,
                                        cursor: 'pointer',
                                        filter: index < rating ? 'grayscale(0%)' : 'grayscale(100%)',
                                        filter: index < rating ? 'invert(64%) sepia(73%) saturate(749%) hue-rotate(320deg) brightness(102%) contrast(103%)' : ''
                                    }}
                                    src={star}
                                    alt={`Star ${index + 1}`}
                                    onClick={() => handleStarClick(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exercise1and2;
