import React from 'react';
import { motion } from 'framer-motion';
import './WhoWeAre.css';

const WhoWeAre = () => {
    // Definição das variantes de animação
    const variants = {
        visible: { opacity: 1, transition: { duration: 3, ease: "easeOut" } },
        hidden: { opacity: 0 },
    };

    return (
        <div className="container-whoweare">
            <motion.div
                className="WhoWeAre-text"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={variants}
            >
                <h1 className='Title-WhoWeAre'>Titulo bem legal aqui</h1>
                <p>
                Em uma startup vibrante no coração do Vale do Silício, uma equipe de quatro desenvolvedores destaca-se por sua sinergia e inovação. Alex, o visionário, antecipa tendências tecnológicas futuras; Jordan, o arquiteto de sistemas, transforma visões em arquiteturas robustas; Charlie, o hacker criativo, encontra soluções inusitadas para problemas complexos; e Sam, o especialista em UX/UI, garante que os produtos sejam não apenas funcionais, mas intuitivos e agradáveis. Juntos, eles trabalham em um projeto revolucionário, mesclando habilidades técnicas com uma visão coletiva, prometendo não apenas transformar sua startup, mas definir o próximo grande marco na tecnologia.
                </p>
            </motion.div>
        </div>
    );
};

export default WhoWeAre;
