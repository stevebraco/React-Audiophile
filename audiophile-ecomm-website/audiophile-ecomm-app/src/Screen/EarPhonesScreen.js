import React, { useState } from "react";
import Bringing from "../components/Bringing";
import Card from "../components/Card";
import Categories from "../components/Categories";
import Data from "../data.json";

export default function EarPhonesScreen() {
  const [productOne] = useState(Data[0]);

  return (
    <div className="earphones">
        <div className='big-title'>
            <h2 className='big-title__title'>earphones</h2>
        </div>
      <Card {...productOne}/>
      <Categories/>
      <Bringing/>

    </div>
  );
}
