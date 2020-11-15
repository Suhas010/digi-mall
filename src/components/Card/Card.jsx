import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getCurrencyFormater } from '../../utils/helper';
import './Card.scss';
import { Img } from '../../common';
import AddToCart from '../../common/AddToCart';

const Card = ({
  title, img, desc, id, price: { amount, unit },
}) => {
  

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
        <button type="button" name="Buy" onClick={() => {}}>Buy</button>
        <AddToCart id={id} />
        {/* <ShoppingCartOutlined /> */}
      </div>
    </div>
  );
};

export default Card;
