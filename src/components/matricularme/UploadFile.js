import React from 'react'

import { uploadFile } from '../../helers/uploadFile'

export const UploadFile = React.memo(({  handleinputFile }) => {

 
    const handleFile = ({target}) => {

        uploadFile(target.files[0], handleinputFile)


    }
    const handleUploadFile = () => {
        document.querySelector('#fileInput').click();
    }
    return (
        <div className="form-group col-md-12">
            <label htmlFor="" >Adjuntar foto tamaño carnet </label>
            <br />
            <input id='fileInput' type="file" className='form-control w-50' name='url'  required onChange={handleFile} style={{ display: 'none' }} />

            <button type='button' className='btn btn-outline-info' onClick={handleUploadFile}>Subir Archivo</button>
        </div>
    )
}
)