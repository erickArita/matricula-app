import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export const PublicRoutes = ({

    isAutenticated,
    next,
    component: Component,
    ...rest
}) => {
    return (
        <Route   {...rest}

            component={(props) => (
                (isAutenticated) ?
                    (<Redirect to= { next ||'/manage'} />) :
                    (<Component {...props} />)
            )}


        />
    )
}
