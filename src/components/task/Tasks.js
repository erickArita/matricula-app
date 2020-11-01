import React from "react";
import { useEffect } from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import validator from 'validator';
import { createTask, getTasks } from "../../actions/tasks";
import { useForm } from "../../hooks/useForm";
import { Loading } from "../loading/Loading";
import { Card } from "./Card";
import './task.css'
export const Tasks = () => {

  const dispatch = useDispatch()
  const { uid } = useSelector(state => state.studentAuth)
  const { tasks } = useSelector(state => state.tasks)

  const [formValues, handleInputChange] = useForm({
    title: '',
    body: ''
  })

  const { title, body } = formValues
  useEffect(() => {

    dispatch(getTasks(uid))

  }, [uid, dispatch])

  const validTask = () => {
    if (validator.isEmpty(title) || validator.isEmpty(body)) {
      return false;
    }
    return true;
  }
  const handleCreateTask = (e) => {
    e.preventDefault();



    if (validTask()) {

      dispatch(createTask(title, body, uid))
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor no deje campos vacios',

      })
    }

  }
  return (
    <div className='bg row ' >

      <div className="col-6 p-5">
        <h3 className=" d-flex justify-content-center text-center ">Crear Tarea </h3>
        <form className='form-task'>
          <div className="d-flex flex-column ">

            <input type="text" name='title' className='mb-2 form-control'
              onChange={handleInputChange}
              required />
            <textarea acols="10" name='body' className='form-control'
              onChange={handleInputChange}
              rows="5" required />

          </div>

          <button className='btn btn-dark btn-block m-2' onClick={handleCreateTask} >CREAR</button>
        </form>
      </div>
      <div className="col-6 p-5">
        <h3 className=" d-flex justify-content-center text-center ">Tareas A Realizar </h3>

        {
          tasks?.length ? 
          tasks.map(({id, title, body}) => (


            <Card key={id} title={title} body={body} />

          )):(
            <div className="d-flex justify-content-center align-items-center"
            style={{ position: 'absolute', height: '250px', width: '500px' }}>

            <Loading/>
            </div>
          )
        }

      </div>

    </div>
  )



};
