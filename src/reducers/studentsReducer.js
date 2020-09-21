import { types } from "../types/types";


export const studentsReducer = (state = {}, action) => {
    switch (action.type) {
        case types.getStudents:

            return {
                ...state,
                students:action.payload.students
            };

        case types.setLoading:
            return {
                ...state,
                loading: true}
        case types.unsetLoading:
            return {
                ...state,
                loading: false}
        //   crear mas types para editar el alumnon     
        default:
            return state;
    }
}
