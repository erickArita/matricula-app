import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";



export const startgetStudents = (filter = 'grado',value = '7') => {

    return (dispatch) => {
        const first = db.collection("students")
        .where(filter, '==', value)

        first.get()
            .then((querySnapshop) => {
                const students = querySnapshop.docs.map(data => data.data())
                dispatch(getStudents(students))
            });
    }

}



export const getStudents = (students) => ({
    type: types.getStudents,
    payload: {students}
})