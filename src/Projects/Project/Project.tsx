import React from "react";
import style from './Project.module.css'

type projectType = {
    title: string
    description: string
    styled: any
}

const Project = (props: projectType) => {
    const {title, description} = props
    return (
        <div className={style.projectBlock}>
            <div className={style.imgContainer} style={props.styled}>
                <a className={style.viewBtn}>
                    View
                </a>
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