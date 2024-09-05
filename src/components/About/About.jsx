import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return <section className={styles.container} id="about">
        <h2 className={styles.title}>Acerca de</h2>
        <div className={styles.content}>
            <img 
                src={getImageUrl("about/aboutImage.png")} 
                alt="Place holder img" 
                className={styles.aboutImage}
            />

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/cursorIcon.png")} 
                        alt="cursor icon" 
                    />

                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>Aun no lo soy xd</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/serverIcon.png")} 
                        alt="cursor icon" 
                    />

                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Aun no lo soy xd</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img 
                        src={getImageUrl("about/uiIcon.png")} 
                        alt="cursor icon" 
                    />

                    <div className={styles.aboutItemText}>
                        <h3>UI Deseiner</h3>
                        <p>Aun no lo soy xd</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
};