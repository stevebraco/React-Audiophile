import { useState } from 'react';
import './App.css';
import data from './data.json'

function App() {
  const [products, setProducts] = useState(data)
  console.log(data);
  console.log(products[0]);
  console.log(products[1]);
  console.log(products[2]);
  console.log(products[3]);
  console.log(products[4]);
  console.log(products[5]);
  console.log(products[6]);
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
