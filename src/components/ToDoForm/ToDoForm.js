import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Multiselect } from "multiselect-react-dropdown";
import { URL } from "../../globalUrl";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../Loader/Loader";
import { useHistory } from 'react-router-dom'
var assignees=""
const ToDoForm = ({ buttonName, setDisplayy,
  setUDisplayy }) => {
/* eslint-disable */
    const userData = JSON.parse(localStorage.getItem('user'))
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
  const [assignedTo, setassignedTo] = useState([])
  // const [assignees, setassignees] = useState("")
  // var assignees = ""
  // var assignedTo=[]
  
  const today = new Date();
  const minDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
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
        var arr = []
        result.map(ls => {
          var obj = { key: ls.id, cat: ls.username }
          arr.push(obj)
        })
        setTaskOwner(arr)
      }
      )
      .catch(error => console.log('error', error));

  }, [])

  const handleSubmitBtn = () => {
    

    // if(assignedTo.length!=0){
      // console.log("In the Condition")
      assignedTo.map((ls,index)=>{
        if(index==0){
          assignees=ls
        }
        else{
          var can = `,${ls}`
          assignees += can
        }
      })
    // }
    // console.log("The Assigned",assignees)
  
    
 
   
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
    if (!title || !description || !dueDate || !selectCatagory) {
      toast.error("Please fill the required fields!", { position: "bottom-right" })
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
    if (image !== undefined) {
      formdata.append("image", image);
    }
    if (selectTaskOwner!==undefined) {
      formdata.append("assigned", selectTaskOwner);
    }
    if(status !==undefined){
      formdata.append("status",status)
    }
    if (priority!==undefined) {
      formdata.append("priority", priority);
    }
    if(assignees!==null){
      // console.log("Here is Assignees",assignees)
      formdata.append("assigned", assignees);
    }
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch(`${URL}/api/todo/create-todo/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log("The Result is", result)
        if (typeof (result.title) == "object") {
          if (result.title != undefined) {
            toast.error(result.title[0], { position: "bottom-right" })
            setLoader(false)
          }
        }
        else {
          toast.success("Task Add Successfully!", { position: "bottom-right" })
          setTimeout(() => {
            history.push('/')
          }, 800)
        }

      })
      .catch(error => console.log('error', error));
    if (buttonName === "SAVE") {
      let d = "none";
      setDisplayy(d);
      setUDisplayy(d);
    }
  };
  const handleChange=(e)=>{
    console.log("Change is occur",e)
    assignedTo.push(e[e.length-1].cat)
    console.log(assignedTo)
  }

  return (
    <>
      {
        !loader ?
          <Form className="m-4">
            <Form.Group className="mb-3" controlId="taskTitle">
              <Form.Label className="text-success">Title<span style={{ color: "red", marginLeft: "0.2em" }}>*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Give your task a title"
                onChange={(e) => setTitle(e.target.value)}
              />

            </Form.Group>

            <Form.Group className="mb-3" controlId="taskDescription">
              <Form.Label className="text-success">Description<span style={{ color: "red", marginLeft: "0.1em" }}>*</span></Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Give your task a description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>

            <div className="form-row">
              <Form.Group controlId="taskFile" className="w-100 mb-3 me-sm-2">
                <Form.Label className="text-success">Task Related File</Form.Label>
                <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
              </Form.Group>

              <Form.Group controlId="duedate" className="w-100 mb-3">
                <Form.Label className="text-success">Set Due Date<span style={{ color: "red", marginLeft: "0.1em" }}>*</span></Form.Label>
                <Form.Control type="date" name="duedate" min={minDate} placeholder="Due date" onChange={(e) => setDueDate(e.target.value)} />
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
                  onSelect={handleChange}
                />
              </Form.Group>
              <Form.Group controlId="taskCategorySelect" className="w-100 mb-3">
                <Form.Label className="text-success">Category<span style={{ color: "red", marginLeft: "0.1em" }}>*</span></Form.Label>
                <Form.Select onChange={(e) => setSelectCatagory(e.target.value)}>
                  <>
                    <option disabled selected>Select Catagory</option>
                    {
                      catagory?.map((ls,index) => (
                        <option key={index} value={ls.id}>{ls.name}</option>
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
                onClick={handleSubmitBtn}
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
