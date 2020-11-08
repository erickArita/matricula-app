import { db } from "../firebase/firebaseConfig";
import { types } from "../types/types";

export const getTasks = (uid) => {
   return (dispatch) => {
      if (uid) {
         db.collection("tasks")
            .where("uid", "==", uid)
            .get()
            .then((querySnapshot) => {
               const tasks = querySnapshot.docs.map((data) => ({
                  ...data.data(),
                  id: data.id,
               }));
               dispatch(setTasks(tasks));
            });
      } else {
         console.log("object");
      }
   };
};

const setTasks = (tasks) => ({
   type: types.getTasks,
   payload: { tasks },
});
const createTaskAc = () => ({
   type: types.createTask,
});

export const createTask = (title, body, uid) => {
   return (dispatch) => {
      db.collection("tasks")
         .add({
            title,
            body,
            uid,
         })
         .then(() => {
            dispatch(createTaskAc());
            dispatch(getTasks(uid));
         });
   };
};

export const deleteTask = (doc) => {
   return (dispatch) => {
      db.collection("tasks")
         .doc(doc)
         .delete()
         .then(() => {
            dispatch(handleDelete(doc));
         });
   };
};

const handleDelete = (doc) => ({
   type: types.deleteTask,
   payload: doc,
});

const handleUpdateTask = () => ({
   type: types.updateTask,
   // payload:{id,uid,title,body}
});

export const getTask = (taskId) => {
   return (dispatch) => {
      db.collection("tasks")
         .doc(taskId)
         .get()
         .then((querySnapshot) => {
            const task = querySnapshot.data();
            dispatch(handleGetTask(task));
         });
   };
};
const handleGetTask = (task) => ({
   type: types.getTask,
   payload: task
});

export const updateTask = (id, title, body, uid) => {
   return (dispatch) => {
      db.collection("tasks")
         .doc(id)
         .update({ title, body, uid })
         .then(() => {
            dispatch(handleUpdateTask());
            dispatch(getTasks(uid));
         });
   };
};
