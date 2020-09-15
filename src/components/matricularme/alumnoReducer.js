export const alumnoReducer = (state=[],action) => {
    switch (action.type) {
        case 'add':
            return [{...state,state:action.payload}]
            
        default:
            return [state];
    }
}