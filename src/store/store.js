import { createStore, combineReducers, applyMiddleware,compose  } from 'redux';
 
import thunk from 'redux-thunk'
import { AuthReducer } from '../reducers/AuthReducer';
import { createPdf } from '../reducers/createPdf';
import { filterGetData } from '../reducers/filterGetData';
import { studentAuthReducer } from '../reducers/studentAuthReducer';
import { studentsReducer } from '../reducers/studentsReducer';
import { taskReducer } from '../reducers/TasksReducer';
import { uiReducer } from '../reducers/uiReducer';
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: AuthReducer,
    ui:uiReducer,
    students:studentsReducer,
    filters:filterGetData,
    createPdf:createPdf,
    studentAuth:studentAuthReducer,
    tasks:taskReducer
})
// para usar el reducer y usar el middleware para codigo asincrono
export const store = createStore(reducers,

    composeEnhancers(
        applyMiddleware(thunk)
    )

);