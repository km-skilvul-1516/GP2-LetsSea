import React, { useState } from 'react';
import '../style/Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import "../style/FormLogin.css"

import image1 from './assets/eachh.svg'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src={image1} alt='signup' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
