import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Team.css';
import perfil1 from '../Assets/img/perfil-1.jpg';
import perfil2 from '../Assets/img/perfil-2.webp';


const teamMembers = [
  {
    name: 'Alex',
    role: 'Visionário',
    description: 'Alex é o farol que guia nossa equipe através das tempestades da inovação tecnológica. Com um olhar sempre voltado para o futuro, ele não apenas antecipa as próximas grandes tendências em tecnologia, mas também inspira a equipe a transcender os limites do possível. Seu entusiasmo por soluções revolucionárias é contagioso, alimentando nossa paixão coletiva por criar o inimaginável.',
    image: perfil1,
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Jordan',
    role: 'Arquiteto de Sistemas',
    description: 'Jordan, com sua mente analítica e habilidade para resolver problemas complexos, é a força estabilizadora que transforma as visões ambiciosas de Alex em realidades tangíveis. Ele é um mestre na construção de arquiteturas robustas que não apenas atendem às necessidades atuais, mas são escaláveis para o futuro. Sua dedicação à excelência e atenção aos detalhes garantem que cada projeto seja construído sobre uma fundação sólida.',
    image: perfil2,
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Charlie',
    role: 'Hacker Criativo',
    description: 'Charlie é o coração criativo da equipe, sempre encontrando maneiras inovadoras de abordar desafios técnicos. Ele não conhece limites quando se trata de pensar fora da caixa, muitas vezes encontrando soluções onde outros veem barreiras. Sua habilidade para hackear problemas complexos com soluções elegantes e criativas é um dos principais motores de nossa capacidade de inovação.',
    image: perfil1,
    linkedin: 'https://www.linkedin.com',
  },
  {
    name: 'Sam',
    role: 'Especialista em UX/UI',
    description: 'Sam é o guardião da experiência do usuário, assegurando que nossos produtos não sejam apenas funcionais, mas intuitivamente desenhados para encantar. Sua obsessão por uma interface de usuário perfeita e uma experiência de usuário sem falhas orienta a equipe no desenvolvimento de produtos que os usuários adoram usar. A paixão de Sam por design e sua abordagem centrada no usuário são fundamentais para criar soluções que não apenas atendam, mas superem as expectativas dos usuários.',
    image: perfil2,
    linkedin: 'https://www.linkedin.com',
  },
];

const TeamSection = () => {
  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
    hidden: { opacity: 0, y: -20 },
  };

  return (
    <div className="team-section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
      >
        <h2 className="team-title">Integrantes</h2>
      </motion.div>
      {teamMembers.map((member, index) => (
        <motion.div
          className="team-member"
          key={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={variants}
        >
          <img src={member.image} alt={member.name} className="team-image" />
          <div className="member-info">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <p>{member.description}</p>
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="fa-linkedin" />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TeamSection;
