import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Profile-Left.css';
import perfil1 from '../Assets/img/perfil-2.webp';

const variants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  hidden: { opacity: 0, y: 20 }, // Ajuste sutil na propriedade y para melhorar a fluidez
};

const Profile2 = () => {
  return (
    <section className="team-section-2" aria-label="Seção da equipe">
      <motion.div
        className="team-member-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
      >
        <img src={perfil1} alt="Alex" className="team-image-2" />
        <div className="member-info-2">
          <h3>Pedrinho</h3>
          <p>Tester</p>
          <p>Pedrinho é o farol que guia nossa equipe através das tempestades da inovação tecnológica. Com um olhar sempre voltado para o futuro, ele não apenas antecipa as próximas grandes tendências em tecnologia, mas também inspira a equipe a transcender os limites do possível. Seu entusiasmo por soluções revolucionárias é contagioso, alimentando nossa paixão coletiva por criar o inimaginável.</p>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="Perfil no LinkedIn de Alex">
            <FontAwesomeIcon icon={faLinkedin} className="fa-linkedin-team-2" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Profile2;
