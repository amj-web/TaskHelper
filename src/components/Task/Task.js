import React, { useEffect, useState } from "react";
// import Taskmg from "../../assets/images/task-img.jpg";
import { URL } from "../../globalUrl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'
const Task = ({ setDisplayy,
  setVDisplayy,userOwner,
  setUDisplayy, Data, setSingleData, setcatagory, setLoader, handleFilter, setUpdateTaskId, setcatagoryOwner, catagoryOwner ,setuserOwner}) => {
  const userData = JSON.parse(localStorage.getItem('user'))
  // console.log("Here is User Data", Data)
  const history = useHistory();
  useEffect(() => {

    //UserData
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userData.token}`);

    var raw = "";

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${URL}/api/auth/specifci-user/${Data.user}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setuserOwner(result.names)
      })
      .catch(error => 
        {
          // console.log('error', error)
        });


    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userData.token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`${URL}/api/todo/unique-category/${Data.category}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        setcatagoryOwner(result.name)
      })
      .catch(error => console.log('error', error));

  }, [])


  const showUpdateBox = () => {
    history.push({
      pathname: '/update',
      state: {Data }
    });
  };

  const showViewBox = () => {
    history.push({
      pathname: '/viewTask',
      state: [{Data:Data,catagoryOwner:catagoryOwner,userOwner:userOwner }]
    });
    // let d = "flex";
    // setDisplayy(d);
    // d = "block";
    // setVDisplayy(d);
    // setSingleData(Data)
    // setcatagory(catagoryOwner)
  };
  const handleDelete = (id) => {
    // setLoader(true)
    handleFilter(id)
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userData.token}`);

    var raw = "";

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${URL}/api/todo/unique-todo/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        toast.success("Task is deleted Successfully", { position: "bottom-right" })
        // setLoader(false)

      })
      .catch(error => console.log('error', error));
  }


  return (
    <>

      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Confirmation</h5>
            </div>
            <div className="modal-body">
              Are you sure to delete that task?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => handleDelete(Data.id)}>Yes</button>
            </div>
          </div>
        </div>
      </div>

      <div className="task-container col-12 col-md-6 my-2 py-0 px-3">
        <div className="task-data p-3 ">
          <div className="task-img">
          <img src={Data?.image} alt="image" className="w-100 h-100" />
        </div>
          <div className="task-title mt-3">
            <h5 className="m-0 fw-bold text-success">Title:</h5>
            <p className="ms-3" style={{ color: "gray" }} id="taskTitle">
              {Data.title}
            </p>
          </div>

          <div className="task-filter-tags mt-2 d-flex flex-wrap">
            {/* <span style={{ marginRight: "0.6em" }}>Catagory: </span> */}
            <div
              className="text-success border border-success rounded px-2 py-1 me-2 h-100 mb-2"
              id="category"
            >
              {catagoryOwner}
            </div>

            <div
              className="text-danger border border-danger rounded px-2 py-1  me-2 h-100 mb-2"
              id="priority"
            >
             
              {Data.priority}
            </div>

            <div
              className="text-warning border border-warning rounded px-2 py-1  me-2 h-100 mb-2"
              id="state"
            >
              {Data.status}
            </div>

            <div
              className="text-danger fw-bold border border-danger rounded px-2 py-1  me-2 h-100 mb-2"
              id="duedate"
            >
              {Data.dueDate} Due Date
            </div>
          </div>
          <div className="task-btns my-3 me-sm-3 me-md-1">
            <button
              className="task-btn task-view-btn me-1"
              id="view-btn"
              onClick={showViewBox}
            >
              View
            </button>
            {/* <Link to="/update"> */}
            <button
              className="task-btn task-update-btn me-1"
              id="update-btn"
              onClick={showUpdateBox}
            >
              Update
            </button>
            {/* </Link> */}
            <button className="task-btn task-delete-btn" data-toggle="modal" data-target="#exampleModalCenter">Delete</button>
          </div>
        </div>
      </div>
      {/* <ToastContainer/> */}
    </>

  );
};

export default Task;
