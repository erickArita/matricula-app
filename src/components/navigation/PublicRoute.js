import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PublicRoutes = ({
    isAutenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route   {...rest}

            component={(props) => (
                (isAutenticated) ?
                    (<Redirect to='/docs/manage' />) :
                    (<Component {...props} />)
            )}


        />
    )
}
