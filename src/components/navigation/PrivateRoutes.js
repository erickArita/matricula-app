import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PrivateRoutes = ({
    isAutenticated,
    component: Component,
    ...rest
}) => {
    return (
        <Route   {...rest}

            component={(props) => (
                (isAutenticated) ?
                    (<Component {...props} />) :
                    (<Redirect to='/docs/login' />)
            )}


        />
    )
}
