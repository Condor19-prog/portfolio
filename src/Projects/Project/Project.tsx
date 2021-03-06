import React from "react";
import style from './Project.module.scss'

type projectType = {
    title: string
    description: string
    styled: any
    linkToGitHubPages: string
}

const Project = (props: projectType) => {
    const {title, description} = props
    return (
        <div className={style.projectBlock}>
            <div className={style.imgContainer} style={props.styled}>
                <div className={style.viewBtn}>
                    <a className={style.button} href={''}>
                        View
                    </a>
                </div>
            </div>
            <div className={style.footer}>
                <div className={style.title}>
                    {title}
                </div>
                <div className={style.description}>
                    {description}
                </div>
            </div>
        </div>
    )
}
export default Project