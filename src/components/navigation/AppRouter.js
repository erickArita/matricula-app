import React, { useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Index } from '../index/Index'
import { Navbar } from './Navbar'
import { Matricularme } from '../matricularme/Matricularme'
import { LoginManager } from '../ManageStudents/LoginManager'
import { auth } from '../../firebase/firebaseConfig'
import { login } from '../../actions/auth'
import { useState } from 'react'
import { ManageStudents } from '../ManageStudents/ManageStudents'
import { PrivateRoutes } from './PrivateRoutes'
import { PublicRoutes } from './PublicRoute'
import { CreateUser } from '../ManageStudents/CreateUser'
import { Loading } from '../loading/Loading'
import { setFiltersContext } from '../../actions/studentsData'
import { Orientacion } from '../orientacion/Orientacion'
import 'bootstrap/dist/css/bootstrap.min.css'
// eslint-disable-next-line
import $ from 'jquery';
// eslint-disable-next-line
// import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
export const AppRouter = () => {
    const [cheking, setCheking] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)
    const dispatch = useDispatch()
    // const {} =useHistory()
    useEffect(() => {
        auth.onAuthStateChanged((user) => {

            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                setLoggedIn(true)
            } else {
                setLoggedIn(false)
            }
            setCheking(false)

        });
    }, [dispatch, setCheking])
    // setea los filtros al pricipio 
    useEffect(() => {

        dispatch(setFiltersContext())

    }, [dispatch])


    if (cheking) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>

                <Loading />

            </div>

        )
    }


    return (
        <div>
            <Router basename='/docs'>
                <div >
                    <Navbar />
                    <Switch >

                        <Route path='/' exact component={Index} />
                        <Route path='/matricularme' exact component={Matricularme} />

                        <PublicRoutes path='/login' exact isAutenticated={loggedIn} component={LoginManager} />

                        <PrivateRoutes exact isAutenticated={loggedIn} path='/manage' component={ManageStudents} />
                        <PrivateRoutes exact isAutenticated={loggedIn} path='/orientation' component={Orientacion} />
                        <PrivateRoutes exact isAutenticated={loggedIn} path='/createAcount' component={CreateUser} />

                        <Redirect to='/' />

                    </Switch>
                </div>
            </Router>
        </div>
    )
}

