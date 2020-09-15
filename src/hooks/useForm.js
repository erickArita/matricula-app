import { useState } from "react"


export const useForm = (initialState) => {

    const [student, setStudent] = useState(initialState)

    const reset = () => {
        setStudent({
            ...initialState
        })
    }

    const handleInputChange = ({ target }) => {

        setStudent({
            ...student,
            [target.name]: target.value
        });
      
    }

    const handleinputFile = (url) => {
        setStudent({
            ...student,
            url
        });
    }
    const handleDateChange = (date) => {
        setStudent({
            ...student,
            edad: date
        });
    };

    

    return [student, handleInputChange, handleDateChange, handleinputFile, reset ]
}
