import { Rate } from 'antd';
import React from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { Img } from '../../common';
import PRODUCTS from '../../utils/constants';
import { getProductDetails, getRatings, getVots } from '../../utils/helper';
import { PDESC } from '../../utils/strings';
import './productDetails.scss';

const ProductDetails = (props) => {
  const { id } = useParams();
  const { history } = props;
  console.log(props, '$$$');
  const product = getProductDetails(PRODUCTS, id);
  console.log();

  if (!id || !product) history.push('/');
  const {
    title, desc, price, img,
  } = product;

  const getDesc = () => PDESC.map((item) => <li>{item}</li>);

  return (
    <div className="product-details">
      <div className="title">
        <h1>{title}</h1>
      </div>
      <div className="container">
        <div className="image">
          <Img src={img} alt={title} />
          <div className="desc">
            <p>{desc}</p>
          </div>
          <div className="rating">
            <Rate defaultValue={getRatings()} allowHalf />
            (
            {`${getVots()} votes`}
            )
          </div>
        </div>
        <div className="details">
          <ul>
            {getDesc()}
          </ul>
          <hr />
          <button type="button">BUY</button>
          <button type="button" o>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductDetails);
