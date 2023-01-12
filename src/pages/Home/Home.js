import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal/Modal";
import FilterByContainer from "../../components/FilterByContainer/FilterByContainer";
import SortByContainer from "../../components/SortByContainer/SortByContainer";
import Task from "../../components/Task/Task";
import Loader from "../../components/Loader/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom'
import "./Home.css";
import { URL } from "../../globalUrl";
const Home = () => {
  const userData = JSON.parse(localStorage.getItem('user'))
  let [displayy, setDisplayy] = useState("none");
  let [uDisplayy, setUDisplayy] = useState("none");
  let [vDisplayy, setVDisplayy] = useState("none");
  const [data, setData] = useState([])
  const [catagory, setcatagory] = useState()
  const [singleData, setSingleData] = useState()
  const [loader, setLoader] = useState(true)
  const [updateTaskId, setUpdateTaskId] = useState()
  const [filterToggle, setFilterToggle] = useState(false)
  const [filterData, setfilterData] = useState()
  const history = useHistory()
  const [catagoryOwner, setcatagoryOwner] = useState()
  const [userOwner, setuserOwner] = useState()

  useEffect(() => {
    if (userData != null) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${userData.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${URL}/api/auth/check/`, requestOptions)
        .then(response => response.json())
        .then(result => {
          // console.log(result)
          if (result.detail != undefined) {
            toast.error("Please login first", { position: "bottom-right" })
            setTimeout(() => {
              history.push('/login')
            }, 1000)
          }
          else {
            setTimeout(() => {
              setLoader(false)
            }, 500)
          }
        })
        .catch(error => {
          console.log('error', error)
          toast.error("Please login first", { position: "bottom-right" })
          setTimeout(() => {
            history.push('/login')
          }, 1000)
        });
    }
    else {
      toast.error("Please login first!", { position: "bottom-right" })
      setTimeout(() => {
        history.push('/login')
      }, 1000)
    }
    if (userData != null) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${userData.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${URL}/api/todo/user-todo/?userID=${userData.id}`, requestOptions)
        .then(response => response.json())
        .then(result => {
          // console.log("The Result--->", result)
          // if(result.message="User dont have any todo"){
          //   setData([])
          //   setLoader(false)
          // }else{
          //   setData(result)
          //   setLoader(false)
          // }
          if (result.message != undefined) {
            if (result.message == "User dont have any todo") {
              setData([])
            }
          }
          else {
            setData(result)
          }
          setLoader(false)

        })
        .catch(error => console.log('error', error));
    }

  }, []);
  const handleFilter = (id) => {
    setData(data?.filter(ls => {
      if (ls.id != id) {
        return ls
      }
    }))
  }
  // console.log("The Data is", window.location.href.split('/')[3])

  return (
    <React.Fragment>
      {!loader ?
        <div className="home-page w-full px-3 py-4 ">
          <Modal
            displayy={displayy}
            setDisplayy={setDisplayy}
            uDisplayy={uDisplayy}
            setUDisplayy={setUDisplayy}
            vDisplayy={vDisplayy}
            setVDisplayy={setVDisplayy}
            singleData={singleData}
            updateTaskId={updateTaskId}
            catagoryOwner={catagoryOwner}
            userOwner={userOwner}

          />
          <FilterByContainer setData={setData} data={data} setFilterToggle={setFilterToggle} setfilterData={setfilterData} />
          <div className="home-container mx-auto w-full p-3 mt-3">
            <SortByContainer setData={setData} data={data} setFilterToggle={setFilterToggle} setfilterData={setfilterData} />
            <div className="task-list my-4 row px-4">

              {
                !filterToggle ?
                  <>
                    {
                      data.length == 0 ? <center><h3>Hurrah! there is no task to be Completed</h3></center>
                        :
                        data?.map(ls => (
                          <Task
                            setDisplayy={setDisplayy}
                            setUDisplayy={setUDisplayy}
                            setVDisplayy={setVDisplayy}
                            setSingleData={setSingleData}
                            Data={ls}
                            setcatagory={setcatagory}
                            setLoader={setLoader}
                            handleFilter={handleFilter}
                            setUpdateTaskId={setUpdateTaskId}
                            setcatagoryOwner={setcatagoryOwner}
                            catagoryOwner={catagoryOwner}
                            setuserOwner={setuserOwner}
                          />
                        ))
                    }
                  </>
                  :

                  filterData?.map(ls => (
                    <Task
                      setDisplayy={setDisplayy}
                      setUDisplayy={setUDisplayy}
                      setVDisplayy={setVDisplayy}
                      setSingleData={setSingleData}
                      Data={ls}
                      setcatagory={setcatagory}
                      setLoader={setLoader}
                      handleFilter={handleFilter}
                      setUpdateTaskId={setUpdateTaskId}
                      setcatagoryOwner={setcatagoryOwner}
                      catagoryOwner={catagoryOwner}
                      setuserOwner={setuserOwner}
                    />
                  ))

              }

              {/* <Task
               setDisplayy={setDisplayy}
               setUDisplayy={setUDisplayy}
               setVDisplayy={setVDisplayy}
             />
             <Task
               setDisplayy={setDisplayy}
               setUDisplayy={setUDisplayy}
               setVDisplayy={setVDisplayy}
             /> */}
              {/* <Loader /> */}
            </div>
          </div>
          <ToastContainer />
        </div>
        :
        <Loader />
      }

    </React.Fragment>
  );
};

export default Home;
