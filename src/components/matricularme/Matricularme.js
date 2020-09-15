import React, { useReducer } from 'react'

import { useEffect } from 'react'
import { alumnoReducer } from './alumnoReducer'
import { StudentForm } from './StudentForm'
import { db } from '../../firebase/firebaseConfig'
import Swal from 'sweetalert2'



const date = new Date().getFullYear();

export const Matricularme = () => {

    const [state, dispatch] = useReducer(alumnoReducer, [])
    useEffect(() => {
        const [objectState] = state.map(i => i.state)


        console.log(objectState)
        if (objectState !== undefined) {
            if (objectState.grado < 10) {


                db.collection('students').doc().set({ ...objectState, date, modalidad: 'Básica' })
            } else if (objectState.grado == 10) {

                db.collection('students').doc().set({ ...objectState, date, modalidad: 'Año de fundamento' })

            } else {

                db.collection('students').doc().set({ ...objectState, date }).then(
                    Swal.fire({icon: 'success',title:'Verificaremos tus datos',text:'Recivirás un correo si eres aceptado'})
                )
            }
        }


    }, [state])



    const handleAdd = (newStudent) => {
        const action = {
            type: 'add',
            payload: newStudent
        }
        dispatch(action);
    }

    return (


        <StudentForm handleAdd={handleAdd} />

    )
}
