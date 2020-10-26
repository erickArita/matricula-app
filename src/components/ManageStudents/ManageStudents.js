import React  from 'react'
import { useState } from 'react'
import { FilterGetStudents } from './FilterGetStudents'
import { useDispatch, useSelector } from 'react-redux'
import { RowsStudents } from './RowsStudents'
import { Loading } from '../loading/Loading'
import { StudentFullData } from './StudentFullData'
 
import { ButonCreatePdf } from './ButonCreatePdf'


export const ManageStudents = () => {

    const dispatch = useDispatch()
    const { students, loading } = useSelector(state => state.students)
    const [showFilter, setShowFilter] = useState(true)

    const handleFilter = () => {
        setShowFilter(!showFilter)
    }
   
    const [fullDataPanel, setFullDataPanel] = useState({})

    const handleStudentData = (id) => {

        const studentById = students.find(student => student.id === id)
        setFullDataPanel(studentById)
    }

    return (

        <div className='container-fluid  ' style={{ height: '100vh' }} >
            <div className='pt-2' >
                <h3 className='text-center align-middle'>Gestión de matricula</h3>
                <div className="d-flex justify-content-between">
                    <button className='btn btn-primary' onClick={handleFilter} >Filtros</button>
                    <ButonCreatePdf />
                </div>
                <hr />
            </div>
            <div className=" row  h-100">
                {
                    showFilter &&
                    <FilterGetStudents dispatch={dispatch} />
                }
                <div className="col">
                    <table className='table table-striped '>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Identidad</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Grado</th>
                                <th scope="col">Matriculado?</th>
                            </tr>
                        </thead>

                        <tbody>

                            {
                                students?.length >= 1 &&
                                students.map(({
                                    name, numIdentidad,
                                    grado, id, registered }, i) => (
                                        <RowsStudents
                                            key={id}
                                            handleStudentData={handleStudentData}
                                            name={name}
                                            registered={registered}
                                            numIdentidad={numIdentidad}
                                            grado={grado}
                                            id={id}
                                            i={i}
                                        />
                                    ))
                            }
                        </tbody>
                    </table>
                    {
                        loading &&

                        (
                            <div className="d-flex justify-content-center align-items-center"
                                style={{ position: 'absolute', height: '250px', width: '500px' }}>

                                <Loading />
                            </div>
                        )
                    }
                </div>
                <div className="col">
                    {
                        fullDataPanel.name &&
                        <StudentFullData fullDataPanel={fullDataPanel} />
                    }
                </div>

            </div>

        </div >
    )
}
