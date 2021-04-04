import React from "react";
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.scss'
import {useFormik} from "formik";
import Title from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";

type FormikErrorType = {
    name?: string
    email?: string
    message?: string
}

const Contacts = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (!values.name) {
                errors.name = 'Required';
            } else if (values.name.length <= 3) {
                errors.name = 'The field cannot be empty';
            }
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            formik.resetForm()
        },
    });
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Title title={'Contact with me'}/>
                <form className={style.contacts} onSubmit={formik.handleSubmit}>
                    <input
                        className={style.formControl}
                        type="text"
                        placeholder='Name'
                        {...formik.getFieldProps('name')}
                    />
                    {formik.touched.name && formik.errors.name ?
                        <label className={style.labelStyle} style={{marginTop: 39}}>{formik.errors.name}</label> : null}
                    <input
                        className={style.formControl}
                        type="email"
                        placeholder='Email'
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ?
                        <label className={style.labelStyle}
                               style={{marginTop: 98}}>{formik.errors.email}</label> : null}
                    <textarea
                        className={style.formControl}
                        style={{height: 153, padding: '10px 10px 10px 10px'}}
                        placeholder='Your message'
                        {...formik.getFieldProps('message')}
                    />
                    <Button/>

                </form>
            </div>
        </div>
    )
}

export default Contacts