import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { FilterGetStudents } from '../ManageStudents/FilterGetStudents'
export const Orientacion = () => {
    const [showFilter, setShowFilter] = useState(true)
    const dispatch = useDispatch()

    const handleFilter = () => {
        setShowFilter(!showFilter)
    }
    return (
        <div className='container-fluid'>

            <div className='p-1' >
                <h3 className='text-center align-middle'>Ficha Psicopedagógica</h3>
                <div className="d-flex justify-content-between">
                    <button className='btn btn-primary' onClick={handleFilter} >Filtros</button>
                    {/* <ButonCreatePdf /> */}
                </div>
                <hr/>
            </div>
            <div className="container-fluid">
                <div className="row">
                    {
                        showFilter &&
                        <FilterGetStudents dispatch={dispatch} />
                    }
                    <div className="col">
                        <form >

                            
                        </form>
                     </div>

                </div>
            </div>
        </div>
    )
}
