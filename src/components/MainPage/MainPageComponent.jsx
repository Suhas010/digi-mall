/* eslint-disable max-len */
import React from 'react';
import Card from '../Card';

const MainPageComponent = ({ products }) => {

  const getProducts = () => Object.entries(products).map(([key, product]) => <Card key={key} id={key} {...product} />);

  return (
    <main id="main-container">
      <div className="product-container">{getProducts()}</div>
    </main>
  );
};

export default MainPageComponent;
