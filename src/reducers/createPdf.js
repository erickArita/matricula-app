import { types } from '../types/types'


export const createPdf = (state = {}, action) => {

    switch (action.type) {
        case types.setCreatePdf:

            return {
                 loading: true

            }
        
        case types.unSetCreatePdf:
            return {
                 loading: false
                
            }

        default:
            return state;
    }

}