import React, { useEffect } from "react";
import { URL } from "../../globalUrl";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom'

const Task = ({ setDisplayy,
  setVDisplayy, userOwner,
  setUDisplayy, Data, setSingleData, setcatagory, setLoader, handleFilter, setUpdateTaskId, setcatagoryOwner, catagoryOwner, setuserOwner }) => {
  const userData = JSON.parse(localStorage.getItem('user'))
  const history = useHistory();
  useEffect(() => {

    // UserData
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userData.token}`);

    var raw = "";

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    // Fetch Specific user data
    fetch(`${URL}/api/auth/specifci-user/${Data.user}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setuserOwner(result.names)
      })
      .catch(error => {
        // console.log('error', error)
      });

    // Fetch Specific category data
    /* eslint-disable */
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

  // show update box
  const showUpdateBox = () => {
    history.push({
      pathname: '/update',
      state: { Data }
    });
  };

  // show view box
  const showViewBox = () => {
    history.push({
      pathname: '/viewTask',
      state: [{ Data: Data, catagoryOwner: catagoryOwner, userOwner: userOwner }]
    });
  };

  // handle delete task
  const handleDelete = (id) => {
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
        toast.success("Task is deleted Successfully", { position: "bottom-right" })
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
            <button
              className="task-btn task-update-btn me-1"
              id="update-btn"
              onClick={showUpdateBox}
            >
              Update
            </button>
            <button className="task-btn task-delete-btn" data-toggle="modal" data-target="#exampleModalCenter">Delete</button>
          </div>
        </div>
      </div>
    </>

  );
};

export default Task;
