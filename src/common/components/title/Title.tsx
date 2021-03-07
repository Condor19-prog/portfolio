import React from "react";
import style from './Title.module.scss'

type projectsType = {
    title: string
}

const Title: React.FC<projectsType> = ({title}) => {

    return (
        <div className={style.title}>
            <h2>{title}</h2>
        </div>
    )
}
export default Title