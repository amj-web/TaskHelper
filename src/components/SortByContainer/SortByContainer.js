import React from "react";
import { NavLink as Link } from "react-router-dom";
import Form from "react-bootstrap/Form";


const SortByContainer = ({data, setFilterToggle, setfilterData,setData}) => {

  const handleASorting = (e) => {
    if (e.target.value === "Ascending") {
      // console.log("The Data in Ascend",data)
      data.sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return dateA - dateB;
    });
    // console.log("The Data in Ascendinf",data)
      setFilterToggle(true)
      setfilterData(data)
    }
  }
  const handleSorting = (e) => {
    if (e.target.value === "Ascending") {
      // console.log("The Data in Ascend",data)
      data.sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return dateA - dateB;
    });
    // console.log("The Data in Ascendinf",data)
      setFilterToggle(true)
      setfilterData(data)
    }
    else{
      // console.log("The Data in Ascend",data)
      data.sort((a, b) => {
        const dateA = new Date(b.dueDate);
        const dateB = new Date(a.dueDate);
        return dateA - dateB;
    });
    // console.log("The Data in desc",data)
      setFilterToggle(false)
      setData(data)
    }
  }

  return (
    <div className="sort-add-btn">
      <div className="d-flex justify-content-center align-items-center">
        <Link to="/todo" className={"add-btn ms-md-2"}>
          Add New Task
        </Link>
      </div>

      <Form.Group
        controlId="sortTask"
        className="d-flex justify-content-center align-items-center ms-3"
      >
        <Form.Label className="text-success me-sm-2 pt-2 w-50">
          Sort by
        </Form.Label>
        <Form.Select onChange={handleSorting}>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </Form.Select>
      </Form.Group>
    </div>
  )
}

export default SortByContainer;