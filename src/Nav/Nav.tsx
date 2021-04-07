import React from "react";
import style from './Nav.module.scss'
import {Link} from "react-scroll/modules";

const Nav = () => {
    return (
        <div className={style.nav}>
            <Link className={style.link}
                  activeClass={style.active}
                  spy={true}
                  offset={0}
                  smooth={true}
                  duration={500}
                  to="main">Home
            </Link>
            <Link className={style.link}
                  activeClass={style.active}
                  spy
                  offset={0}
                  smooth
                  duration={500}
                  to="skills">Skills
            </Link>
            <Link className={style.link}
                  activeClass={style.active}
                  spy
                  offset={0}
                  smooth
                  duration={500}
                  to="projects">Projects
            </Link>
            <Link className={style.link}
                  activeClass={style.active}
                  spy
                  offset={0}
                  smooth
                  duration={500}
                  to="contacts">Contact Me
            </Link>
        </div>

    )
}
export default Nav