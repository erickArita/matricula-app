import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";



export const startgetStudents = (date, grado, modalidad) => {
    return (dispatch) => {
        dispatch(setLoading())
        const first = db.collection("students")
            .where('grado', '==', grado)
            .where('date', '==', date)
            .where('modalidad', '==', modalidad)

        first.get()
            .then((querySnapshop) => {

                dispatch(unsetLoading())
                const students = querySnapshop.docs.map(data => ({ ...data.data(), id: data.id }))
                dispatch(getStudents(students))
            });
    }

}
 




export const getStudents = (students) => ({
    type: types.getStudents,
    payload: { students }
})
export const setLoading = () => ({
    type: types.setLoading
})
export const unsetLoading = () => ({
    type: types.unsetLoading
})