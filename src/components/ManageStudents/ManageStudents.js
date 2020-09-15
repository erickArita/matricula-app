import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startgetStudents } from '../../actions/studentsData'
import { useForm } from '../../hooks/useForm'


export const ManageStudents = () => {

    const [filters, setFilters] = useState({
        filter: undefined,
        value: undefined
    })
    const { filter, value } = filters
    console.log(filter)
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(startgetStudents(filter, value))

    }, [filters])

    const handleInputChange = ({ target }) => {
        setFilters({
            filter: target.name,
            value: target.value
        })
    }

    return (
        <div className=' pl-3 '>
            <h1 className='text-center'>Gestión de matricula</h1>
            {/* {
                loanding ? (<p>Cargando</p>) :
                    (<pre>  {JSON.stringify([{ data }], null, 1)} </pre>)
            } */}
            <h4 className='mt-2'>Filtrar alumnos segun:</h4>

            <hr />
            <form className='d-flex justify-content-start'>
                <div className="form-row">
                    <div className="form-group col-md-6">

                        <select type="text" className='form-control'
                            name='grado' value={value} onChange={handleInputChange} >
                                <option >Grado</option>
                                <option >Año</option>
                                <option >Modalidad</option>
                            </select>
                    </div>
                    <div className="form-group col-md-6">

                        <input type="text" className='form-control'
                            name='grado' value={value} onChange={handleInputChange} />
                    </div>
                </div>
            </form>
        </div>
    )
}
