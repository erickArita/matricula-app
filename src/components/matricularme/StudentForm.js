import React from 'react'
import { useForm } from '../../hooks/useForm'
import DatePicker from "react-datepicker";
import './form.css'
import "react-datepicker/dist/react-datepicker.css";
import { UploadFile } from './UploadFile';

export const StudentForm = ({ handleAdd }) => {

 
    const [studentData, handleInputChange, handleDateChange, handleinputFile, reset] = useForm({
        name: '',
        email: '',
        localidad: '',
        numIdentidad: '',
        sexo: '',
        edad: '',
        grado: '',
        numtelefono: '',
        nameFather: '',
        numIdentidadFather: '',
        sexoFather: '',
        parentesco: '',
        telefonoFather: '',
        url: '',
        modalidad: ''
    });
    const { name, email, localidad, sexo, edad, grado, numtelefono,
        numIdentidad, nameFather, numIdentidadFather
        , sexoFather, parentesco, telefonoFather, modalidad
    } = studentData;



    const handleSubmit = (e) => {
        e.preventDefault();


        handleAdd(studentData)
        reset()


    };



    return (
        <div className="container">
            <form className='container marco mb-5 mt-5 p-5' onSubmit={handleSubmit}>
                <h4 className='mt-2'>Datos del Alumno</h4>
                <hr />
                <div className="form-row">

                    <div className="form-group col-md-6">
                        <label htmlFor="name">Nombre Completo</label>
                        <input type="text" className='form-control' onChange={handleInputChange}
                            value={name} placeholder='Erick Marley Arita Orellana'
                            autoComplete='off' name="name" required />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="numIdentidad">Número de identidad</label>
                        <input type="text" maxLength='13' minLength='13'
                            onChange={handleInputChange} value={numIdentidad} placeholder='0431200200847'
                            className='form-control' name="numIdentidad" required />
                    </div>
                </div>
                <div className="form-row">


                    <div className="form-group col-md-4">
                        <label htmlFor="numIdentidad">Sexo</label>
                        <select id="inputState" name='sexo' required
                            onChange={handleInputChange} value={sexo} className="form-control">
                            <option defaultChecked >Seleccione...</option>
                            <option>Masculino</option>
                            <option>Femenino</option>

                        </select>
                    </div>
                    <div className="form-group col ">
                        <label htmlFor="" >Fecha de nacimiento</label> <br />
                        <DatePicker
                            className='form-control '
                            required

                            selected={edad}
                            onChange={handleDateChange}

                        />
                    </div>

                    <div className="form-group col">
                        <label htmlFor="grado">Grado a Cursar</label>
                        <select id="inputState" name='grado' required
                            onChange={handleInputChange} value={grado} className="form-control">
                            <option >Seleccione...</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                            <option>11</option>
                            <option>12</option>
                        </select>
                    </div>
                    {
                        grado > 10 &&

                        <div className="form-group col-md-3">
                            <label htmlFor="grado">Modalidad</label>
                            <select name='modalidad'
                                onChange={handleInputChange} value={modalidad} className="form-control">




                                <option >Seleccione</option>
                                <option  >BTPCF</option>
                                <option  >BTPI</option>
                                <option  >BTPCH</option>


                            </select>
                        </div>
                    }

                </div>

                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="numTelefono">Número de teléfono</label>
                        <input type="text" minLength='8' maxLength='8'
                            className='form-control' placeholder='90987651' onChange={handleInputChange}
                            value={numtelefono} name="numtelefono" required />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="email">Email</label>
                        <input type="email" className='form-control'
                            onChange={handleInputChange} value={email}
                            placeholder='ejemplo@gmail.com' name="email" required />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="numTelefono">Localidad</label>
                        <input type="text" className='form-control'
                            onChange={handleInputChange}
                            value={localidad} placeholder='Aldea , Barrio/Pueblo'
                            required name="localidad" />
                    </div>
                </div>

                <h4 className='mt-2'>Datos del Padre o Encargado</h4>
                <hr />
                <div className="form-row">

                    <div className="form-group col-md-6">
                        <label htmlFor="name">Nombre Completo</label>
                        <input type="text" className='form-control' onChange={handleInputChange}
                            value={nameFather} placeholder='Erick Marley Arita Orellana'
                            required autoComplete='off' name="nameFather" />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="numIdentidad">Número de identidad</label>
                        <input type="text" maxLength='13' minLength='13'
                            onChange={handleInputChange} value={numIdentidadFather} placeholder='0431200200847'
                            className='form-control' name="numIdentidadFather" required />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="sexoFather">Sexo</label>
                        <select id="inputState" name='sexoFather'
                            onChange={handleInputChange} value={sexoFather}
                            className="form-control" required>
                            <option >Seleccione...</option>
                            <option>Masculino</option>
                            <option>Femenino</option>

                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="" >Parentesco</label>
                        <input type="text" className='form-control'
                            onChange={handleInputChange} value={parentesco}
                            placeholder='padre,tío/abuala etc'
                            name='parentesco' required />

                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="" >Número de teléfono</label>
                        <input type="text" className='form-control'
                            maxLength='8' onChange={handleInputChange}
                            value={telefonoFather} placeholder='90987651'
                            name='telefonoFather' required />

                    </div>
                </div>
                <h4 className='mt-2'>Archivos Necesarios</h4>
                <hr />

                <div className="form-row ">

                    <UploadFile handleinputFile={handleinputFile} />
                </div>

                <div className="d-flex justify-content-center">
                    <button type='submit' className='btn  btn-primary mt-5 w-25' > Enviar </button>

                </div>
            </form>
        </div>
    )
}
