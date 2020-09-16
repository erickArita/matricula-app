import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startgetStudents } from '../../actions/studentsData'
import { DinamicSelect } from './DinamicSelect'


export const FilterGetStudents = () => {

    const [filters, setFilters] = useState({
        filter: 'grado',
        value: '7'
    })
    const { filter, value } = filters

    const dispatch = useDispatch()

    useEffect(() => {
        if (filter !== '' && value !== '' && value!='Seleccione' && value != undefined) {

            dispatch(startgetStudents(filter, value))
        }

    }, [filters, value])

    const handleInputChange = ({ target }) => {
        setFilters({
            filter,
            [target.name]: target.value
        })
    }

    






    // generage select dropdown option list dynamically

    return (
        <div className=' pl-3 '>
            <h3 className='text-center'>Gestión de matricula</h3>
            {/* {
                loanding ? (<p>Cargando</p>) :
                    (<pre>  {JSON.stringify([{ data }], null, 1)} </pre>)
            } */}
            <h4 className='mt-1'>Filtrar alumnos segun:</h4>

            <hr />
            <form className='d-flex justify-content-start'>
                <div className="form-row">
                    <div className="form-group col-md-6">

                        <select type="text" className='form-control'
                            name='filter' value={filter} onChange={handleInputChange} >
                            <option value='grado' >Grado</option>
                            <option  value='date'>Año</option>
                            <option value='modalidad' >Modalidad</option>
                        </select>
                    </div>
                    <div className="form-group col-md-6">

                        <select name="value" className='form-control'
                            value={value} onChange={handleInputChange} >
                            <option>Seleccione</option>
                            <DinamicSelect filter={filter} value={value} />
                        </select>

                    </div>
                </div>
            </form>
        </div>
    )
}
