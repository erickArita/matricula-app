import React from 'react'
 
import { DinamicFIlter } from './DinamicFIlter'

export const FilterGetStudents = ({setFilters,grado,date,modalidad}) => {

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
        }
    ]

    
    
    const handleInputChange = ({ target }) => {
        setFilters(filters=>({
            ...filters,
            [target.name]: target.value
        }))
    }
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
