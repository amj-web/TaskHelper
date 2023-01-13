import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { URL } from "../../globalUrl";


const FilterByContainer = ({ setData, data, setFilterToggle, setfilterData }) => {
  const userData = JSON.parse(localStorage.getItem('user'))
  const [catagory, setcatagory] = useState([])
  const [filterValue, setFilterValue] = useState()
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
        if (result.message === "User dont have any category") {
          setcatagory([])
        }
        else {
          setcatagory(result)
        }

      })
      .catch(error => console.log('error', error));
  }, [])
  const handlePriorityfilter = (e) => {
    if (e.target.value === "ALL") {
      setFilterToggle(false)
      // setfilterData(data)
    }
    else {
      setFilterToggle(true)
      setFilterValue(e.target.value)
      setfilterData(data.filter(ls => {
        if (ls.priority === e.target.value) {
          return ls
        }
      }))
    }

  }

  const handleStatusfilter=(e) =>{
    if (e.target.value === "ALL") {
      setFilterToggle(false)
      // setfilterData(data)
    }
    else {
      setFilterToggle(true)
      setFilterValue(e.target.value)
      setfilterData(data.filter(ls => {
        if (ls.status === e.target.value) {
          return ls
        }
      }))
    }
  }

  const handleCatagoryFilter =(e) =>{
    
    if (e.target.value === "ALL") {
      setFilterToggle(false)
      // setfilterData(data)
    }
    else {
      setFilterToggle(true)
      setFilterValue(e.target.value)
      setfilterData(data.filter(ls => {
        if (ls.category === e.target.value) {
          return ls
        }
      }))
    }
  }
  return (
    <div className="filter-container mx-auto w-full p-3">
      <Form.Label className="filer-heading text-success text-center ms-lg-2 pt-1 fs-5">
        Filter By:
      </Form.Label>
      <div className="filter-items">
        <Form.Group
          controlId="taskCategorySelect"
          className="d-flex flex-column flex-sm-row justify-content-center align-items-center me-1 me-sm-0"
        >
          <Form.Label className="text-success me-sm-2 pt-2">
            Category
          </Form.Label>
          <Form.Select onChange={handleCatagoryFilter}>
            {
              <>
                <option value="ALL" selected>All</option>
                {
                  catagory.map((ls,index) => (
                    <option key={index} value={ls.id}>{ls.name}</option>
                  ))
                }
              </>
            }
          </Form.Select>
        </Form.Group>

        <Form.Group
          controlId="taskPrioritySelect"
          className="d-flex flex-column flex-sm-row justify-content-center align-items-center me-1 me-sm-0"
        >
          <Form.Label className="text-success me-sm-2 pt-2">
            Priority
          </Form.Label>
          <Form.Select onChange={handlePriorityfilter}>
            <option selected value="ALL">All</option>
            <option value="HIGH">High</option>
            <option value="MEDIUM">Medium</option>
            <option value="LOW">Low</option>
          </Form.Select>
        </Form.Group>

        <Form.Group
          controlId="taskStateSelect"
          className="d-flex flex-column flex-sm-row justify-content-center align-items-center"
        >
          <Form.Label className="text-success me-sm-2 pt-2">
            State
          </Form.Label>
          <Form.Select  onChange={handleStatusfilter}>
            <option value="ALL" selected>All</option>
            <option value="OPEN">Open</option>
            <option value="IN-PROGRESS">In Progress</option>
            <option value="COMPLETE">Completed</option>
          </Form.Select>
        </Form.Group>
      </div>
    </div>
  )
}

export default FilterByContainer;