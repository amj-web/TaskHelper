import React, { useRef ,useState} from "react";
import { saveAs } from "file-saver";
import { NavLink as Link } from "react-router-dom";
import "./ViewTask.css";
const ViewTaskCom = ({
  Data, catagory, Assigned
}) => {

  const imageRef = useRef(null);
  const [imageUrl, setImageUrl] = useState(Data?.image);
  function handleDownload() {
   
    saveAs(imageUrl)
  }
 
  console.log("The Data is",Data)
  return (
    <div >
      <div className="m-4">
        <div className="mb-4">
          <h4 className="text-success">Title</h4>

          <p className="text-dark ms-2">{Data?.title}</p>
        </div>

        <div className="mb-4">
          <h4 className="text-success">Description</h4>

          <p className="text-dark ms-2">{Data?.description}</p>
        </div>

        <div className="form-row">
          <div id="taskFile" className="w-100 mb-3 me-sm-2">
            <h4 className="text-success">Task Related Image
              {/* <a href={Data?.image} target="_blank" download={Data?.image} rel="noopener noreferrer"> */}
              <button className="bg-success text-light border-0 ms-2 px-2 py-1 rounded" onClick={()=>handleDownload(Data.image)} >Download it!</button>
              {/* </a> */}

            </h4>
            <img src={Data?.image} ref={imageRef} width="100" height="100" />
          </div>

          <div id="duedate" className="w-100 mb-3">
            <h4 className="text-success">Due Date</h4>
            <p className="text-dark text-center">{Data?.dueDate}</p>
          </div>
        </div>

        <div className="form-row">
          <div id="taskStateSelect" className="w-100 me-sm-2 mb-3">
            <h4 className="text-success">Assigned To</h4>
            <p className="text-dark text-center">{Data?.assigned}</p>
          </div>
          <div id="taskCategorySelect" className="w-100 mb-3">
            <h4 className="text-success">Category</h4>
            <p className="text-dark text-center">{catagory}</p>
          </div>
        </div>

        <div className="form-row">
          <div id="taskPrioritySelect" className="w-100 me-sm-2 mb-3">
            <h4 className="text-success">Priority</h4>
            <p className="text-dark text-center">{Data?.priority}</p>
          </div>

          <div id="taskStateSelect" className="w-100 mb-3">
            <h4 className="text-success">State</h4>
            <p className="text-dark text-center">{Data?.status}</p>
          </div>
        </div>

        <div className="d-flex justify-content-center justify-content-sm-end align-items-center me-sm-3 ">
          <Link
            to="/"
            variant="success"
            className="close-btn bg-success text-light"
          >
            BACK
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewTaskCom;
