import React, { useContext } from 'react';
import { CategoryContext } from '../App';
import Categories from '../Categories/Categories';

const Home = () => {
    const category = useContext(CategoryContext);
    return (
        <div>
            <h4>This is A home component Counting Status : {category}</h4>
            <Categories />
        </div>
    );
};

export default Home;