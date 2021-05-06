import React, { useContext } from 'react';
import { CategoryContext } from '../App';



const Header = () => {
    const [category, setCategory] = useContext(CategoryContext);
    
    return (
        <div>
            <h1>This is A HEADER Components counting : {category}</h1>
            <button onClick={() => setCategory('Laptop')}>Laptop</button>
            <button onClick={() => setCategory('Mobile')}>mobile</button>
            <button onClick={() => setCategory('Camera')}>Camera</button>
        </div>
    );
};

export default Header;