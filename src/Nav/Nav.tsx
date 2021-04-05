import React from "react";
import style from './Nav.module.scss'

const Nav = () => {
    return (
            <div className={style.nav}>
                <a className={style.link} href="">Home</a>
                <a className={style.link} href="">Skills</a>
                <a className={style.link} href="">Projects</a>
                <a className={style.link} href="">Contacts</a>
            </div>

    )
}
export default Nav