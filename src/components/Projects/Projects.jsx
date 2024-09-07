import React from "react";

import projects from "../../data/projects.json"

import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>Proyectos</h2>

            <div className={styles.projects}>
                {projects.map((project,id) => {
                    return (<ProjectCard key={id} project={project}/>)
                })}
            </div>
        </section>
    )
};