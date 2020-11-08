import { types } from "../types/types";

export const taskReducer = (state = {}, action) => {
   switch (action.type) {
      case types.createTask:
         return {
            ...state,
         };

      case types.getTasks:
         return {
            ...state,
            tasks: action.payload.tasks,
         };

      case types.getTask:
          return {
            ...state,
            taskUpdated: action.payload
         };

      case types.deleteTask:
         return {
            ...state
         };

      default:
         return state;
   }
};
