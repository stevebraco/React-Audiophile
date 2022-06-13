import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Bringing from '../components/Bringing';
import Card from '../components/Card';
import Categories from '../components/Categories';
import Data from '../data.json';

export default function HeadPhonesScreen() {
  const product = JSON.parse(localStorage.getItem('productsList'));

  return (
    <div className="headphones">
      <div className="big-title">
        <h2 className="big-title__title">headphones</h2>
      </div>
      <Card {...product[3]} />
      <Card {...product[2]} imgStart="start" />
      <Card {...product[1]} />
      <Categories />
      <Bringing />
    </div>
  );
}
