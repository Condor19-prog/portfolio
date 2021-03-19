import React from "react";
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skil/Skill";
import Title from "../common/components/title/Title";
import react from '../assets/image/skills/physics.svg'
import js from '../assets/image/skills/javascript.svg'
import css from '../assets/image/skills/cascading-style-sheets.svg'
import sass from '../assets/image/skills/sass.svg'
import redux from '../assets/image/skills/icons8-redux.svg'
import ts from '../assets/image/skills/icons8-typescript.svg'
import html from '../assets/image/skills/html-5.svg'
import api from '../assets/image/skills/api.svg'
import tdd from '../assets/image/skills/development (1).svg'

type propsType = {
    title: string
}
const Skills: React.FC<propsType> = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title title={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JavaScript'} image={js}/>
                    <Skill title={'TypeScript'} image={ts}/>
                    <Skill title={'React'} image={react}/>
                    <Skill title={'Redux'} image={redux}/>
                    <Skill title={'CSS'} image={css}/>
                    <Skill title={'SCSS'} image={sass}/>
                    <Skill title={'HTML'} image={html}/>
                    <Skill title={'REST API'} image={api}/>
                    <Skill title={'TDD'} image={tdd}/>
                </div>
            </div>
        </div>
    )
}
export default Skills