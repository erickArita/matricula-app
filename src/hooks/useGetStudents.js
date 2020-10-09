import { useState } from "react";
import { useEffect } from "react";

const { getStudents } = require("../helers/getStudents");


export const useGetStudents = () => {
    const [data, setData] = useState({ data: [], loanding: true   })

    useEffect(() => {
        getStudents().then(students => {
            
                 
                setData({
                    data: students,
                    loanding: false 
                });
           
        })
     
    }, [])

    return data;
}

