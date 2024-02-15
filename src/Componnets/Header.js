import React, { useState, useEffect } from 'react';
import './Header.css'; // Certifique-se de que o caminho para o CSS está correto
import VideoHeader from '../Assets/video/Video-3.mp4';
import { FaArrowDown } from 'react-icons/fa'; // Garanta que o react-icons foi instalado

const items = ["Batata", "Cenoura", "Abacate"]; // Itens a serem exibidos

const Header = () => {
    const [currentItem, setCurrentItem] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const fadeEffect = setTimeout(() => {
            setFadeIn(false);
        }, 2000); // Inicia o fade out depois de 2 segundos

        const changeItem = setTimeout(() => {
            setCurrentItem((currentItem + 1) % items.length);
            setFadeIn(true);
        }, 4000); // Muda o item e inicia o fade in após 4 segundos

        return () => {
            clearTimeout(fadeEffect);
            clearTimeout(changeItem);
        };
    }, [currentItem]);

    const scrollToNextComponent = () => {
        window.scrollTo({
            top: document.documentElement.clientHeight, // Ajuste esse valor conforme necessário
            behavior: 'smooth'
        });
    };

    return (
        <div className="header">
            <video autoPlay loop muted className="video-background">
                <source src={VideoHeader} type="video/mp4" />
            </video>
            <div className="text-container fade-in-on-load"> {/* Aplica o fade in ao texto */}
                <div className="static-text">Nesta empresa vendemos:</div>
                <div className={`dynamic-text ${fadeIn ? 'fade-in' : 'fade-out'}`}>
                    {items[currentItem]}
                </div>
            </div>
            <button className="scroll-down-button fade-in-on-load" onClick={scrollToNextComponent}> {/* Aplica o fade in ao botão */}
                <FaArrowDown />
            </button>
        </div>
    );
};

export default Header;
