    import React from 'react';
    import validate from './validateInfo';
    import useForm from './useForm';
    import './FormLogin';
    import { Link } from 'react-router-dom';

    const FormLoginA = ({ submitForm }) => {
    const { handleChange, handleSubmit, values, errors } = useForm(
        submitForm,
        validate
    );

    console.log('/inidarilogin')

    return (
        <div className='form-content-right'>
        <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>
            Isi dengan data yang sesuai dengan pendaftaran
            </h1>
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
            <button className='form-input-btn' type='submit'>
            Daftar
            </button>
            <Link to='/signup'>
            <div>
                    Belum punya akun? Daftar disini
            </div>
            </Link>
        </form>
        </div>
    );
    };

    export default FormLoginA;
