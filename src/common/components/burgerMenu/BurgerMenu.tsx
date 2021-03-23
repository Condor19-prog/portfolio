import React, {useState} from "react";

const BurgerMenu = () => {
    const [toggle, setToggle] = useState(true)

    const onToggleMenu = () => {
        setToggle(!toggle)
    }
    return (
        <div onClick={onToggleMenu}>

        </div>
    )
}
export default BurgerMenu