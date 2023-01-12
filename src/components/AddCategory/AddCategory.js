import React, { useState } from "react";
import "./AddCategory.css";
import { URL } from "../../globalUrl";
const AddCategory = ({ CategoriesList, setCategoriesList }) => {

    const [inputCategory, setInputCategory] = useState("");

    const inputHandler = (event) => {
        setInputCategory((prevState) => {
            return (prevState = event.target.value);
        });
    };
    // console.log("The Catagory is", inputCategory)

    const AddNewCategory = (event) => {
        event.preventDefault();
        setCategoriesList([...CategoriesList, { _id: Math.random(), category: inputCategory.trim() }]);
        setInputCategory("");
    };

    return (
        <React.Fragment>
            <div className="add-category-container w-100 d-flex justify-content-center align-items-center py-auto">
                <input
                    type="text"
                    name="category"
                    id="category"
                    value={inputCategory}
                    autoFocus
                    autoComplete="true"
                    autoCorrect="true"
                    onChange={inputHandler}
                    className="category-input"
                />
                <button
                    type="submit"
                    disabled={IsDisable()}
                    onClick={AddNewCategory}
                    className="category-button h-100"
                >
                    Add Category
                </button>
            </div>
        </React.Fragment>
    );
    function IsDisable() {
        let disable = inputCategory.trim().length === 0 ? "disable" : "";
        return disable;
    }
};

export default AddCategory;
