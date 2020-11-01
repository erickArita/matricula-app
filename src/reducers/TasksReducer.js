import { types } from "../types/types";


export const taskReducer = (state = {}, action) => {

    switch (action.type) {
        case types.createTask:
            return {
                ...state
            }

        case types.getTasks:
            console.log(action.payload.tasks)
            return {
                ...state,
                tasks: action.payload.tasks
            }

        default:
            return state;
    }

}
