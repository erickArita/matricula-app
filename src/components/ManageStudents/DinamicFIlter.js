import React from 'react'
import { DinamicSelect } from './DinamicSelect'

export const DinamicFIlter = ({filter,name,value,handleInputChange}) => {
    return (
        <div key={filter} className="form-group col-12">
            <label>{filter}</label>

            <select name={name} className='form-control'
                value={value} onChange={handleInputChange} >
                <option>Seleccione</option>
                <DinamicSelect filter={filter} />
            </select>
        </div>
    )
}
