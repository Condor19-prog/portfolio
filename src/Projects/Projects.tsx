import React from "react";
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../common/components/title/Title";
import socialNetwork from '../assets/image/projects/socialNetwork.jpg'
import myTodolist from '../assets/image/projects/todolists.png'
import myCounter from '../assets/image/projects/counter.png'

const Projects = () => {

    const social = {
        backgroundImage: `url(${socialNetwork})`
    }
    const todolist = {
        backgroundImage: `url(${myTodolist})`
    }
    const counter = {
        backgroundImage: `url(${myCounter})`
    }

    return (
        <div className={style.projectsBlock}>

            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                    <Title title={'Projects'}/>
                    <div className={style.projects}>
                        <Project
                            styled={social}
                            title={'Social-network'}
                            description={'RestAPI, React, Redux, TypeScript, Classes, Hooks, Redux-form, Axios, Grid, Module CSS'}
                            linkTo={'https://condor19-prog.github.io/social-network'}
                            linkToCode={'https://github.com/Condor19-prog/social-network'}
                        />
                        <Project
                            styled={todolist}
                            title={'Todolist'}
                            description={'React, Redux, TypeScript, RestAPI, Hooks, Axios, Material-UI'}
                            linkTo={'https://condor19-prog.github.io/new-todolist/'}
                            linkToCode={'https://github.com/Condor19-prog/new-todolist'}
                        />
                        <Project
                            styled={counter}
                            title={'Counter'}
                            description={'React, Redux, TypeScript, Hooks, Material-UI'}
                            linkTo={'https://condor19-prog.github.io/counter/'}
                            linkToCode={'https://github.com/Condor19-prog/counter'}
                        />
                    </div>

            </div>

        </div>
    )
}
export default Projects