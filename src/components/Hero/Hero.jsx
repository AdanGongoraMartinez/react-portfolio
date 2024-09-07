import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>¡Hola! Soy Adán</h1>
            <p className={styles.description}>Ingeniero Informático</p>
            <a href="mailto:21890241@ittizimin.edu.mx" className={styles.contactBtn}>
                Contáctame
            </a>
        </div>

        <img 
            src={getImageUrl("hero/profilePic.png")} 
            alt="Hero image of me" 
            className={styles.heroImg}
        />

        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
};