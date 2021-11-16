import React, { useState } from 'react';
import '../style/FormLogin.css';
import FormLoginA from './FormLoginA';
import FormSuccess from './FormSuccess';
import "../style/Form.js"

import image1 from '../assets/eachh.svg'

const FormLogin = () => {
const [isSubmitted, setIsSubmitted] = useState(false);

function SubmitForm() {
    setIsSubmitted(true);
}
return (
    <>
    <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
        <img className='form-img' src={image1} alt='Masuk' />
        </div>
        {!isSubmitted ? (
        <FormLoginA SubmitForm={SubmitForm} />
        ) : (
        <FormSuccess />
        )}
    </div>
    </>
);
};

export default FormLogin;
