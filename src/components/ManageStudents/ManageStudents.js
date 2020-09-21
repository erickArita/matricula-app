import React, { useEffect } from 'react'
import { useState } from 'react'
import { FilterGetStudents } from './FilterGetStudents'
import { startgetStudents } from '../../actions/studentsData'
import { useDispatch, useSelector } from 'react-redux'
import validator from 'validator'
import { RowsStudents } from './RowsStudents'
import { Loading } from '../loading/Loading'
import { StudentFullData } from './StudentFullData'

export const ManageStudents = () => {
    const dispatch = useDispatch()
    const { students, loading } = useSelector(state => state.students)
    const [showFilter, setShowFilter] = useState(false)

    const handleFilter = () => {
        setShowFilter(!showFilter)
    }

    const [filters, setFilters] = useState({
        grado: '',
        date: '',
        modalidad: ''
    });

    const { grado, modalidad, date } = filters

    useEffect(() => {
        const validateFilters = () => {
            if (validator.isEmpty(date) || validator.isEmpty(grado) ||
                validator.isEmpty(modalidad)) {
                return false;
            } else if (validator.equals(date, 'Seleccione') ||
                validator.equals(grado, 'Seleccione') ||
                validator.equals(modalidad, 'Seleccione')) {
                return false;
            }
            return true
        }
        if (validateFilters()) {

            console.log('enviado')
            dispatch(startgetStudents(date, grado, modalidad))
        }

    }, [filters, dispatch, date, grado, modalidad])
    const [fullDataPanel, setFullDataPanel] = useState({})

    const handleStudentData = (id) => {

        const studentById = students.find(student => student.id === id)
        setFullDataPanel(studentById)
    }
  
    return (

        <div className='container-fluid  ' style={{ height: '100vh' }} >
            <div >
                <h3 className='text-center '>Gestión de matricula</h3>
                <button className='btn btn-primary' onClick={handleFilter} >Filtros</button>
                <hr />
            </div>
            <div className=" row  h-100">


                {
                    showFilter &&


                    <FilterGetStudents setFilters={setFilters} filters={{ ...filters }} />


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
                                    grado, id }, i) => (
                                        <RowsStudents
                                            key={id}
                                            handleStudentData={handleStudentData}
                                            name={name}
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
