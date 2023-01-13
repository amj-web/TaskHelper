import React from "react";
import UpdateTask from "../UpdateTask/UpdateTask";

const Modal = ({
displayy,
setDisplayy,
uDisplayy,
setUDisplayy,
updateTaskId,
}) => {
return (
<div className="modal" style={{ zIndex: 100, display: displayy }}>
{/* Conditionally render the update task component, when the 'update' modal is open */}
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