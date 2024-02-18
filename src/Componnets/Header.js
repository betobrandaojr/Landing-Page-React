import React, { useState, useEffect } from 'react';
import './Header.css';
import VideoHeader from '../Assets/video/Video-3.mp4';
import { FaArrowDown } from 'react-icons/fa';

const items = ["Batata", "Cenoura", "Abacate"];

const Header = () => {
    const [currentItem, setCurrentItem] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const fadeEffect = setTimeout(() => {
            setFadeIn(false);
        }, 2000); 

        const changeItem = setTimeout(() => {
            setCurrentItem((currentItem + 1) % items.length);
            setFadeIn(true);
        }, 4000); 

        return () => {
            clearTimeout(fadeEffect);
            clearTimeout(changeItem);
        };
    }, [currentItem]);

    const scrollToNextComponent = () => {
        window.scrollTo({
            top: document.documentElement.clientHeight,
            behavior: 'smooth'
        });
    };

    return (
        <div className="header">
            <video autoPlay loop muted className="video-background">
                <source src={VideoHeader} type="video/mp4" />
            </video>
            <div className="text-container fade-in-on-load">
                <div className="static-text">Nesta empresa vendemos:</div>
                <div className={`dynamic-text ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                    {items[currentItem]}
                </div>
            </div>
            <button className="scroll-down-button fade-in-on-load" onClick={scrollToNextComponent}>
                <FaArrowDown />
            </button>
        </div>
    );
};

export default Header;
