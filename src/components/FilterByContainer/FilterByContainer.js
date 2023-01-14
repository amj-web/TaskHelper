import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { URL } from "../../globalUrl";

const FilterByContainer = ({ setData, data, setFilterToggle, setfilterData }) => {
  // Store user data from local storage in variable
  const userData = JSON.parse(localStorage.getItem('user'))
  // State variable to hold user's categories
  const [catagory, setcatagory] = useState([])
  // State variable to hold the value selected for filtering
  // eslint-disable-next-line
  const [filterValue, setFilterValue] = useState()
  // Fetch user's categories on component mount
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
        if (result.message === "User dont have any category") {
          setcatagory([])
        }
        else {
          setcatagory(result)
        }
      })
      // eslint-disable-next-line
      .catch(error => console.log('error', error)); 
      // eslint-disable-next-line
  }, [])

  // Function to handle filtering by priority
  const handlePriorityfilter = (e) => {
    if (e.target.value === "ALL") {
      // If "All" is selected, set filter toggle to false
      setFilterToggle(false)
    }
    else {
      // Set filter toggle to true
      setFilterToggle(true)
      // Set filter value to the selected value
      setFilterValue(e.target.value)
      // Filter the data by the selected value
      // eslint-disable-next-line
      setfilterData(data.filter(ls => {
        if (ls.priority === e.target.value) {
          return ls
        }
      }))
    }
  }

  // Function to handle filtering by status
  const handleStatusfilter = (e) => {
    if (e.target.value === "ALL") {
      setFilterToggle(false)
    }
    else {
      setFilterToggle(true)
      setFilterValue(e.target.value)
      // eslint-disable-next-line
      setfilterData(data.filter(ls => {
        if (ls.status === e.target.value) {
          return ls
        }
      }))
    }
  }

  // Function to handle filtering by category
  const handleCatagoryFilter = (e) => {
    if (e.target.value === "ALL") {
      setFilterToggle(false)
    }
    else {
      setFilterToggle(true)
      setFilterValue(e.target.value)
      // eslint-disable-next-line
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
                  catagory.map((ls, index) => (
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
            <option value="ALL" selected>All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </Form.Select>
        </Form.Group>

        <Form.Group
          controlId="taskStatusSelect"
          className="d-flex flex-column flex-sm-row justify-content-center align-items-center me-1 me-sm-0"
        >
          <Form.Label className="text-success me-sm-2 pt-2">
            Status
          </Form.Label>
          <Form.Select onChange={handleStatusfilter}>
            <option value="ALL" selected>All</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
            <option value="Not Started">Not Started</option>
          </Form.Select>
        </Form.Group>
      </div>
    </div>
  );
}
export default FilterByContainer;