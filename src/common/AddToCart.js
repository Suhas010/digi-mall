import React from 'react';
import { InputNumber } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useCountDispatch, useCountState } from '../context';

const AddToCart = ({ id })=> {
  const dispatch = useCountDispatch();

  const state = useCountState();
  const handleCartAction = (action) => {
    dispatch({ type: action, key: id });
  };
  let count = 0;
  if (state && state[id]) {
    count = state[id].count;
  }

  return (
    <>
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
