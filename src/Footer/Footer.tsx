import React from "react";
import style from './Footer.module.css'
import styleContainer from '../common/styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Yauheni Auchynnikau</h2>
                <div className={style.footerSocialContainer}>
                    <a className={style.socialNetwork}></a>
                    <a className={style.socialNetwork}></a>
                    <a className={style.socialNetwork}></a>
                    <a className={style.socialNetwork}></a>
                </div>
                <p>только не по голове палкой)</p>
            </div>
        </div>
    )
}
export default Footer