// import logo from './logo.svg';
import { createContext, useState } from 'react';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import Shipping from './Shipping/Shipping';

export const CategoryContext = createContext();

function App() {
  const [count, setCount] = useState(0);




  return (
    <CategoryContext.Provider value={count}>
      <Header count={count} setCount={setCount} />
      <Home />
      <Shipping />
    </CategoryContext.Provider>
  );
}

export default App;
