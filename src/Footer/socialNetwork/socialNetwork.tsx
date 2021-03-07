import React from "react";
import style from '../Footer.module.scss'

type socialNetworkPropsType = {
    link: string
    image: string
}

const SocialNetwork = (props: socialNetworkPropsType) => {
    return (
        <div className={style.socialNetwork}>
            <a href={props.link}>
                <img src={props.image} alt="socialNetwork"/>
            </a>
        </div>
    )
}
export default SocialNetwork