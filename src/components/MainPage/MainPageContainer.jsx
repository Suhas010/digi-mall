import React, { useEffect, useState } from 'react';
import {
  Skeleton, Spin, Row, Col,
} from 'antd';
import MainPageComponent from './MainPageComponent';
import Client from '../../service/DummyClient';
import './main.scss';

const MainPage = () => {
  const [state, setState] = useState({
    data: [],
    loading: false,
  });

  useEffect(() => {
    setState({
      ...state,
      loading: true,
    });

    // DUMMY API CALL
    Client.getProducts((products) => {
      setState({
        ...state,
        data: products,
        loading: false,
      });
    });

    // TO Fetch Data from local json server Used in development
    // const getData = async () => {
    //   const data = await Client.GET('/products');
    //   console.log(data);
    //   // setState({
    //   //   ...state,
    //   //   data: data.data,
    //   //   loading: false,
    //   // });
    // };
    // getData();
  }, []);
  const { loading, data } = state;
  return (
    <>
      {loading && (
        <>
          <Spin size="large" tip="Loading products..." />
          <Row>
            <Col sm={24} md={24} lg={24}>
              <Skeleton loading={loading} />
            </Col>
          </Row>
        </>
      )}
      {!loading && <MainPageComponent products={data} /> }
    </>
  );
};

export default MainPage;
