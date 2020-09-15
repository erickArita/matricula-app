import { types } from "../types/types";


export const studentsReducer = (state = {}, action) => {
    switch (action.type) {
        case types.getStudents:

            return  action.payload.students ;
    //   crear mas types para editar el alumnon     
        default:
            return state;
    }
}
