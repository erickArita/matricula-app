import React from 'react'
import './index.css'
import principalIllustration from '../../assets/graduation.svg'
export const Index = () => {
    return (
        <>
            <header className='header-clases flex'>
                <div className="textos-clases">
                    <h1>Instituto Gubernamental Superación Cashapa</h1>
                    <h3>Plataforma de Matrícula</h3>
                </div>
                <img src={principalIllustration} alt="nbb" />
            </header>
            <svg className="ilustracion-header" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,112C384,107,480,149,576,138.7C672,128,768,64,864,53.3C960,43,1056,85,1152,90.7C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
               
        </>
    )
}
