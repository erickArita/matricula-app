import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { CreateUser } from '../ManageStudents/CreateUser'
import { ManageStudents } from '../ManageStudents/ManageStudents'

export const DasboardRoutes = () => {
    return (
        <div>
            <Switch>

            <Route exact path='/docs/admin'  component={ManageStudents} />
            <Route exact path='/docs/create_User'   component={CreateUser} />
            <Redirect to='/docs/admin' />
            </Switch>
        </div>
    )
}
