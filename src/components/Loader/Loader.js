import React from "react";
import { ToastContainer } from "react-toastify";

const Loader = () => {
  return (
    <div className="loader-screen mt-3">
      <div className="loader"></div>
      <h3 className="text-success ms-2 fw-bold">Please wait...</h3>
      <ToastContainer/>
    </div>

  );
};
export default Loader;
