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
            <p>Experiencia en el desarrollo de interfaces web interactivas y funcionales con HTML, CSS y JavaScript, enfocadas en una óptima experiencia de usuario.</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img
            src={getImageUrl("about/serverIcon.png")}
            alt="cursor icon"
          />

          <div className={styles.aboutItemText}>
            <h3>Backend Developer</h3>
            <p>Desarrollo lógica de servidor y gestión de bases de datos en entornos GNU/Linux con Node.js, creando APIs y aplicando autenticación y seguridad para servidores escalables y eficientes.</p>
          </div>
        </li>
        <li className={styles.aboutItem}>
          <img
            src={getImageUrl("about/uiIcon.png")}
            alt="cursor icon"
          />

          <div className={styles.aboutItemText}>
            <h3>UI Deseiner</h3>
            <p>Como diseñador de interfaces, me enfoco en crear experiencias de usuario atractivas y funcionales, equilibrando estética y usabilidad para mejorar la interacción del usuario.</p>
          </div>
        </li>

        <li className={styles.aboutItem}>
          <img
            src={getImageUrl("about/idioma.png")}
            alt="cursor icon"
          />

          <div className={styles.aboutItemText}>
            <h3>Idiomas</h3>
            <p>Español - Nativo</p>
            <p>Inglés - Alto</p>
          </div>
        </li>
      </ul>
    </div>
  </section>
};
