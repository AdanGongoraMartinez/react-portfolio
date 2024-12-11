import React from "react";

import projects from "../../data/projects.json"

import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Proyectos</h2>
            <p className={styles.nota}>
                NOTA: Las aplicaciones pueden tardar en encender.
            </p>
            <p className={styles.nota}>
                NOTA: Debido a un error en el SGDB implementado en la nube, los proyectos están temporalmente inoperativos.
            </p>

            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return (<ProjectCard key={id} project={project} />)
                })}
            </div>
        </section>
    )
};
