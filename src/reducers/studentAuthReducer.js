import { types } from "../types/types";


export const studentAuthReducer = (state = {}, action) => {
    switch (action.type) {
        case types.loginStudent:

            return {
                ...state,
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logoutStudent:
            return {

            }

        default:
            return state;
    }
}