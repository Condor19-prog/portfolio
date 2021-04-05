import React from "react";
import styleContainer from '../common/styles/Container.module.css'
import style from './Contacts.module.scss'
import {useFormik} from "formik";
import Title from "../common/components/title/Title";
import {Button} from "../common/components/button/Button";
import {Fade} from "react-awesome-reveal";

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
            if (!values.message) {
                errors.message = 'Required';
            }
            return errors;
        },
        onSubmit: values => {
            alert(JSON.stringify(values));
            formik.resetForm()
        },
    });
    return (
        <div className={style.contactsBlock} id={'contacts'}>
            <Fade damping={0} direction={'up'} fraction={0.1} triggerOnce={true}>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Title title={'Contact with me'}/>
                    <form className={style.contacts} onSubmit={formik.handleSubmit}>
                        <div className={style.entryField}>
                            <input
                                className={style.formControl}
                                type="text"
                                placeholder='Name'
                                {...formik.getFieldProps('name')}
                            />
                            {formik.touched.name && formik.errors.name ?
                                <span className={style.labelStyle}>{formik.errors.name}</span> : null}
                        </div>
                        <div className={style.entryField}>
                            <input
                                className={style.formControl}
                                type="email"
                                placeholder='Email'
                                {...formik.getFieldProps('email')}
                            />
                            {formik.touched.email && formik.errors.email ?
                                <span className={style.labelStyle}>{formik.errors.email}</span> : null}
                        </div>
                        <div className={style.entryField}>
                    <textarea
                        className={style.formControlTextarea}
                        placeholder='Your message'
                        {...formik.getFieldProps('message')}
                    />
                            {formik.touched.message && formik.errors.message ?
                                <span className={style.labelStyleTextarea}>{formik.errors.message}</span> : null}
                        </div>
                        <Button/>
                    </form>
                </div>
            </Fade>
        </div>
    )
}

export default Contacts