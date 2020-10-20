import React, { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import validator from 'validator'
import { startgetStudents, updatefilters } from '../../actions/studentsData'

import { DinamicFIlter } from './DinamicFIlter'

export const FilterGetStudents = React.memo(({ dispatch }) => {


    const filters = useSelector(state => state.filters)
    const { grado,
        date,
        modalidad,
        registered } = filters
    const filtersObj = [
        {
            filter: 'Año',
            value: date,
            name: 'date'
        },
        {
            filter: 'Modalidad',
            value: modalidad,
            name: 'modalidad'
        },
        {
            filter: 'Grado',
            value: grado,
            name: 'grado'
        },
        {
            filter: 'Matriculado',
            value: registered,
            name: 'registered'
        }
    ]
    const handleInputChange = ({ target }) => {
        dispatch(updatefilters({ ...filters, [target.name]: target.value }))
    }


    const validateFilters = useCallback(() => {

        if (validator.isEmpty(date) || validator.isEmpty(grado) ||
            validator.isEmpty(modalidad)) {
            return false;
        } else if (
            validator.equals(date, 'Seleccione') ||
            validator.equals(grado, 'Seleccione') ||
            validator.equals(modalidad, 'Seleccione')) {

            return false

        }

        return true

    }, [date, grado, modalidad])

    useEffect(() => {
        if (validateFilters()) {


            dispatch(startgetStudents(date, grado, modalidad, registered))
        }

    }, [dispatch, validateFilters, date, grado, modalidad, registered])



    // generage select dropdown option list dinamic
    return (
        <div className='col-sm-2'>

            <h4 className='mt-1'>Filtrar alumnos según:</h4>


            <form className='d-flex justify-content-start'>

                <div className='row-cols-3'>
                    {
                        filtersObj.map(({ filter, value, name }) => (

                            <DinamicFIlter key={filter} filter={filter} value={value}
                                name={name} handleInputChange={handleInputChange} />

                        ))
                    }
                </div>
            </form>
        </div>
    )
}
)