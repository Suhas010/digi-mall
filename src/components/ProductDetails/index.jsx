import React, { useEffect, useState } from 'react';
import {
  Rate, Spin, Skeleton, Row, Col,
} from 'antd';
import { useParams, withRouter } from 'react-router-dom';
import Client from '../../service/DummyClient';
import { Img, AddToCart, Buy } from '../../common';
import { getRatings, getVots } from '../../utils/helper';
import { PDESC } from '../../utils/strings';
import './productDetails.scss';

const ProductDetails = ({ history: { push } }) => {
  const [state, setState] = useState({
    data: [],
    loading: false
  });

  const { id } = useParams();

  if (!id) push('/');
  useEffect(() => {
    setState({
      ...state,
      loading: true
    });

    // DUMMY API CALL
    Client.getProductByID(id, products => {
      setState({
        ...state,
        data: products,
        loading: false
      });
    });
  }, []);

  // DUMMY description of profuct
  const getDesc = () => PDESC.map(item => <li>{item}</li>);
  const {
    loading,
    data: { title, img, desc }
  } = state;
  return (
    <div className="product-details">
      {loading && (
        <>
          <Spin size="large" tip="Loading product details..." />
          <Row>
            <Col sm={24} md={24} lg={24}>
              <Skeleton loading={loading} />
            </Col>
          </Row>
        </>
      )}
      {!loading && (
        <>
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
              <ul>{getDesc()}</ul>
              <hr />
              <div className="action">
                <Buy id={id} />
                <AddToCart id={id} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default withRouter(ProductDetails);
