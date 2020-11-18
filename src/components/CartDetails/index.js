import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Empty, Table } from 'antd';
import { Notification } from '../../common';
import { COLUMNS } from '../../utils/constants';
import { getCurrencyFormater } from '../../utils/helper';
import { useCartState, useCartDispatch } from '../../context';

import './cartDetails.scss';

const CartDetails = () => {
  const state = useCartState();
  const dispatch = useCartDispatch();

  // prepare data source for table from cart items
  const getCart = () => {
    let items = [];
    if (state && Object.keys(state).length) {
      let grandTotal = 0;
      let grandPrice = 0;
      let grandCount = 0;
      items = Object.entries(state).map(
        (
          [
            key,
            {
              count,
              product: {
                title, price, img, desc,
              },
            },
          ],
          index,
        ) => {
          grandTotal += price.amount * count;
          grandPrice += price.amount;
          grandCount += count;
          return {
            key,
            title,
            img,
            desc,
            count,
            index: index + 1,
            amount: getCurrencyFormater(price.amount),
            unit: price.unit,
            total: `( ${getCurrencyFormater(
              price.amount,
            )} X ${count}) = ${getCurrencyFormater(price.amount * count)}`,
          };
        },
      );
      items.push({
        title: 'Total',
        unit: grandCount,
        amount: getCurrencyFormater(grandPrice),
        total: getCurrencyFormater(grandTotal),
      });
      return items;
    }
    return false;
  };

  // Handle clear cart actions
  const clearCart = (showPopup, total) => {
    if (showPopup) {
      Notification('success', 'Success',
        <>
          Order id
          <b>#12355352</b>
          worth
          <b>{total}</b>
          is placed successfully. Thanks for shopping with us.
        </>);
    } else {
      Notification('warning', 'Attention', 'You just cleared your cart.');
    }
    dispatch({ type: 'clearCart' });
  };

  const dataSource = getCart();

  // if cart is empty
  if (!dataSource || !dataSource.length) {
    return (
      <div className="empty-cart">
        <Empty description="Cart is empty" />
        <br />
        {' '}
        <div className="link"><Link to="/">Add something in cart</Link></div>
      </div>
    );
  }

  return (
    <div className="cart-details">
      <Table
        dataSource={dataSource}
        columns={COLUMNS}
        pagination={false}
        title={() => <h1 style={{ textAlign: 'center' }}>Invoice</h1>}
        footer={() => (
          <div className="total">
            <div>Total payeble amount</div>
            <div>
              {dataSource[dataSource.length - 1].total}
              {' '}
            </div>
          </div>
        )}
        bordered
      />
      <div className="buy">
        <Button type="ghost" onClick={() => clearCart(false)}>Clear cart</Button>
        <Button type="primary" onClick={() => clearCart(true, dataSource[dataSource.length - 1].total)}>Place order</Button>
      </div>
      <div />
    </div>
  );
};

export default CartDetails;
