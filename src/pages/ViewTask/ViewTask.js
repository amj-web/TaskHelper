import React from "react";
import "./ViewTask.css";
import ViewTaskCom from "../../components/ViewTask/ViewTaskCom";
import { useLocation } from "react-router-dom";
const ViewTask = (singleData, catagoryOwner, userOwner) => {
  // useLocation hook from react-router-dom is used to get the current location's state
  const location = useLocation()
  // Destructuring the location state to get the task data, category and assigned user
  var Data = location.state[0].Data
  var catagory =location.state[0].catagoryOwner
  var Assigned = location.state[0].userOwner
  return (
    <div className="w-100 px-3 py-4">
      <div className="view-task-container w-100 py-4 pb-2 mx-auto">
        <h1 className="text-success text-center  add-task-heading">
          Your Task
        </h1>
        <ViewTaskCom
          buttonName="SAVE"
          Data={Data}
          Assigned={Assigned}
          catagory={catagory}
        />
      </div>
    </div>
  );
};

export default ViewTask;
