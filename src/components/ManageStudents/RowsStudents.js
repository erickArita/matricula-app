import React from 'react'

export const RowsStudents = ({ handleStudentData, id, i, numIdentidad, name, grado, registered }) => {
    return (
        <tr key={id} onClick={() => handleStudentData(id)}>
            <th scope='row' >{i + 1}</th>
            <td>{numIdentidad}</td>
            <td>{name}</td>
            <td>{grado} </td>
            <td>
                {
                    registered ? 'SI' : 'NO'
                }
            </td>
        </tr>
    )
}

