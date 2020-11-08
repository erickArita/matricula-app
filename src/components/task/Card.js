import React, {  useState } from "react";
import { faPenAlt, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../actions/tasks";

export const Card = ({ title, body, doc,setUpdating }) => {
   const [display, setDisplay] = useState('')
   const dispatch = useDispatch();

   const handleDeleteTask = (doc) => {
      dispatch(deleteTask(doc));
      setDisplay('none')
   };

   const handleUpdate = (doc) =>{
      setUpdating({
         updating:true,
         taskId:doc
      })
   }
  
   return (
      <div className="card" style={{display:display}}>
         <div className="card-body">
            <div className='d-flex justify-content-between'>
               <h5 className="card-title text-center">{title}</h5>
               <div className='w-25 d-flex '>

               <FontAwesomeIcon onClick={() => handleDeleteTask(doc)} icon={faTrashAlt} color='red' cursor='pointer' className='mr-3' />
               <FontAwesomeIcon  onClick={()=> handleUpdate(doc)}  icon={faPenAlt} cursor='pointer'  />
               </div>
            </div>

            <hr />
            <p className="card-text"> {body} </p>
         </div>
      </div>
   );
};
