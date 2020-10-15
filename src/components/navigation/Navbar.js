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
        <nav className="navbar navbar-expand-md navbar-dark bg-dark  sticky-top" id="navbar">
            <div className="d-flex flex-wrap justify-content-center ">
                <Link to='/docs/'     className="navbar-brand  " >
                    <div className="logo-principal">
                        <img alt="logo" src={logo} />
                    </div>
                </Link>
                <Link  className='text-decoration-none d-flex align-items-center' to='/docs/'>
                    <div className='text-dark'>

                        <h3> INSUCA MATRÍCULA</h3>
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
                            <NavLink activeClassName='activeClick' exact className="nav-link" to='/docs/' >Inicio</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink activeClassName='activeClick' className="nav-link" to='/docs/matricularme' >Matricularme</NavLink>
                        </li>



                        <li className="nav-item">
                            <NavLink activeClassName='activeClick' className="nav-link" to='/docs/manage' >Administrador</NavLink>
                        </li>

                        <li className="nav-item">
                            {
                                uid &&
                                <NavLink activeClassName='activeClick' className="nav-link" to='/docs/createAcount'>Crear usuario</NavLink>
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
