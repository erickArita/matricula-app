import { types } from "../types/types";


export const studentsReducer = (state = {}, action) => {
    const { students } = state
     switch (action.type) {
        case types.getStudents:

            return {
                ...state,
                students: action.payload.students
            };

        case types.updateStudent:

            const student = students.find(e => e.id === action.payload.id)
            const index = students.findIndex(student => student.id === action.payload.id)
            const studentUpdated = { ...student, registered: !action.payload.registered }
            students.splice(index, 1, studentUpdated)

            return {
                ...state,
                students: students
            }
        case types.setLoading:
            return {
                ...state,
                loading: true
            }
        case types.unsetLoading:
            return {
                ...state,
                loading: false
            }
        //   crear mas types para editar el alumnon     
        default:
            return state;
    }
}
