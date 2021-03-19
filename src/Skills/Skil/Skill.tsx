import React from "react";
import style from './Skill.module.scss'

type skillType = {
    title: string
    image: string
}

const Skill: React.FC<skillType> = ({title, image}) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3>{title}</h3>
            <img className={style.imgContainer} src={image} alt={'skill'}></img>
        </div>
    )
}
export default Skill