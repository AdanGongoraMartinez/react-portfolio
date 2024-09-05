import React from "react";

import skills from "../../data/skills.json";
import history from "../../data/history.json";

//import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return <section id="Experience">
        <h2>Experiencia</h2>

        <div>{
            skills.map((skill, id) => {
                return <dir key={id}>
                    <div>
                        <img 
                            src={getImageUrl(skill.imageSrc)} 
                            alt={skill.title} 
                        />

                        <p>{skill.title}</p>
                    </div>
                </dir>
            })
        }</div>

        <ul>{
            history.map((historyItem, id) => {
                return <li key={id}>
                    <img 
                        src={getImageUrl(historyItem.imageSrc)} 
                        alt={`${historyItem.organisation} Logo`}
                    />

                    <div>
                        <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>

                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>

                        <ul>{historyItem.experiences.map((experiences, id) => {
                            return <li key={id}> {experiences} </li>
                        })}</ul>
                    </div>
                </li>
            })
        }</ul>
    </section>
};