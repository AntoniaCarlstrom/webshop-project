import './css/App.css';
import Products from './components/Products';
import Cart from './components/Cart'
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';
// import { Route, NavLink, HashRouter } from 'react-router-dom';



async function getData() {
  const url = "https://webshop-655ff-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("products");

  const handleNavClick = (page) => {
    setCurrentPage(page);
  };

  const [items, setItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const data = await getData();
      setItems(data);
    }

    fetchItems();
  }, []);

  return (
    <div className="App">
      <Navbar handleNavClick={handleNavClick} />
      {currentPage === "products" ? <Products initialItems={items} /> : <Cart initialItems={items} />}
      {/* <Products initialItems={items} /> */}
    </div>
  );
}
