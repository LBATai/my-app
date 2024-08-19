import React from 'react';
import ReactDOM from 'react-dom';
import './Exercise3.css';
import img from '../../assets/images/DAY_03/img.jpg';

function Exercise3() {
  const songs = [
    { title: "My Stress", artist: "NF Real music", duration: "3:22", liked: true, imageUrl: img },
    { title: "Mirage", artist: "Else Twin", duration: "4:23", liked: false, imageUrl: img },
    { title: "My Stress", artist: "NF Real music", duration: "3:58", liked: true, imageUrl: img },
    { title: "The Hills", artist: "The Weekend", duration: "5:33", liked: false, imageUrl: img },
    { title: "Paralyzed", artist: "NF Real music", duration: "5:08", liked: true, imageUrl: img },
    { title: "Timeless", artist: "Lucidious", duration: "3:50", liked: false, imageUrl: img },
  ];

  return (
    <div className="app-container">
      <div className="sidebar1">
        <h2>Most Popular</h2>
        <p>92 Songs</p>
        <div className="song-list">
          {songs.map((song, index) => (
            <div className="song-item" key={index}>
              <div className="song-info">
                <div className='number'>01</div>
                <img src={song.imageUrl} alt={song.title} className="song-image" />
                <div className="song-details">
                  <h4>{song.title}</h4>
                  <p>{song.artist}</p>
                </div>
              </div>
              <div className="song-meta">
                <span>{song.duration}</span>
                <span className="like-icon">{song.liked ? '❤️' : '🤍'}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    
        <div className="sidebar2">
            <h2>Now Playing</h2>
            <p>55 Items on the list</p>
            <div className='now-playing'>
                <div className="player">
                    <img src={img} alt="Current Song" className="player-image" />
                    <h3>Chance The Rapper</h3>
                    <p>Pop King</p>
                    <div className="controls">
                        <span>2:10</span>
                        <input type="range" className="progress-bar" />
                        <span>3:56</span>
                    </div>
                </div>
            </div>
       </div>
    </div>
  );
}

export default Exercise3;