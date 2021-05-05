import React, { useContext } from 'react';
import { CategoryContext } from '../App';

const CategoryDetails = (props) => {
    const category = useContext(CategoryContext);

    return (
        <div>
            <h1>This a category details component from categories  </h1>
            <h5>Selected Catagory : {category}</h5>
        </div>
    );
};

export default CategoryDetails;