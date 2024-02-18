import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Profile-Right.css';
import perfil1 from '../Assets/img/perfil-4.jpg';

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  hidden: { opacity: 0, y: 20 },
};

const Profile1 = () => {
  return (
    <section className="team-section-1" aria-label="Seção da equipe">
      <div className="div-team-section-1" aria-label="Seção da equipe">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
        >
          <h1 className="team-title">Integrantes</h1>
        </motion.div>
        <motion.div
          className="team-member-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
        >
          <img src={perfil1} alt="Alex" className="team-image-1" />
          <div className="member-info-1">
            <h2>Alex</h2>
            <p>Visionário</p>
            <p>Alex é o farol que guia nossa equipe através das tempestades da inovação tecnológica. Com um olhar sempre voltado para o futuro, ele não apenas antecipa as próximas grandes tendências em tecnologia, mas também inspira a equipe a transcender os limites do possível. Seu entusiasmo por soluções revolucionárias é contagioso, alimentando nossa paixão coletiva por criar o inimaginável.</p>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Perfil no LinkedIn de Alex">
              <FontAwesomeIcon icon={faLinkedin} className="fa-linkedin-team-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile1;
