import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL } from "../../globalUrl";
import { useHistory } from 'react-router-dom'
import Loader from "../../components/Loader/Loader";

const Signup = () => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()
  const [loader, setLoader] = useState(false)
  const history = useHistory()
  const handleSignup = (e) => {
    setLoader(true)
    e.preventDefault()
    // console.log("These are the States", name, email, password, confirmPassword)
    if(!name || !email || !password || !confirmPassword ){
      setLoader(false)
      toast.error("Please fill all the fields!",{position:"bottom-right"})
      return
    }
    if(password!=confirmPassword){
      setLoader(false)
      toast.error("Password and Confirm Passowrd are not matched!",{position:"bottom-right"})
      return
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": name,
      "email": email,
      "password": password
    });

    var requestOptions = {
      method: 'POST',
      mode: 'cors',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${URL}/api/auth/register/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        if(typeof(result.username)=="object" || typeof(result.email)=="object"){
          if(result.username!=undefined){
            toast.error(result.username[0],{position:"bottom-right"})
          }
          else{
            toast.error(result.email[0],{position:"bottom-right"})
          }
          setLoader(false)
        }
        else{
          // setLoader(false)
          setTimeout(() => {
            history.push('/login')
          }, 1000)
          toast.success("Sign up successfully!",{position:"bottom-right"})
          
        }
      })
      .catch(error => {
        console.log('error', error)
        toast.error(error,{position:"bottom-right"})
    });
  }

  return (
    <>
    {
       !loader?
       <div className="signUp-form-container">
         <form className="signUp-form">
           <div className="signUp-form-content">
             <h3 className="signUp-form-title text-success">Register Now!</h3>
             <div className="text-center">
               Already registered?{" "}
               <Link className="link-success" to={"/login"}>
                 Sign In
               </Link>
             </div>
             <div className="form-group mt-3">
               <label className="text-success">Full Name</label>
               <input
                 type="email"
                 className="form-control mt-1"
                 placeholder="e.g Jane Doe"
                 onChange={(e) => setName(e.target.value)}
               />
             </div>
             <div className="form-group mt-3">
               <label className="text-success">Email address</label>
               <input
                 type="email"
                 className="form-control mt-1"
                 placeholder="Email Address"
                 onChange={(e) => setEmail(e.target.value)}
               />
             </div>
             <div className="form-group mt-3">
               <label className="text-success">Password</label>
               <input
                 type="password"
                 className="form-control mt-1"
                 placeholder="Password"
                 onChange={(e) => setPassword(e.target.value)}
               />
             </div>
             <div className="form-group mt-3">
               <label className="text-success">Confirm Password</label>
               <input
                 type="password"
                 className="form-control mt-1"
                 placeholder="Password"
                 onChange={(e) => setConfirmPassword(e.target.value)}
               />
             </div>
             <div className="d-grid gap-2 my-3">
               <button type="submit" className="btn btn-success" onClick={handleSignup}>
                 Submit
               </button>
             </div>
           </div>
         </form>
         
       </div>
       :
       <Loader/>
    }
    <ToastContainer/>
    </>
    
  )
}

export default Signup;
