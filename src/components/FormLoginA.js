import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import { Link } from 'react-router-dom';
import "../style/Form.css"

const FormLoginA = ({ submitForm }) => {
const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
);

return (
    <div className='form-content-right'>
    <form onSubmit={handleSubmit} className='form' noValidate>
        <p className='ya'>
        LOGIN
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
        <Link to='/'>
            <button className='form-input-btn' type='submit'>
            Masuk
            </button>
        </Link>
        <br/>
        <Link to='/signup'>
        <div className='tidak'>
                Belum punya akun? Daftar disini
        </div>
        </Link>
    </form>
    </div>
);
};

export default FormLoginA;
