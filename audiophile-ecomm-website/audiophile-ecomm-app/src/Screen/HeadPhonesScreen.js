import React, { useState } from "react";
import Bringing from "../components/Bringing";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Data from "../data.json";

export default function HeadPhonesScreen() {
  console.log(Data);
  const [productOne] = useState(Data[3]);
  const [productTwo] = useState(Data[2]);
  const [productThree] = useState(Data[1]);

  return (
    <div className="headphones">
        <div className='big-title'>
            <h2 className='big-title__title'>headphones</h2>
        </div>
      <Card {...productOne} />
      <Card {...productTwo} imgStart="start" />
      <Card {...productThree} />
      <Categories/>
      <Bringing/>

    </div>
  );
}
