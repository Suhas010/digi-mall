import { Rate } from 'antd';
import React from 'react';
import { useParams, withRouter } from 'react-router-dom';
import { Img, AddToCart, Buy } from '../../common';
import { getProductDetails, getRatings, getVots } from '../../utils/helper';
import { PDESC } from '../../utils/strings';
import './productDetails.scss';

const ProductDetails = ({ history: { push } }) => {
  const { id } = useParams();
  const product = getProductDetails(id);

  if (!id || !product) push('/');
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
          <div className="action">
            <Buy id={id} />
            <AddToCart id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProductDetails);
