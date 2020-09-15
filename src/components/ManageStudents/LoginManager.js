import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import validator from 'validator'
import { startLoginWithEmailAndPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import imgLogin from '../../assets/ilustracion login.svg';
import logo from '../../assets/logo.png';
import { useForm } from '../../hooks/useForm';
import './login.css';
export const LoginManager = () => {

    const dispatch = useDispatch();
    const { msgError, loading } = useSelector(state => state.ui)
    const [formValues, handleInputChange] = useForm({
        email: '',
        password: ''
    });
    const { email, password } = formValues

    const handleLogin = (e) => {
        e.preventDefault()
        if (formValid()) {

            dispatch(startLoginWithEmailAndPassword(email, password))

        }

    }

    const formValid = () => {
        if (!validator.isEmail(email)) {
            dispatch(setError('Correo no valido'))
            return false;
        } else if (validator.isEmpty(password) || password.length < 5) {
            dispatch(setError('La contraseña debe ser mayor a 5 caracteres '))
            return false;
        }

        dispatch(removeError())
        return true;
    }
    return (
        <div className='container-login'>
            <div className="textos-login">

                <h1>Institulo Gubernamental Superación Cashapa</h1>
                <p>Educamos para transformar</p>
                <img src={imgLogin} alt='logo instituto' />
            </div>

            <div className="formulario-login">
                <div className="logo-login">
                    <img src={logo} alt="logo" />
                </div>
                <h1>INGRESAR</h1>

                <form onSubmit={handleLogin}>
                    {
                        msgError && <p className="alert">{msgError}</p>
                    }
                    <input type='email' name="email"
                        placeholder='Correo' value={email}
                        onChange={handleInputChange} required />

                    <input type='password' name="password"
                        placeholder='Contraseña'
                        value={password} onChange={handleInputChange} required />
                    <input className='boton-login' type="submit" disabled={loading} />

                </form>

            </div>
        </div>
    )
}
