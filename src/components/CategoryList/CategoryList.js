import React, { useState } from "react";
import { toast } from "react-toastify";
import { URL } from "../../globalUrl";
import "./CategoryList.css";

const CategoriesList = ({ _id, category, CategoriesList, setCategoriesList, deleteHandler, setLoader }) => {
    // useState hooks to handle the state of the input field and the button name
    const [editedCategory, setEditedCategory] = useState();
    const [buttonToggle, setbuttonToggle] = useState(false)
    // get the user data from local storage
    const userData = JSON.parse(localStorage.getItem('user'))

    // function to handle the save button
    const saveButtonHandler = (e) => {
        // toggle the button state
        setbuttonToggle(!buttonToggle)
        // set the loader to true
        setLoader(true)
        // setup the headers for the fetch request
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${userData.token}`);
        myHeaders.append("Content-Type", "application/json");

        // setup the request body
        var raw = JSON.stringify({
            "name": editedCategory,
            "user": userData.id
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        // make the fetch request to update the category
        fetch(`${URL}/api/todo/unique-category/${category.id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                // turn off the loader
                setLoader(false)
                // show a success message
                toast.success("Catagory is Updated Successfully!", { position: "bottom-right" })
            })
            // eslint-disable-next-line
            .catch(error => console.log('error', error)); 
    };


    // function to handle the edit button
    const handleEdit = () => {
        // toggle the button state
        setbuttonToggle(!buttonToggle)
        // setEditedCategory(category.name)
    }

    return (
        <React.Fragment>

            {/* modal to confirm the deletion */}
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Confirmation</h5>
                        </div>
                        <div className="modal-body">
                            Are you sure to delete that catagory?
                            It will also delete tasks that are related to it!
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
                            <button type="button" className="btn-delete" data-dismiss="modal" onClick={() => deleteHandler(category)} >Yes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="category-list-container d-flex  w-100">
                {
                    !buttonToggle ?
                        <input type={"text"} value={category.name} readOnly id={_id} />
                        :
                        <input type="text" value={editedCategory} onChange={(e) => setEditedCategory(e.target.value)} />
                }

                <div className="post-btn-container d-flex justify-content-center">
                    {!buttonToggle ?
                        <button className="btn-edit" onClick={handleEdit}>
                            Edit
                        </button>
                        :
                        <button className="btn-edit" onClick={saveButtonHandler}>
                            Save
                        </button>

                    }

                    <button className="btn-delete" data-toggle="modal" data-target="#exampleModalCenter">Delete</button>
                </div>
            </div>
        </React.Fragment>
    );

}

export default CategoriesList;
