import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
export const AppRouter = () => {
    const [cheking, setCheking] = useState(true)
    const [loggedIn, setLoggedIn] = useState(false)
    const dispatch = useDispatch()
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

    if (cheking) {
        return (<Loading />)
    }
    return (
        <div>
            <Router>
                <div >
                    <Navbar />
                    <Switch>

                        <Route path='/' exact component={Index} />
                        <Route path='/matricularme' exact component={Matricularme} />

                        <PublicRoutes path='/login' exact isAutenticated={loggedIn} component={LoginManager} />

                        <PrivateRoutes exact isAutenticated={loggedIn} path='/manage' component={ManageStudents} />
                        <PrivateRoutes exact isAutenticated={loggedIn} path='/createAcount' component={CreateUser} />
                      

                    </Switch>
                </div>
            </Router>
        </div>
    )
}

