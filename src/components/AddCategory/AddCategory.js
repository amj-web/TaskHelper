import React, { useState } from "react";
import "./AddCategory.css";
const AddCategory = ({ CategoriesList, setCategoriesList }) => {

    // state to hold the input value for the new category
    const [inputCategory, setInputCategory] = useState("");

    // function to handle input changes and update the inputCategory state
    const inputHandler = (event) => {
        setInputCategory((prevState) => {
            return (prevState = event.target.value);
        });
    };

    // function to handle adding a new category to the CategoriesList state
    const AddNewCategory = (event) => {
        event.preventDefault();
        // add the new category to the list and clear the input field
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
                    // disable the button if the input field is empty
                    disabled={IsDisable()}
                    onClick={AddNewCategory}
                    className="category-button h-100"
                >
                    Add Category
                </button>
            </div>
        </React.Fragment>
    );
    // function to check if the Add Category button should be disabled
    function IsDisable() {
        let disable = inputCategory.trim().length === 0 ? "disable" : "";
        return disable;
    }
};

export default AddCategory;
