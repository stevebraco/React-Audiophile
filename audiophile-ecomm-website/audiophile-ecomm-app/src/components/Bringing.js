import React from "react";

export default function Bringing() {
  return (
    <section className="bringing container">
      <div className="bringing__container dp-flex">
        <div className="bringing__description">
          <h2 className="bringing__title">Bringing you the <span className='c-primary'>best</span> audio gear</h2>
          <p className="bringing__text black-op">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <picture>
        <source media="(max-width: 985px)" srcset={`${process.env.PUBLIC_URL}/assets/shared/tablet/image-best-gear.jpg`}/>

      <img src={`${process.env.PUBLIC_URL}/assets/shared/desktop/image-best-gear.jpg`} alt="person"  />
      </picture>
      
      </div>
    </section>
  );
}
