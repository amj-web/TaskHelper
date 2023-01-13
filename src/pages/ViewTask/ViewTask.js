import React from "react";
import "./ViewTask.css";
import ViewTaskCom from "../../components/ViewTask/ViewTaskCom";
import { useLocation } from "react-router-dom";
const ViewTask = (singleData, catagoryOwner, userOwner) => {
  const location = useLocation()
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
        //   singleData={singleData}
          Assigned={Assigned}
          catagory={catagory}
        //   userOwner={userOwner}
        />
      </div>
    </div>
  );
};

export default ViewTask;
