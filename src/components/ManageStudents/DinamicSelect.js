import React from 'react'
import { useMemo } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const DinamicSelect = ({ filter,value }) => {
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
    const yearNow = new Date().getFullYear();

    const ano = []

    const calcYears = (yearNow) => {

        for (let i = 2015; i <= yearNow; i++) {


            ano.push(i)
        }
    }


    useMemo(() => calcYears(yearNow), [filter,value])

   
    
    if (filter === 'grado') {

        return grados.map(option =>

            <option key={option.id} >
                {option.value}
            </option>
        )
    }
    if (filter === 'date') {

        return ano.map(option =>
            
            <option value={option} key={option} >
                {option}
            </option>
        )
    }
    if (filter === 'modalidad') {

        return modalidad.map(option =>
            <option key={option.id} >
                {option.value}
            </option>
        )
    }




}


