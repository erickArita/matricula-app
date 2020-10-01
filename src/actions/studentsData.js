import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";



export const startgetStudents = (date, grado, modalidad, registered) => {
    return (dispatch) => {
        dispatch(setLoading())
        const first = db.collection("students")
        .where('grado', '==', grado)
        .where('date', '==', date)
        .where('modalidad', '==', modalidad)
        .where('registered', '==', registered)
        first.get()
        .then((querySnapshop) => {
            
            console.log('s')
                dispatch(unsetLoading())
                const students = querySnapshop.docs.map(data => ({ ...data.data(), id: data.id }))
                dispatch(getStudents(students))
            });
    }

}

export const updateStudent = (id, registered) => {
    return (dispatch) => {
        const studentref = db.collection("students").doc(id)
        studentref.update({
            registered: !registered
        }).then(() => {

            dispatch(updateStudentAction(registered, id))
        })
            .catch((e) => {
                console.log(e)
            })
    }
}


export const getLocalData = (registered) => ({
    type: types.getLocalData,
    payload: { registered }

})
export const getStudents = (students) => ({
    type: types.getStudents,
    payload: { students }
})
const updateStudentAction = (registered, id) => ({
    type: types.updateStudent,
    payload: { registered, id }
})

export const setLoading = () => ({
    type: types.setLoading
})
export const unsetLoading = () => ({
    type: types.unsetLoading
})

export const setFiltersContext = () => {
    return {
        type: types.setFilters
    }
}

export const updatefilters = (filters) => {
    return {
        type: types.updateFilters,
        payload: filters
    }
}