import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '../Card';

const MainPageComponent = ({ products }) => {
  // show product list
  const getProducts = () => Object.entries(products).map(([key, product]) => (
    <Card key={key} id={key} {...product} />
  ));
  return (
    <main id="main-container">
      <div className="product-container">{getProducts()}</div>
    </main>
  );
};

export default withRouter(MainPageComponent);
