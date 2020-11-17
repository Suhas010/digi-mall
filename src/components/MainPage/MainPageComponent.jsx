/* eslint-disable max-len */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { useCartDispatch } from '../../context/CartContext';
import { Notification } from '../../common/Notification';
import Card from '../Card';

const MainPageComponent = ({ products, location, history }) => {
  // console.log(rest, "REST")
  const dispatch = useCartDispatch();
  if (location.search && location.search === '?order-placed') {
    Notification('success', 'Success', 'Order id #12355352 placed successfully. Thanks for shopping with us.');
    history.push('/');
    dispatch({type: 'clearCart'})
  }
  const getProducts = () => Object.entries(products).map(([key, product]) => <Card key={key} id={key} {...product} />);

  return (
    <main id="main-container">
      <div className="product-container">{getProducts()}</div>
    </main>
  );
};

export default withRouter(MainPageComponent);
