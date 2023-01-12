import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Multiselect } from "multiselect-react-dropdown";
import { URL } from "../../globalUrl";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../Loader/Loader";
import { useHistory } from 'react-router-dom'
const ToDoForm = ({ buttonName, setDisplayy, updateTaskId,
  setUDisplayy }) => {
  const userData = JSON.parse(localStorage.getItem('user'))
  const objectArray = [
    { key: "Option 1", cat: "Group 1" },
    { key: "Option 2", cat: "Group 1" },
    { key: "Option 3", cat: "Group 1" },
    { key: "Option 4", cat: "Group 2" },
    { key: "Option 5", cat: "Group 2" },
    { key: "Option 6", cat: "Group 2" },
    { key: "Option 7", cat: "Group 2" },
  ];
  const history = useHistory()
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState()
  const [dueDate, setDueDate] = useState()
  const [taskOwner, setTaskOwner] = useState([])
  const [catagory, setCatagory] = useState([])
  const [selectTaskOwner, setSelectTaskOwner] = useState()
  const [selectCatagory, setSelectCatagory] = useState()
  const [priority, setPriority] = useState()
  const [status, setStatus] = useState()
  const [loader, setLoader] = useState(false)
  const currentURL = window.location.href.split('/')[3]
  // console.log("The Current Url is", currentURL)

  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userData.token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`${URL}/api/todo/user-category/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        if (result.message == "User dont have any category") {
          setCatagory([])
        }
        else {
          setCatagory(result)
        }

      })
      .catch(error => console.log('error', error));

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userData.token}`);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`${URL}/api/auth/user/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        var arr=[]
        result.map(ls=>{
          var obj ={key:ls.id,cat:ls.username}
          arr.push(obj)
        })
        setTaskOwner(arr)
      }
      )
      .catch(error => console.log('error', error));

  }, [])

  // console.log("The Catagory is", taskOwner)
  const handleSubmitBtn = () => {

    // console.log("Here is Data",
    //   {
    //     Title: title,
    //     Description: description,
    //     Image: image,
    //     DueDate: dueDate,
    //     TaskOwner: selectTaskOwner,
    //     Catagory: selectCatagory,
    //     Priority: priority,
    //     Status: status
    //   }
    // )
    if (catagory.length == 0) {
      toast.error("Please add Catagory First!", { position: "bottom-right" })
      setTimeout(() => {
        history.push('/categories')
      }, 1500)
      return
    }
    if (!title || !description || !image || !dueDate || !selectCatagory || !selectCatagory || !priority || !status) {
      toast.error("Please fill all the fields!", { position: "bottom-right" })
      return
    }
    setLoader(true)
    //Post Api
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userData.token}`);

    var formdata = new FormData();
    formdata.append("category", selectCatagory);
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("user", userData.id);
    formdata.append("dueDate", dueDate);
    formdata.append("image", image);
    formdata.append("assigned", selectTaskOwner);
    formdata.append("priority", priority);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch(`${URL}/api/todo/create-todo/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (typeof (result.title) == "object") {
          if (result.title != undefined) {
            toast.error(result.title[0], { position: "bottom-right" })
            setLoader(false)
          }
        }
        // console.log("The Result is----->", result)
        else{
          toast.success("Task Add Successfully!", { position: "bottom-right" })
          setTimeout(() => {
            history.push('/')
          }, 1000)
          // setLoader(false)
        }
       
      })
      .catch(error => console.log('error', error));
    if (buttonName === "SAVE") {
      let d = "none";
      setDisplayy(d);
      setUDisplayy(d);
    }
  };

  const handleUpdateFunction = () => {
    // console.log("----This Error----")
    // if (buttonName === "SAVE") {
    // //   let d = "none";
    // //   setDisplayy(d);
    // //   setUDisplayy(d);
    // // }
    if (catagory.length == 0) {
      toast.error("Please add Catagory First!", { position: "bottom-right" })
      setTimeout(() => {
        history.push('/categories')
      }, 2000)
      return
    }
    if (!title || !description || !image || !dueDate || !selectCatagory || !selectCatagory || !priority || !status) {
      toast.error("Please fill all the fields!", { position: "bottom-right" })
      return
    }
    setLoader(true)
    //Update the  Task

    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userData.token}`);

    var formdata = new FormData();
    formdata.append("category", selectCatagory);
    formdata.append("title", title);
    formdata.append("description", description);
    formdata.append("user", userData.id);
    formdata.append("dueDate", dueDate);
    formdata.append("image", image);
    formdata.append("assigned", selectTaskOwner);
    formdata.append("priority", priority);

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch(`${URL}/api/todo/unique-todo/${updateTaskId}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log("The Result is----->", result)
        toast.success("Task Update Successfully!", { position: "bottom-right" })
        setLoader(false)
      })
      .catch(error => console.log('error', error));

  }
  console.log("This is Task owner",taskOwner)
  return (
    <>
      {
        !loader ?
          <Form className="m-4">
            <Form.Group className="mb-3" controlId="taskTitle">
              <Form.Label className="text-success">Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Develop a Todos list website."
                onChange={(e) => setTitle(e.target.value)}
              />
              {/* <Form.Text className="text-muted">
                Main topic assign in your task.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="taskDescription">
              <Form.Label className="text-success">Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="In thi website we can assign task to employees and ..."
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <div className="form-row">
              <Form.Group controlId="taskFile" className="w-100 mb-3 me-sm-2">
                <Form.Label className="text-success">Task Related File</Form.Label>
                <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
              </Form.Group>

              <Form.Group controlId="duedate" className="w-100 mb-3">
                <Form.Label className="text-success">Set Due Date</Form.Label>
                <Form.Control type="date" name="duedate" placeholder="Due date" onChange={(e) => setDueDate(e.target.value)} />
              </Form.Group>
            </div>

            <div className="form-row">
              <Form.Group
                controlId="taskStateSelect"
                className="w-100 me-sm-2 mb-3"
              >
                <Form.Label className="text-success">Task Owners</Form.Label>
                <Multiselect
              options={taskOwner}
              displayValue="cat"
              className="bg-light text-dark multi-select-box"
              closeIcon={"cancel"}
            />
                {/* <Form.Select onChange={(e) => setSelectTaskOwner(e.target.value)}>

                  <>
                    <option selected disabled>Select Owner</option>
                    {
                      taskOwner.map(ls => (
                        <option value={ls.id}>{ls.username}</option>
                      ))
                    }
                  </>
                </Form.Select> */}

              </Form.Group>
              <Form.Group controlId="taskCategorySelect" className="w-100 mb-3">
                <Form.Label className="text-success">Category</Form.Label>
                <Form.Select onChange={(e) => setSelectCatagory(e.target.value)}>
                  <>
                    <option disabled selected>Select Catagory</option>
                    {
                      catagory?.map(ls => (
                        <option value={ls.id}>{ls.name}</option>
                      ))
                    }
                  </>
                </Form.Select>
              </Form.Group>
            </div>

            <div className="form-row">
              <Form.Group
                controlId="taskPrioritySelect"
                className="w-100 me-sm-2 mb-3"
              >
                <Form.Label className="text-success">Priority</Form.Label>
                <Form.Select onChange={(e) => setPriority(e.target.value)}>
                  <option disabled selected>Select Priority</option>
                  <option value="HIGH">High</option>
                  <option value="MEDIUM">Medium</option>
                  <option value="LOW">Low</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="taskStateSelect" className="w-100 mb-3">
                <Form.Label className="text-success">State</Form.Label>
                <Form.Select onChange={(e) => setStatus(e.target.value)}>
                  <option selected disabled>Select state</option>
                  <option value="OPEN">Open</option>
                  <option value="IN-PROGRESS">In Progress</option>
                  <option value="COMPLETED">Completed</option>
                </Form.Select>
              </Form.Group>
            </div>

            <div className="d-flex justify-content-center justify-content-sm-end align-items-center ">
              <Button
                variant="success"
                className="submit-btn"
                onClick={!currentURL ? handleUpdateFunction : handleSubmitBtn}
              >
                Submit
              </Button>
            </div>
          </Form>
          :
          <Loader />
      }
      <ToastContainer />
    </>
  );
};

export default ToDoForm;
