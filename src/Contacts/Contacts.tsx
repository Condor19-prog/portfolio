import React from "react";
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.css'

type contactsType = {
    title: string
}
const Contacts: React.FC<contactsType> = ({title}) => {

    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>

                <h2 className={style.title}>{title}</h2>

                <div className={style.contacts}>
                    <form action="URL" className={style.formStyle}>
                        <input type="text"/>
                        <input type="text"/>
                        <textarea></textarea>
                    </form>
                    <button className={style.btnContacts}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Contacts