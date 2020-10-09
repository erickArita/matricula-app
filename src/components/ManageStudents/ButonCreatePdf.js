import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { getStudentsToPdf, setLoadingPdf } from '../../actions/createPdf'

export const ButonCreatePdf = () => {

    const dispatch = useDispatch()

    const generatePdf = () => {
        dispatch(setLoadingPdf())
        dispatch(getStudentsToPdf())

    }

    return (
        <div>
            <button onClick={generatePdf} className='btn btn-danger' type="primary">Descargar PDF</button>
        </div>
    )
}
