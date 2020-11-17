import React, { useEffect, useState } from 'react';
import { Skeleton, Spin, Row, Col } from 'antd';
import MainPageComponent from './MainPageComponent';
import { PRODUCTS } from '../../utils/constants';
import Client from '../../service/DummyClient';
import './main.scss';

const MainPage = () => {
  const [state, setState] = useState({
    data: [],
    loading: false,
  });
  const getProducts = (callback) => {
    setTimeout(() => {
      callback(PRODUCTS);
    }, 3000);
  };
  useEffect(() => {
    setState({
      ...state,
      loading: true,
    });
    getProducts((products) => {
      setState({
        ...state,
        data: products,
        loading: false,
      });
    });
    const getData = async () => {
      const data = await Client.GET('/products');
      console.log(data);
      // setState({
      //   ...state,
      //   data: data.data,
      //   loading: false,
      // });
    };
    getData();
  }, []);
  return (
    <>
      {state.loading && (
        <>
          <Spin size="large" tip="Loading products..." />
          <Row>
            <Col sm={6} md={6} lg={6}>
              <Skeleton loading={state.loading} />
            </Col>
            <Col sm={6} md={6} lg={6}>
              <Skeleton loading={state.loading} />
            </Col>
            <Col sm={6} md={6} lg={6}>
              <Skeleton loading={state.loading} />
            </Col>
          </Row>
        </>
      )}
      <MainPageComponent products={state.data} />
    </>
  );
};

export default MainPage;
