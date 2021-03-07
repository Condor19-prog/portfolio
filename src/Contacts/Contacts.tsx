import React from "react";
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.scss'
import Title from "../common/components/title/Title";

const Contacts = () => {

    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contacts'}/>
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