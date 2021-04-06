import React, {useState} from "react";
import Nav from "../../../Nav/Nav";
import style from './burgerMenu.module.scss'

const BurgerMenu = () => {
    const [show, setShow] = useState(false)

    const onToggleMenu = () => {
        setShow(!show)
    }

    return (
        <div className={style.container}>
            <div className={show ? `${style.hamburger} ${style.active}` : style.hamburger} onClick={onToggleMenu}>
                <span className={style.lineLine1}></span>
                <span className={style.lineLine2}></span>
                <span className={style.lineLine3}></span>
            </div>
            {show && <div className={style.links}>
                <Nav/>
            </div>}
        </div>
    )
}
export default BurgerMenu