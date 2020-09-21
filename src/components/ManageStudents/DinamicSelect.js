import React from 'react'
import { useMemo } from 'react'
 
export const DinamicSelect = ({ filter }) => {
    const grados = [
        {
            id: 1,
            value: '7'
        }, {
            id: 2,
            value: '8'
        }, {
            id: 3,
            value: '9'
        }, {
            id: 4,
            value: '10'
        },
        {
            id: 5,
            value: '11'
        }
        ,
        {
            id: 6,
            value: '12'
        }
    ]
    const modalidad = [
        {
            id: 4,
            value: 'Básica'
        }, 
        {
            id: 6,
            value: 'Año de fundamento'
        }, 
        {
            id: 1,
            value: 'BTPCH'
        }, {
            id: 2,
            value: 'BTPCF'
        }, {
            id: 3,
            value: 'BTPI'
        }
    ]
    
    const ano =useMemo( () => {
        const ano = []
        const yearNow = new Date().getFullYear();

        for (let i = 2020; i <= yearNow; i++) {


            ano.push(i)
        }
        return ano
    }, [])

   
    
    if (filter === 'Grado') {

        return grados.map(option =>

            <option key={option.id} >
                {option.value}
            </option>
        )
    }
    if (filter === 'Año') {

        return ano.map(option =>
            
            <option value={option} key={option} >
                {option}
            </option>
        )
    }
    if (filter === 'Modalidad') {

        return modalidad.map(option =>
            <option key={option.id} >
                {option.value}
            </option>
        )
    }




}


