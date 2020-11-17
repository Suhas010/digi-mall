import React from 'react';
import { InputNumber } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useCartDispatch, useCarttState } from '../context';
import { Notification } from './Notification';

// Handles add to cart action, resued everywher in app
const AddToCart = ({ id }) => {
  const dispatch = useCartDispatch();

  const state = useCarttState();
  let count = 0;
  if (state && state[id]) {
    count = state[id].count;
  }
  const handleCartAction = (action) => {
    // if action is addToCart and less than 10 items added in cart add one more item
    // if action is removeFromCart => dispatch the action
    if ((action === 'addToCart' && count <= 9) || action === 'removeFromCart') {
      dispatch({ type: action, key: id });
      return;
    }
    // if already 10 items added in cart, show warning to user.
    Notification('warning', 'Warning', 'Order limit of 10 units per items is reached.');
  };

  return (
    <>
      {/* if no item is added in cart show add to cart button,
       else show number of products added in cart */}
      {count === 0
        ? <button type="button" name="Add to cart" onClick={() => handleCartAction('addToCart')}>Add to cart</button>
        : (
          <div className="add-to-cart">
            <MinusOutlined disabled={count} onClick={() => handleCartAction('removeFromCart')} />
            <InputNumber
              min={1}
              defaultValue={count}
              value={count}
              disabled
            />
            <PlusOutlined onClick={() => handleCartAction('addToCart')} />
          </div>
        )}
    </>
  );
};

export default AddToCart;
