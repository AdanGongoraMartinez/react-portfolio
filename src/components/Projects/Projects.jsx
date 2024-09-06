import React from "react";

import projects from "../../data/projects.json"

import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    return (
        <section>
            <h2>Proyectos</h2>

            <div>{
                projects.map((project,id) => {
                    return <ProjectCard key={id} project={project}/>
                })
            }</div>
        </section>
    )
};