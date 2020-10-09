import { types } from "../types/types";


export const filterGetData = (state = {}, action) => {

    switch (action.type) {
        case types.setFilters:

            return {
                grado: '',
                date: '',
                modalidad: '',
                registered: false

            }
        case types.updateFilters:

            const filter = action.payload
             return {

                ...state,...filter,registered: filter.registered === 'true' ? true : false
            }
        default:
            return state;
    }

}
