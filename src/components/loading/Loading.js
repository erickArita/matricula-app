import React from 'react'
import Loader from 'react-loader-spinner'
export const Loading = () => {
    return (
      

            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={30000} //3 secs

            />

        
    )
}
