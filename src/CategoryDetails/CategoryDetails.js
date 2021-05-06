import React, { useContext } from 'react';
import { CategoryContext } from '../App';


const CategoryDetails = (props) => {
    const { name } = props.product;


    return (
        <div>
            <h1>This is Details :</h1>
            <h6>Selected Items : {name} </h6>
        </div>
    );
};

export default CategoryDetails;