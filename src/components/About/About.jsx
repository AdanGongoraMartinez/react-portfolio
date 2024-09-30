import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>Acerca de</h2>
        <div className={styles.content}>
            {/* <img 
                src={getImageUrl("about/aboutImage.png")} 
                alt="Place holder img" 
                className={styles.aboutImage}
            /> */}

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/cursorIcon.png")} 
                        alt="cursor icon" 
                    />

                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Tengo experiencia creando interfaces web interactivas y funcionales utilizando HTML, CSS y JavaScript para desarrollar componentes visuales que brinden una excelente experiencia de usuario.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/serverIcon.png")} 
                        alt="cursor icon" 
                    />

                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Me dedico al desarrollo de la lógica del servidor y la gestión de bases de datos. Utilizo Node.js para construir servidores eficientes y escalables, integrando bases de datos para manejar la persistencia de datos. Estoy familiarizado con la creación de APIs, así como con la implementación de autenticación y medidas de seguridad.</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/uiIcon.png")} 
                        alt="cursor icon" 
                    />

                    <div className={styles.aboutItemText}>
                        <h3>UI Deseiner</h3>
                        <p>Como diseñador de interfaces, me especializo en crear experiencias de usuario atractivas y fáciles de usar. Considero tanto la estética como la funcionalidad al diseñar interfaces intuitivas que mejoren la interacción del usuario con las aplicaciones.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
};