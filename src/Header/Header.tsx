import React from "react";
import style from './Header.module.scss'
import Nav from "../Nav/Nav";
import BurgerMenu from "../common/components/burgerMenu/BurgerMenu";


const Header = () => {
    return (
        <div className={style.header}>
            <Nav/>
            {/*<BurgerMenu/>*/}
        </div>
    )
}
export default Header