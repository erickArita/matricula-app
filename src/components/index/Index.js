import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import grad from '../../assets/question.svg'
import principalIllustration from '../../assets/graduation.svg'
export const Index = () => {
    return (
        <>
            <header className='header-clases flex'>
                <div className="textos-clases">
                    <h1>Centro De Educación Media Gubernamental <br /> "Superación Cashapa"</h1>
                    <h3>Plataforma de Matrícula</h3>
                </div>
                <img src={principalIllustration} alt="nbb" />
                <Link style={{ zIndex: '200' }} to='/matricularme'>
                    <button className='btn btn-primary' >
                        MATRICULARME
                    </button>
                </Link>

            </header>
            <svg className="ilustracion-header" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fillOpacity="1" d="M0,224L48,197.3C96,171,192,117,288,112C384,107,480,149,576,138.7C672,128,768,64,864,53.3C960,43,1056,85,1152,90.7C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            <section className='vh-100 d-flex align-center'  >
                <div className="d-flex flex-wrap flex-md-row flex-sm-column   justify-content-center justify-content-sm-center align-items-center">

                    <img style={{minWidth:'300px',width:'49vw'}} src={grad} alt="" />
                    <div style={{minWidth:'300px',height:'70vh'}} className="d-flex w-50  flex-column justify-content-center align-items-center">

                        <h2 className='text-body' >¿Por qué el INSUCA?</h2>
                        <p className='mt-3 p-2 '>
                            Somos el colegio del pueblo desde 1992, para educar a los que moldearán el futuro de nuestro país
                            te invitamos a unirte a esta comunidad de aprendizaje y desarrollo de habilidades técnicas y blandas.

                        </p>
                        <p className='font-italic text-white mt-3'>"Educamos para Transformar"</p>
                    </div>
                </div>

            </section>
        </>
    )
}
