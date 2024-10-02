import React from "react";

import projects from "../../data/projects.json"

import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Proyectos</h2>
            <p className={styles.nota}>NOTA: Los proyectos web tardan un poco en abrir por que el servidor los suspende cuando no tienen actividad.</p>

            <div className={styles.projects}>
                {projects.map((project,id) => {
                    return (<ProjectCard key={id} project={project}/>)
                })}
            </div>
        </section>
    )
};