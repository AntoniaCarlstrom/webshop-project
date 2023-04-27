import './css/App.css';
import Products from './components/Products';
import Navbar from './components/Navbar';
import { useState, useEffect } from 'react';

async function getData() {
  const url = "https://webshop-655ff-default-rtdb.europe-west1.firebasedatabase.app/products.json";

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  return data;
}

export default function App() {
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
      <Navbar />
      <Products initialItems={items} />
    </div>
  );
}
