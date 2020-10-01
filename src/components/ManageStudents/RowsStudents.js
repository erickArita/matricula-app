import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { updateStudent } from '../../actions/studentsData'

export const RowsStudents = ({ handleStudentData, id, i, numIdentidad, name, grado,  registered }) => {
    const dispatch = useDispatch()
     const { registered:register } = useSelector(state => state.filters)


    const handleRegister = (id, register) => {

         dispatch(updateStudent(id, register))

    }



    return (
        <tr key={id} style={{ display: register !== registered && 'none' }} onClick={() => handleStudentData(id)}>
            <th scope='row' >{i + 1}</th>
            <td>{numIdentidad}</td>
            <td>{name}</td>
            <td>{grado} </td>
            <td>

                <button onClick={() => handleRegister(id, registered)} className='btn btn-primary'> {
                    registered ? 'SI' : 'NO'
                }</button>
            </td>
        </tr>
    )
}

