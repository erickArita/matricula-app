import { db } from "../firebase/firebaseConfig"
import { types } from "../types/types";

export const getTasks = (uid) => {
    return (dispatch) => {
        db.collection("tasks")
            .get()
            .then((querySnapshot) => {

                const tasks = querySnapshot.docs.map(data => ({...data.data(),id:data.id }))
                dispatch(setTasks(tasks))
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }
}

const setTasks = (tasks) => ({
    type: types.getTasks,
    payload: {tasks}
})
const createTaskAc = () => ({
    type: types.createTask
})


export const createTask = (title, body, uid) => {
    return (dispatch) => {



        console.log(title, body, uid)
        db.collection('tasks').add({
            title,
            body,
            uid
        })
            .then(() => {
                dispatch(createTaskAc())
                dispatch(getTasks(uid))
            })
    }
}


