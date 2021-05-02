import React from "react";
import { Link } from "react-router-dom";
import CategorieCard from "./CategorieCard";

export default function Categories() {
  return (
    <section className=" categories">
        <div className="categories__container container dp-flex">
      <CategorieCard
        title={'headphones'}
        img={"./assets/shared/desktop/image-headphones.png"}
      />
      <CategorieCard
        title={'speakers'}
        img={"./assets/shared/desktop/image-speakers.png"}
      />
      <CategorieCard
        title={'earphones'}
        img={"./assets/shared/desktop/image-earphones.png"}
      />
      </div>
    </section>
  );
}
