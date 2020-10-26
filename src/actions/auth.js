import Swal from 'sweetalert2'
import { auth, googleProvider } from '../firebase/firebaseConfig'
import { types } from '../types/types'
import { handleErrorTraslator } from './handleErrorTraducer'
import { uiFinishLoading, uiStartLoading } from './ui'

export const startLoginWithEmailAndPassword = (email, password) => {
    return (dispatch) => {


        dispatch(uiStartLoading())
        auth.signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                // login  
                dispatch(login(user.uid, user.displayName))
                dispatch(uiFinishLoading())
            })
            .catch(e => {
                Swal.fire('Error', handleErrorTraslator(e.code), 'error')
                dispatch(uiFinishLoading())
            })
    }
}

export const createUserWitEmailAndPassword = (email, password, name) => {
    return (dispatch) => {
        dispatch(uiStartLoading())
        auth.createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })

                dispatch(login(user.uid, user.displayName))
                // mostrar errores en todos los formularios
                dispatch(uiFinishLoading())
            })
            .catch(e => {

                Swal.fire('Error', handleErrorTraslator(e.code), 'error')
                dispatch(uiFinishLoading())
            })
    }
}


export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
})
export const startLogout = () => {
    return async (dispatch) => {
        await auth.signOut()

        dispatch(logout())
    }
}

export const logout = () => ({
    type: types.logout
})
// student auth
export const startLoginWithGoogle = () => {
    return (dispatch) => {
        auth.signInWithPopup(googleProvider)
            .then(({ user }) => {
                dispatch(loginStudentTasks(user.uid, user.displayName))
            })

    }
}

export const loginStudentTasks = (uid, displayName) => ({
    type: types.loginStudent,
    payload: {
        uid,
        displayName
    }
})
export const logoutStudent = () => ({
    type: types.logoutStudent
})