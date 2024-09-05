import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hola! Soy Adan</h1>
            <p className={styles.description}>Estudiante de Ingenieria Informatica</p>
            <a href="mailto:21890241@ittizimin.edu.mx" className={styles.contactBtn}>
                Contactame
            </a>
        </div>

        <img 
            src={getImageUrl("hero/heroImage.png")} 
            alt="Hero image of me" 
            className={styles.heroImg}
        />

        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    </section>
};