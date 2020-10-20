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
                <Link to='/' className="navbar-brand  " >
                    <div className="logo-principal">
                        <img alt="logo" src={logo} />
                    </div>
                </Link>
                <Link className='text-decoration-none d-flex align-items-center' to='/'>
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
                            <NavLink activeClassName='activeClick' exact className="nav-link" to='/' >Inicio</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink activeClassName='activeClick' className="nav-link" to='/matricularme' >Matricularme</NavLink>
                        </li>



                        <li className="nav-item">
                            <NavLink activeClassName='activeClick' className="nav-link" to='/login'>Administrador</NavLink>
                        </li>


                        <li className="nav-item">
                            {
                                uid &&
                                <NavLink activeClassName='activeClick' className="nav-link" to='/orientation'>Orientación</NavLink>
                            }
                        </li>
                        {
                            uid && 
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to='#' id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Usuario
                            </NavLink>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
 

                                        <NavLink className="nav-link text-body" to='/createAcount'>Crear usuario</NavLink>

 
                                         <NavLink to='#' className="nav-link text-body pointer" onClick={handelLogout}> Cerrar Secion</NavLink >
 


                                </div>
                            </li>
                        }
                    </ul>

                </div>
            </div>

        </nav>
    )
}
