import React from 'react';
import { motion } from 'framer-motion';
import './AboutSection.css';
import img from '../Assets/img/img-header.avif';

const AboutSection = () => {
    const variants = {
        visible: { opacity: 1, transition: { duration: 3, ease: "easeOut" } },
        hidden: { opacity: 0 },
    };

    return (
        <section className='Section-About-Section'>
            <div className='div-About-Section'>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={variants}
                >
                    <h2 className="section-title">Oque fazemos</h2>
                </motion.div>
                <div className="about-section">
                    <motion.div
                        className="column left"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={variants}
                    >
                        <p>
                            Em uma startup vibrante no coração do Vale do Silício, uma equipe de quatro desenvolvedores destaca-se por sua sinergia e inovação. Alex, o visionário, antecipa tendências tecnológicas futuras; Jordan, o arquiteto de sistemas, transforma visões em arquiteturas robustas; Charlie, o hacker criativo, encontra soluções inusitadas para problemas complexos; e Sam, o especialista em UX/UI, garante que os produtos sejam não apenas funcionais, mas intuitivos e agradáveis. Juntos, eles trabalham em um projeto revolucionário, mesclando habilidades técnicas com uma visão coletiva, prometendo não apenas transformar sua startup, mas definir o próximo grande marco na tecnologia.
                        </p>
                    </motion.div>
                    <motion.div
                        className="column right"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        variants={variants}
                    >
                        <img src={img} alt="Equipe de desenvolvedores trabalhando em um projeto inovador" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
