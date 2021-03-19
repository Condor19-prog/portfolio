import React, {useState} from "react";

const BurgerMenu = () => {
    const [toggle, setToggle] = useState(false)

    const onToggleMenu = () => {
        setToggle(!toggle)
        console.log(toggle)
    }
    return (
        <div onClick={onToggleMenu}>

        </div>
    )
}
export default BurgerMenu