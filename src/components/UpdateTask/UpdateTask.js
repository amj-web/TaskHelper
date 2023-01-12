import React,{useEffect,useState} from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import UpdateForm from "../ToDoForm/UpdateForm";

const UpdateTask = ({ displayy, setDisplayy, uDisplayy, setUDisplayy,updateTaskId }) => {
  const [Data, setData] = useState()
  // console.log("The Update Task Id is here",updateTaskId)
  useEffect(() => {
   setData(updateTaskId)
  }, [])

  // console.log("The Updated Data is here",Data)
  
  return (
    <div className="todo-update-page w-100 px-3" style={{ display: uDisplayy }}>
      <div className="todo-update-container w-100 py-4 mx-auto">
        <h1 className="text-success text-center  update-task-heading">
          Update Task Here!
        </h1>
        {Data!=null?
            <UpdateForm
            buttonName="SAVE"
            displayy={displayy}
            setDisplayy={setDisplayy}
            setUDisplayy={setUDisplayy}
            Data ={Data?.title}
          />:
          null
        }
      
      </div>
    </div>
  );
};

export default UpdateTask;
