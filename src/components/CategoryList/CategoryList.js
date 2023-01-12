import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { URL } from "../../globalUrl";
import "./CategoryList.css";

const CategoriesList = ({ _id, category, CategoriesList, setCategoriesList, deleteHandler, setLoader }) => {
    const userData = JSON.parse(localStorage.getItem('user'))
    const [editedCategory, setEditedCategory] = useState();
    const [buttonName, setButtonName] = useState("Edit");
    const [buttonToggle, setbuttonToggle] = useState(false)
    // console.log("Here is Caatagory list",typeof(userData.id))


    const saveButtonHandler = (e) => {
        setbuttonToggle(!buttonToggle)
        setLoader(true)
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${userData.token}`);
        myHeaders.append("Content-Type", "application/json");

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

        fetch(`${URL}/api/todo/unique-category/${category.id}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log(result)
                setLoader(false)
                toast.success("Catagory is Updated Successfully!", { position: "bottom-right" })
            })
            .catch(error => console.log('error', error));
    };

    const editHandler = () => {
        const inputEl = document.getElementById(_id);
        setEditedCategory(inputEl.value);
    };

    const handleEdit = () => {
        setbuttonToggle(!buttonToggle)
        // setEditedCategory(category.name)
    }

    return (
        <React.Fragment>

            <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLongTitle">Confirmation</h5>
                        </div>
                        <div class="modal-body">
                            Are you sure to delete that catagory?
                            It will also delete tasks that are related to it!
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">No</button>
                            <button type="button" class="btn btn-primary" data-dismiss="modal" onClick={() => deleteHandler(category)} >Yes</button>
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

                {/* <h4>{editedCategory}</h4> */}
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

                    <button  className="btn-delete" data-toggle="modal" data-target="#exampleModalCenter">
                        Delete
                    </button>
                </div>
            </div>

        </React.Fragment>
    );
};

export default CategoriesList;
