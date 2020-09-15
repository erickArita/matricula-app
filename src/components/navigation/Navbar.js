import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { startLogout } from '../../actions/auth'
import logo from '../../assets/logo.png'
import './navbar.css'
export const Navbar = () => {
    const dispatch = useDispatch()
    const { uid } = useSelector(state => state.auth)
    const handelLogout = () => {

        dispatch(startLogout())

    }
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark " id="navbar">
            <div className="row">
                <Link to='/' className="navbar-brand col " >
                    <div className="logo-principal ">
                        <img alt="logo" src={logo} />
                    </div>
                </Link>
                <Link className='text-decoration-none' to='/'>
                    <div className='text-dark col  pt-3  '>

                        <h4 > INSUCA MATRÍCULA</h4>
                    </div>

                </Link>
            </div>
            <button
                className="navbar-toggler"
                data-target="#main-navbar"
                data-toggle="collapse"
                type="button"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-right">

                <div className="collapse navbar-collapse border-bottom-white " id="main-navbar">

                    <ul className="navbar-nav pr-5  " >
                        <li className="nav-item ">
                            <NavLink activeClassName='activeClick' exact className="nav-link" to='/' >Inicio</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink activeClassName='activeClick' className="nav-link" to='/matricularme' >Matricularme</NavLink>
                        </li>



                        <li className="nav-item">
                            <NavLink activeClassName='activeClick' className="nav-link" to='/manage' >Administrador</NavLink>
                        </li>

                        <li className="nav-item">
                            {
                                uid &&
                                <NavLink activeClassName='activeClick' className="nav-link" to='/createAcount'>Crear usuario</NavLink>
                            }
                        </li>
                        {
                            uid &&
                            <li className="nav-item">
                                <p className="nav-link" onClick={handelLogout}> Cerrar Secion</p>
                            </li>

                        }
                    </ul>

                </div>
            </div>

        </nav>
    )
}
