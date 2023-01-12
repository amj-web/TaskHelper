import React, { useEffect, useState } from "react";
import ToDoForm from "../../components/ToDoForm/ToDoForm"
import "./ToDo.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL } from "../../globalUrl";
import { useHistory } from 'react-router-dom'
import Loader from "../../components/Loader/Loader";
const Todo = () => {
  const userData = JSON.parse(localStorage.getItem('user'))
  const [loader, setLoader] = useState(true)
  // console.log("The User Data is", userData)
  const history = useHistory()
  useEffect(() => {
    if (userData != null) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${userData.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${URL}/api/auth/check/`, requestOptions)
        .then(response => response.json())
        .then(result => {
          // console.log(result)
          if (result.detail != undefined) {
            toast.error("Please login first", { position: "bottom-right" })
            setTimeout(() => {
              history.push('/login')
            }, 500)
          }
          else {
              setLoader(false)      
          }
        })
        .catch(error => {
          console.log('error', error)
          toast.error("Please login first", { position: "bottom-right" })
          setTimeout(() => {
            history.push('/login')
          }, 500)
        });
    }
    else {
      toast.error("Please login first!", { position: "bottom-right" })
      setTimeout(() => {
        history.push('/login')
      }, 500)
    }
  }, [])


  return (
    <>
      {
        !loader ?
          <div className="todo-page w-100 px-3 py-4">
            <div className="todo-container w-100 py-4 pb-2 mx-auto">
              <h1 className="text-success text-center  add-task-heading">
                Create New Task Here!
              </h1>
              <ToDoForm buttonName="Add Task" />
            </div>
          </div>
          :
          <Loader />
      }

      <ToastContainer />
    </>
  );
};

export default Todo;
