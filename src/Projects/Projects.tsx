import React from "react";
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../common/components/title/Title";
import socialNetwork from '../assets/image/socialNetwork.jpg'
import myTodolist from '../assets/image/todolists.png'

type projectsType = {
    title: string
}
const Projects: React.FC<projectsType> = ({title}) => {
    const social = {
        backgroundImage: `url(${socialNetwork})`
    }
    const todolist = {
        backgroundImage: `url(${myTodolist})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title title={'Projects'}/>
                <div className={style.projects}>
                    <Project
                        styled={social}
                        title={'Social-network'}
                        description={''}
                        linkToGitHubPages={'https://condor19-prog.github.io/socialNetwork'}
                    />
                    <Project
                        styled={todolist}
                        title={'Todolist'}
                        description={'Сервис позволяет организовать свои задачи в списки и контролировать их выполнение.'}
                        linkToGitHubPages={'https://condor19-prog.github.io/new-todolist/'}
                    />
                </div>
            </div>
        </div>
    )
}
export default Projects