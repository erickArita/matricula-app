import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import validator from "validator";
import { createTask, getTask, getTasks, updateTask } from "../../actions/tasks";
import { useForm } from "../../hooks/useForm";
import { Loading } from "../loading/Loading";
import { Card } from "./Card";
import "./task.css";
export const Tasks = () => {
   const dispatch = useDispatch();
   const { uid } = useSelector((state) => state.studentAuth);
   const { tasks, taskUpdated } = useSelector((state) => state.tasks);
   const [updating, setUpdating] = useState({
      updating: false,
      taskId: "",
   });

   const [formValues, handleInputChange, , , reset, setValues] = useForm({
      title: "",
      body: "",
   });

   const { title, body } = formValues;
   useEffect(() => {
      dispatch(getTasks(uid));
   }, [uid, dispatch]);

   const validTask = () => {
      if (validator.isEmpty(title) || validator.isEmpty(body)) {
         return false;
      }
      return true;
   };
   const handleCreateTask = (e) => {
      e.preventDefault();

      if (validTask()) {
         dispatch(createTask(title, body, uid));
      } else {
         Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor no deje campos vacios",
         });
      }
   };
   const handleUpdating = (e) => {
      e.preventDefault();

      dispatch(updateTask(updating.taskId, title, body, uid));
      reset();
      setUpdating({ ...updating, updating: false });
      
   };
   useEffect(() => {
      if (updating.taskId !== "") {
         dispatch(getTask(updating.taskId));
      }
   }, [updating.taskId, dispatch]);
   useEffect(() => {
      if (taskUpdated) {
         setValues({
            title: taskUpdated.title,
            body: taskUpdated.body,
         });
      }
   }, [taskUpdated,setValues]);

   return (
      <div className="bg container-fluid">
         <div className="row">
            <div className="col-sm-6  p-4">
               <h3 className=" d-flex justify-content-center text-center ">
                  Crear Tarea
               </h3>
               <form className="form-task">
                  <div className="d-flex flex-column ">
                     <input
                        type="text"
                        name="title"
                        autoComplete="false"
                        className="mb-2 input form-control "
                        onChange={handleInputChange}
                        required
                        value={title}
                        maxLength="20"
                     />
                     <textarea
                        acols="10"
                        name="body"
                        className="form-control textarea mt-3"
                        onChange={handleInputChange}
                        rows="5"
                        required
                        value={body}
                        maxLength="120"
                     />
                  </div>

                  <button
                     className="btn btn-dark btn-block mt-4"
                     onClick={
                        updating.updating ? handleUpdating : handleCreateTask
                     }
                  >
                     {updating.updating ? "ACTUALIZAR" : "CREAR"}
                  </button>
               </form>
            </div>

            <div className=" col-sm-6  pt-4">
               <h3 className=" d-flex justify-content-center text-center ">
                  Tareas A Realizar
               </h3>

               <div className="scroll">
                  {tasks?.length > 0 ? (
                     tasks.map(({ id, title, body }) => (
                        <Card
                           key={id}
                           title={title}
                           body={body}
                           doc={id}
                           setUpdating={setUpdating}
                        />
                     ))
                  ) : (
                     <div className="d-flex justify-content-center align-items-center">
                        <Loading />
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   );
};
