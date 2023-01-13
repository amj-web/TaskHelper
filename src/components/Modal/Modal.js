import React from "react";
import UpdateTask from "../UpdateTask/UpdateTask";
// import ViewTask from "../ViewTask/ViewTask";

const Modal = ({
  displayy,
  setDisplayy,
  uDisplayy,
  setUDisplayy,
  updateTaskId,
}) => {
  return (
    <div className="modal"  style={{ zIndex: 100, display: displayy }}>
      {/* <ViewTask
        setDisplayy={setDisplayy}
        vDisplayy={vDisplayy}
        setVDisplayy={setVDisplayy}
        singleData = {singleData}
        catagoryOwner={catagoryOwner}
        userOwner={userOwner}
      /> */}
      <UpdateTask
        setDisplayy={setDisplayy}
        uDisplayy={uDisplayy}
        setUDisplayy={setUDisplayy}
        updateTaskId={updateTaskId}
      />
    </div>
  );
};

export default Modal;
