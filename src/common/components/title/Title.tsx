import React from "react";
import style from './Title.module.scss'
import {Fade} from "react-awesome-reveal";

type projectsType = {
    title: string
}

const Title: React.FC<projectsType> = ({title}) => {

    return (
        <Fade direction={'up'}>
        <div className={style.title}>
            <h2>{title}</h2>
        </div>
            </Fade>
    )
}
export default Title