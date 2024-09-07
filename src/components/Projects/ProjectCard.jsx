import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project : {title,imageSrc,description,skills,demo,source}}) => { //const project = props.project
    return (
        <div className={styles.container}>
            <img 
                src={getImageUrl(imageSrc)} 
                alt={`Imagen de ${title}`} 
                className={styles.image}
            />

            <h3 className={styles.title}>{title}</h3>

            <p className={styles.description}>{description}</p>

            <ul className={styles.skills}>
                {skills.map((skill,idSkill) => ( // ( instead of { to make it work
                    // implicit return for li
                    <li key={idSkill} className={styles.skill}>
                        {skill}
                    </li>
                ))}
            </ul>

            <div className={styles.links}>
                <a href={demo} className={styles.link}>Demo</a>
                <a href={source} className={styles.link}>Codigo</a>
            </div>
        </div>
    )
};