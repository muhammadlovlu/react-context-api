import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../App';
import CategoryDetails from '../CategoryDetails/CategoryDetails';


 const allProducts=[
    {name:'Lenovo', category:'laptop'},
    {name:'Asus', category:'laptop'},
    {name:'Dell', category:'laptop'},
    {name:'Samsung', category:'mobile'},
    {name:'Nokia', category:'mobile'},
    {name:'Apple', category:'mobile'},
    {name:'Canon', category:'camera'},
    {name:'Nikkon', category:'camera'},
    {name:'Sony', category:'camera'}
]


const Categories = () => {
const [category] = useContext(CategoryContext);
const [products, setProducts] = useState([]);

useEffect(()=>{
console.log({category})
    const matchedProduct = allProducts.filter(pd => pd.category === category.toLowerCase());
setProducts(matchedProduct)
},[category])
    return (
        <div>
            <h1>Select you category : {category} </h1>
      {
          products.map(pd => <CategoryDetails product = {pd}></CategoryDetails>)
      }
       
        </div>
    );
};

export default Categories;