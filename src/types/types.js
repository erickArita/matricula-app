export const types = {
    login: '[auth] login',
    logout: '[auth] logout',

    // user creation

    uiSetError: '[UI] Set Error',
    uiRemoveError: '[UI] Set Remove Error',

    // loading while login user

    uiStartLoading: '[UI] Start Loading',
    uiFinishLoading: '[UI] Finish Loading',


    // set filters

    setFilters: '[set] Set Filters',
    updateFilters: '[update] Update Filters'
    ,

    //  students data
    getStudents: '[get] Get Students',
    updateStudent: '[update] Update Student Registered',
    setLoading: '[loading] Set Loading',
    unsetLoading: '[loading] Unset Loading',


    // create pdf
    setCreatePdf:'[set] Set CreatePdf',
    unSetCreatePdf:'[set] Set CreatePdf',
    createPdf:'[create] Create Pdf',

    // student auth notes
    loginStudent: '[auth] loginStudent',
    logoutStudent: '[auth] logoutStudent',

    // 

    createTask:'[Task] createTask' ,
    getTasks:'[get] tasks',
    deleteTask:'[del] deleteTask',
    completeTask:'[completa] completeTask',
    updateTask:'[upd] updateTask'
}