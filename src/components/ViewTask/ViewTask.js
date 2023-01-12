import React, { useEffect, useState } from "react";
import { URL } from "../../globalUrl";
import "./ViewTask.css";

const ViewTask = ({ setDisplayy, vDisplayy, setVDisplayy, singleData,catagoryOwner,userOwner }) => {
  const handleSubmitBtn = () => {
    let d = "none";
    setDisplayy(d);
    setVDisplayy(d);
  };

  return (
    <div className="w-100 px-3" style={{ display: vDisplayy }}>
      <div
        className="task-view-container w-100 py-4 mx-auto"

      >
        <h1 className="text-success text-center  task-view-heading">
          Todo Task Here!
        </h1>
        <div className="m-4">
          <div className="mb-4">
            <h3 className="text-success">Title</h3>

            <p className="text-light">{singleData?.title}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-success">Description</h3>

            <p className="text-light">
              {singleData?.description}
            </p>
          </div>

          <div className="form-row">
            <div controlId="taskFile" className="w-100 mb-3 me-sm-2">
              <h3 className="text-success">Task Related File</h3>
              <img src={singleData?.image} width="100" height="100" />
            </div>

            <div controlId="duedate" className="w-100 mb-3">
              <h3 className="text-success">Due Date</h3>
              <p className="text-light text-center">{singleData?.dueDate}</p>
            </div>
          </div>

          <div className="form-row">
            <div controlId="taskStateSelect" className="w-100 me-sm-2 mb-3">
              <h3 className="text-success">Task Owners</h3>
              <p className="text-light text-center">{userOwner}</p>
            </div>
            <div controlId="taskCategorySelect" className="w-100 mb-3">
              <h3 className="text-success">Category</h3>
              <p className="text-light text-center">{catagoryOwner}</p>
            </div>
          </div>

          <div className="form-row">
            <div controlId="taskPrioritySelect" className="w-100 me-sm-2 mb-3">
              <h3 className="text-success">Priority</h3>
              <p className="text-light text-center">{singleData?.priority}</p>
            </div>

            <div controlId="taskStateSelect" className="w-100 mb-3">
              <h3 className="text-success">State</h3>
              <p className="text-light text-center">{singleData?.status}</p>
            </div>
          </div>

          <div className="d-flex justify-content-center justify-content-sm-end align-items-center me-sm-3 ">
            <button
              variant="success"
              className="close-btn bg-success text-light"
              onClick={handleSubmitBtn}
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewTask;
