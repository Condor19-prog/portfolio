import React from "react";
import style from './Nav.module.scss'
import {Fade} from "react-awesome-reveal";

const Nav = () => {
    return (
        <Fade direction={'up'}>
            <div className={style.nav}>
                <a className={style.link} href="">Home</a>
                <a className={style.link} href="">Skills</a>
                <a className={style.link} href="">Projects</a>
                <a className={style.link} href="">Contacts</a>
            </div>
        </Fade>
    )
}
export default Nav