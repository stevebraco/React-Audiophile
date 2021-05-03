import React, { useState } from "react";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Data from "../data.json";

export default function SpeakersScreen() {
  console.log(Data[5]);
  const [productOne, setProductOne] = useState(Data[5]);
  const [productTwo, setProductTwo] = useState(Data[4]);

  return (
    <div className="speakers">
        <div className='big-title'>
            <h2 className='big-title__title'>speakers</h2>
        </div>
      <Card {...productOne} />
      <Card {...productTwo} imgStart="start" />
      <Categories/>
    </div>
  );
}
