import React from "react";
import style from './Skill.module.css'

type skillType = {
title: string
    description: string
}

const Skill: React.FC<skillType> = ({title,description}) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{title}</h3>
            <span className={style.description}>{description}</span>
        </div>
    )
}
export default Skill