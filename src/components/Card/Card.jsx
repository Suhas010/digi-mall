import React from 'react';
import { Link } from 'react-router-dom';
import { getCurrencyFormater } from '../../utils/helper';
import './Card.scss';
import { Img } from '../../common';

const Card = ({ title, img, desc, id, price: { amount, unit } }) => (
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
      <button type="button" name="Buy" >Buy</button>
      <button type="button" name="Add to cart">Add to cart</button>
      {/* <ShoppingCartOutlined /> */}
    </div>
  </div>
);

export default Card;