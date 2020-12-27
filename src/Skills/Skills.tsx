import React from "react";
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skil/Skill";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}/>
                    <Skill title={'React'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}/>
                    <Skill title={'CSS'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'}/>
                </div>
            </div>
        </div>
    )
}
export default Skills