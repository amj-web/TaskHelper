import React from "react";
import { ToastContainer } from "react-toastify";

const Loader = () => {
  return (
    <div className="loader-screen mt-3">
      {/* The loader animation */}
      <div className="loader"></div>
      {/* The loading message */}
      <h3 className="text-success ms-2 fw-bold">Please wait...</h3>
      {/* ToastContainer for displaying toasts */}
      <ToastContainer/>
    </div>
  );
};
export default Loader;
