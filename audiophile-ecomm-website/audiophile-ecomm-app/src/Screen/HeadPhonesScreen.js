import React, { useState } from "react";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Data from "../data.json";

export default function HeadPhonesScreen() {
  console.log(Data);
  const [productOne, setProductOne] = useState(Data[3]);
  const [productTwo, setProductTwo] = useState(Data[2]);
  const [productThree, setProductThree] = useState(Data[1]);

  return (
    <div className="headphones">
        <div className='big-title'>
            <h2 className='big-title__title'>headphones</h2>
        </div>
      <Card {...productOne} newProduct="new product" />
      <Card {...productTwo} imgStart="start" />
      <Card {...productThree} />
      <Categories/>
    </div>
  );
}
