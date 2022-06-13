import React from 'react';
import CategorieCard from './CategorieCard';

export default function Categories() {
  return (
    <section className=" categories">
      <div className="categories__container container dp-flex">
        <CategorieCard
          title={'headphones'}
          img={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-headphones.png`}
          link="/headphones"
        />
        <CategorieCard
          title={'speakers'}
          img={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-speakers.png`}
          link="/speakers"
        />
        <CategorieCard
          title={'earphones'}
          img={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-earphones.png`}
          link="/earphones"
        />
      </div>
    </section>
  );
}
