import React, { useState, useEffect } from "react";
import "./Category.css";
/* eslint-disable */
import AddCategory from "../../components/AddCategory/AddCategory";
import CategoryList from "../../components/CategoryList/CategoryList";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { URL } from "../../globalUrl";
import { useHistory } from 'react-router-dom'
import Loader from "../../components/Loader/Loader";
const Category = () => {
  const userData = JSON.parse(localStorage.getItem('user'))
  const [CategoriesList, setCategoriesList] = useState([]);
  const [loader, setLoader] = useState(true)
  const [InputCatagory, setInputCatagory] = useState()

  const history = useHistory()
  useEffect(() => {
    if (userData !== null) {
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
          if (result.detail !== undefined) {
            toast.error("Please login first", { position: "bottom-right" })
            // setTimeout(() => {
              localStorage.removeItem("user");
            history.push('/login')
            // }, 1000)
          }
          else {
            // setTimeout(() => {
            setLoader(false)
            // }, 500)
          }
        })
        .catch(error => {
          console.log('error', error)
          toast.error("Please login first", { position: "bottom-right" })
          // setTimeout(() => {
          localStorage.removeItem("user");
          history.push('/login')
          // }, 1000)
        });

    }
    else {
      toast.error("Please login first!", { position: "bottom-right" })
      setTimeout(() => {
        localStorage.removeItem("user");
        history.push('/login')
      }, 1000)
    }
    if (userData !== null) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${userData.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${URL}/api/todo/user-category/`, requestOptions)
        .then(response => response.json())
        .then(result => {
          // console.log(result)
          if(result.message!==undefined){
          
            if (result.message === "User dont have any category") {
              setCategoriesList([])
            }
          }
          
          else {
            setCategoriesList(result)
          }
        })
        .catch(error => console.log('error', error));
    }


  }, [])
  useEffect(() => {
    if (userData !== null) {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", `Bearer ${userData.token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };

      fetch(`${URL}/api/todo/user-category/`, requestOptions)
        .then(response => response.json())
        .then(result => {
          // console.log(result)
          if(result.message!==undefined){
          
            if (result.message == "User dont have any category") {
              setCategoriesList([])
            }
          }
          
          else {
            setCategoriesList(result)
          }
        })
        .catch(error => console.log('error', error));
    }

  }, [loader])


  const inputHandler = (e) => {
    e.preventDefault();
    setLoader(true)
    if (!InputCatagory) {
      toast.error("Please fill the input field!", { position: "bottom-right" })
      setLoader(false)
      return
    }
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userData.token}`);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "name": InputCatagory,
      "user": userData.id
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${URL}/api/todo/create-category/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (typeof (result.name) == "object" || typeof (result.user) == "object") {
          if (result.user !== undefined) {
            toast.error(result.user[0], { position: "bottom-right" })
          }
          else {
            toast.error(result.name[0], { position: "bottom-right" })
          }
          setLoader(false)
        }
        else {
          toast.success(result.message, { position: 'bottom-right' })
          setLoader(false)
          setCategoriesList([...CategoriesList, { id: 14, name: InputCatagory, user: userData.ID }]);
          setInputCatagory(null)
        }
        // console.log(result)

      })
      .catch(error => console.log('error', error));
  }




  const deleteHandler = (event) => {
    setLoader(true)
    // console.log("The Deleted Catagory", event)
    setCategoriesList(
      CategoriesList.filter(ls => {
        return ls.id !== event.id
      })
    )
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${userData.token}`);

    var raw = "";

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${URL}/api/todo/unique-category/${event.id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        toast.success("Catagory has been deleted!",{position:"bottom-right"})
      })
      .catch(error => console.log('error', error));
    setLoader(false)
    // console.log("The Catagories are", CategoriesList)


  };

  // console.log("This is Catagory List", CategoriesList.length)

  return (

    <React.Fragment>
      {!loader ?
        <div className="w-full px-3 py-4">
          <div className="category-page w-100 d-flex justify-content-center flex-column py-4 px-3 px-lg-0 mx-auto">
            <h1 className="text-success text-center fw-bold category-heading">
              You can add New Category Here!
            </h1>
            <div className="category-container w-100 mx-auto d-flex justify-content-center mt-3">
              {/* <AddCategory
                CategoriesList={CategoriesList}
                setCategoriesList={setCategoriesList}
              /> */}
              <React.Fragment>
                <div className="add-category-container w-100 d-flex justify-content-center align-items-center py-auto">
                  <input
                    type="text"
                    name="category"
                    id="category"
                    // value={inputCategory}
                    autoFocus
                    autoComplete="true"
                    autoCorrect="true"
                    onChange={(e) => setInputCatagory(e.target.value)}
                    className="category-input"
                  />
                  <button
                    type="submit"
                    // disabled={IsDisable()}
                    onClick={inputHandler}
                    className="category-button h-100"
                  >
                    Add Category
                  </button>
                </div>
              </React.Fragment>
            </div>
            <div className="categories-list-container w-100 my-4 mx-auto d-flex justify-content-center flex-column">
              {
                (CategoriesList.length !== 0) ?
                  CategoriesList?.map((category,index) => (
                    <CategoryList
                      key={index}
                      _id={category._id}
                      category={category}
                      CategoriesList={CategoriesList}
                      setCategoriesList={setCategoriesList}
                      deleteHandler={deleteHandler}
                      setLoader={setLoader}
                    />
                  )) :
                  null
              }
            </div>
          </div>
        </div>
        :
        <Loader />
      }

      <ToastContainer />
    </React.Fragment>

  );
};

export default Category;
