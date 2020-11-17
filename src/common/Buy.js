import React from 'react';
import { withRouter } from 'react-router-dom';
import { useCartDispatch, useCarttState} from '../context';

const Buy = ({id, history }) => {
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
    <button type="button" name="Buy" onClick={handleBuy}>
      Buy Now
    </button>
  );
};

export default withRouter(Buy);

