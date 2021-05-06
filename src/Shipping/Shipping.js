import React, { useContext } from 'react';
import { CategoryContext } from '../App';

const Shipping = () => {
    const [category, setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h4>This is a SHIPPING component counting status : {category}</h4>
       
        </div>
    );
};

export default Shipping;