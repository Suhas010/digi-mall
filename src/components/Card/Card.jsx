import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { getCurrencyFormater } from '../../utils/helper';
import { useCartDispatch, useCarttState } from '../../context/CartContext';
import './Card.scss';
import { Img } from '../../common';
import AddToCart from '../../common/AddToCart';

const Card = ({
  title, img, desc, id, price: { amount, unit }, history,
}) => {
  const dispatch = useCartDispatch();
  const state = useCarttState();

  const handleBuy = () => {
    // if 10 items already added in cart => Just proceed to cart details page
    if (state[id] && state[id].count === 10) {
      history.push('/cart-details');
      return;
    }
    // if item is not already present in cart => add one item and then process to cart details page
    if (!state[id]) dispatch({ type: 'addToCart', key: id });

    history.push('/cart-details');
  };
  return (
    <div className="card-container">
      <div className="price">
        <div className="amount">{getCurrencyFormater(amount)}</div>
        <div className="unit">{unit}</div>
      </div>
      <Link to={`/details/${id}`}>
        <Img src={img} />
      </Link>
      <div className="title">{title}</div>
      <div className="sub-title">
        <p>{desc}</p>
      </div>
      <div className="actions">
        <button type="button" name="Buy" onClick={handleBuy}>
          Buy Now
        </button>
        <AddToCart id={id} />
      </div>
    </div>
  );
};

export default withRouter(Card);
