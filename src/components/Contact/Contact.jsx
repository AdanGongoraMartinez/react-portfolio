import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contacto</h2>
                <p>¡No dudes en enviarme un mensaje!</p>
            </div>
            
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img 
                        src={getImageUrl("contact/emailIcon.png")} 
                        alt="email icon" 
                    />

                    <a href="21890241@ittizimin.edu.mx">21890241@ittizimin.edu.mx</a>
                </li>

                <li className={styles.link}>
                    <img 
                        src={getImageUrl("contact/linkedinIcon.png")} 
                        alt="Linkedin Icon" 
                    />

                    <a href="linkedin">Linkedin</a>
                </li>

                <li className={styles.link}>
                    <img 
                        src={getImageUrl("contact/githubIcon.png")} 
                        alt="Github icon" 
                    />

                    <a href="https://github.com/AdanGongoraMartinez">Github</a>
                </li>
            </ul>
        </footer>
    )
};