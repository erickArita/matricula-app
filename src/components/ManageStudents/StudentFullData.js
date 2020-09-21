import React from 'react'
import { calclYears } from '../../helers/calcYears';
export const StudentFullData = ({ fullDataPanel }) => {
    const { name, numIdentidad, edad, sexo, numtelefono, modalidad, localidad, email,url,
        nameFather, numIdentidadFather, telefonoFather, sexoFather, parentesco
    } = fullDataPanel;

    return (

        <>
            <h4>Datos del alumno</h4>
            <hr />
            <div className="row">
                <div className="col">
                    <b><p>Nombre</p></b>

                    <p>{name}</p>
                </div>
                <div className="col">
                    <b><p>Identidad</p></b>

                    <p>{numIdentidad}</p>
                </div>

                <div className="col">
                    <b><p>Edad</p></b>

                    {calclYears(edad)}
                </div>
                <div className="col">
                    <b><p>Sexo</p></b>

                    {sexo}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <b><p>Teléfono</p></b>

                    {numtelefono}
                </div>
                <div className="col">
                    <b><p>Modalidad</p></b>

                    {modalidad}
                </div>
                <div className="col">
                    <b><p>Localidad</p></b>

                    {localidad}
                </div>
                <div className="col">
                    <b><p>Email</p></b>

                    {email}
                </div>
            </div>
            <hr />
            <h5>Datos del padre</h5>
            <hr />
            <div className="row">
                <div className="col">
                    <b><p>Nombre</p></b>

                    <p>{nameFather}</p>
                </div>
                <div className="col">
                    <b><p>Num Identidad</p></b>

                    <p>{numIdentidadFather}</p>
                </div>


            </div>
            <div className="row">

                <div className="col">
                    <b><p>Sexo</p></b>

                    <p>{sexoFather}</p>
                </div>
                <div className="col">
                    <b><p>Parentesco</p></b>

                    <p>{parentesco}</p>
                </div>
                <div className="col">
                    <b><p>Num teléfono</p></b>

                    <p>{telefonoFather}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <img className='img-thumbnail' src={url} alt="imagen de alumno" width='100px' height='50px'/>
                </div>
            </div>
        </>


    )
}
