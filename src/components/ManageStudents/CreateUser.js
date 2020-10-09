import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setError, removeError } from '../../actions/ui';
import imgLogin from '../../assets/ilustracion login.svg';
import logo from '../../assets/logo.png';
import { useForm } from '../../hooks/useForm';
import validator from 'validator'
import './login.css';
import { createUserWitEmailAndPassword } from '../../actions/auth';
export const CreateUser = () => {

    const dispatch = useDispatch();
    // retorna el state global
    const { msgError, loading } = useSelector(state => state.ui)

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: '',
        name: ''
    })
    const { email, password, name } = formValues

    const handleRegister = (e) => {
        e.preventDefault()
        if (isFormValid()) {
            dispatch(createUserWitEmailAndPassword(email, password, name))
        }
    }

    const isFormValid = () => {
        if (name.trim().length < 4) {
            dispatch(setError('El Nombre debe tener 4 letras o más'))
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Ingrese email valido'))
            return false;
        } else if (password.length < 5) {
            dispatch(setError('La Contraseña debe ser mayor a 5 caracteres'))
            return false;
        }

        dispatch(removeError())
        return true;
    }
    return (
        <div className='container-login'>
            <div className="textos-login">

                <h1>Centro De Educación Media Gubernamental <br />
                    "Superación Cashapa"</h1>
                <p>Educamos para transformar</p>
                <img src={imgLogin} alt='logo instituto' />
            </div>

            <div className="formulario-login">
                <div className="logo-login">
                    <img src={logo} alt="logo" />
                </div>
                <h1>Crear Administrador</h1>

                <form onSubmit={handleRegister}>
                    {
                        msgError && <p className="alert">{msgError}</p>
                    }
                    <input type='text' name="name"
                        placeholder='Nombre' value={name}
                        onChange={handleInputChange} required />
                    <input type='email' name="email"
                        placeholder='Correo' value={email}
                        onChange={handleInputChange} required />

                    <input type='password' name="password"
                        placeholder='Contraseña'
                        value={password} onChange={handleInputChange} required />
                    <input className='boton-login' disabled={loading} type="submit" />

                </form>

            </div>
        </div>
    )
}

