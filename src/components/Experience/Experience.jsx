import React from "react";

import skills from "../../data/skills.json";
import history from "../../data/history.json";

import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return <section className={styles.container} id="Experience">
        <h2 className={styles.title}>Experiencia</h2>

        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill, id) => {
                    return <dir key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img 
                                src={getImageUrl(skill.imageSrc)} 
                                alt={skill.title} 
                            />

                            <p>{skill.title}</p>
                        </div>
                    </dir>
                })
            }</div>

            <ul className={styles.history}>{
                history.map((historyItem, id) => {
                    return <li key={id} className={styles.historyItem}>
                        <img 
                            src={getImageUrl(historyItem.imageSrc)} 
                            alt={`${historyItem.organisation} Logo`}
                        />

                        <div className={styles.historyItemDetails}>
                            <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>

                            <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>

                            <ul>{historyItem.experiences.map((experiences, id) => {
                                return <li key={id}> {experiences} </li>
                            })}</ul>
                        </div>
                    </li>
                })
            }</ul>
        </div>
    </section>
};