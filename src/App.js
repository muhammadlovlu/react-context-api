// import logo from './logo.svg';
import { createContext, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Shipping from './Shipping/Shipping';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState('laptop');




  return (
    <CategoryContext.Provider value={[category, setCategory]}>
      <Header></Header>
      <Home></Home>
      <Shipping></Shipping>
    </CategoryContext.Provider>
  );
}

export default App;
