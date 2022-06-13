import React, { useState } from 'react';
import Bringing from '../components/Bringing';
import Card from '../components/Card';
import Categories from '../components/Categories';
import Data from '../data.json';

export default function SpeakersScreen() {
  const product = JSON.parse(localStorage.getItem('productsList'));

  return (
    <div className="speakers">
      <div className="big-title">
        <h2 className="big-title__title">speakers</h2>
      </div>
      <Card {...product[5]} />
      <Card {...product[4]} imgStart="start" />
      <Categories />
      <Bringing />
    </div>
  );
}
