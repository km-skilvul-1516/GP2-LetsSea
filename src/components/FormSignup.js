import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import '../style/Form.css';
import { Link } from 'react-router-dom';

import image1 from '../assets/eachh.svg'

const FormSignup = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  console.log('/inidarisignup')

  return (
    <div className='form-container'>
    <div className='form-content-left'>
    <img className='form-img' src={image1} alt='Masuk' />
    </div>
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <p className='ya'>
          REGISTER
        </p>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Ketik Username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Ketik Email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Ketik Password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Konfirmasi Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Konfirmasi Password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <Link to='/login'>
          <button className='form-input-btn' type='submit'>
            Daftar
          </button>    
        </Link>
        <br/>
        <Link to='/login'> 
        <div className='tidak'> 
          Sudah punya akun? Login disini
        </div>
        </Link>
      </form>
    </div>
    </div>
  );
};

export default FormSignup;
