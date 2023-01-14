import React from "react";
import { NavLink as Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

const SortByContainer = ({data, setFilterToggle, setfilterData,setData}) => {

  // function that sorts data by ascending and descending order and sets filterToggle to true or false and set filterData or data
  const handleSorting = (e) => {
    if (e.target.value === "Ascending") {
      data.sort((a, b) => {
        const dateA = new Date(a.dueDate);
        const dateB = new Date(b.dueDate);
        return dateA - dateB;
    });
      setFilterToggle(true)
      setfilterData(data)
    }
    else{
      data.sort((a, b) => {
        const dateA = new Date(b.dueDate);
        const dateB = new Date(a.dueDate);
        return dateA - dateB;
    });
      setFilterToggle(false)
      setData(data)
    }
  }

  return (
    <div className="sort-add-btn">
      <div className="d-flex justify-content-center align-items-center">
        {/* Link to add new task */}
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
        {/* Select that changes the sorting of data */}
        <Form.Select onChange={handleSorting}>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </Form.Select>
      </Form.Group>
    </div>
  )
}

export default SortByContainer;
