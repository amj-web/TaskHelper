import React, { useEffect, useState } from "react";
import "./ToDo.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL } from "../../globalUrl";
import { useHistory } from 'react-router-dom'
import Loader from "../../components/Loader/Loader";
import UpdateForm from "../../components/ToDoForm/UpdateForm";
import { useLocation } from 'react-router-dom';

const Update = () => {
  // Retrieving the user data from local storage
  const userData = JSON.parse(localStorage.getItem('user'))
  // useState hook for managing the loading state
  const [loader, setLoader] = useState(true)
  // useLocation hook from react-router-dom to get the current location
  const location = useLocation();
  // useHistory hook from react-router-dom to manipulate the browser history
  const history = useHistory()
  // useEffect hook to check if the user is logged in and authorized
  useEffect(() => {
    if (userData != null) {
      // Creating headers for the request
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${userData.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      // Fetching the data from the API
      fetch(`${URL}/api/auth/check/`, requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.detail !== undefined) {
            // Error message if the user is not logged in or unauthorized
            toast.error("Please login first", { position: "bottom-right" })
            setTimeout(() => {
              localStorage.removeItem("user");
              history.push('/login') // redirect to login page
            }, 500)
          }
          else {
              setLoader(false) // setting the loader state to false if the user is logged in and authorized      
          }
        })
        .catch(error => {
          // eslint-disable-next-line
          console.log('error', error)
          toast.error("Please login first", { position: "bottom-right" })
          setTimeout(() => {
            localStorage.removeItem("user");
            history.push('/login') // redirect to login page
          }, 500)
        });
    }
    else {
      // Error message if the user is not logged in or unauthorized
      toast.error("Please login first!", { position: "bottom-right" })
      setTimeout(() => {
        localStorage.removeItem("user");
        history.push('/login') // redirect to login page
      }, 500)
    }
  })

  return (
    <>
      {
        !loader ?
          <div className="todo-page w-100 px-3 py-4">
            <div className="todo-container w-100 py-4 pb-2 mx-auto">
              <h1 className="text-success text-center  add-task-heading">
                Update your Task
              </h1>
              <UpdateForm buttonName="Add Task" Data={location.state}/>
            </div>
          </div>
          :
          <Loader />
      }

      <ToastContainer />
    </>
  );
};

export default Update;
