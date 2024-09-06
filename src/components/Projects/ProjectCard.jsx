import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project : {title,imageSrc,description,skills,demo,source}}) => { //const project = props.project
    return (
        <div>
            <img 
                src={getImageUrl(imageSrc)} 
                alt={`Imagen de ${title}`} 
            />

            <h3>{title}</h3>

            <p>{description}</p>

            <ul>{
                skills.map((skill,id) => {
                    <li key={id}>{skill}</li>
                })
            }</ul>

            <div>
                <a href={demo}>Demo</a>
                <a href={source}>Fuente</a>
            </div>
        </div>
    )
};