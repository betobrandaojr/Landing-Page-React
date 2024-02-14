
import React from 'react';
import './Header.css'; 
import VideoHeader from '../Assets/video/Video-4.mp4'

const Header = () => {
    return (
        <div className="header">
            <video autoPlay loop muted className="video-background">
                <source src={VideoHeader} type="video/mp4" />
                
            </video>
        </div>
    );
};

export default Header;
