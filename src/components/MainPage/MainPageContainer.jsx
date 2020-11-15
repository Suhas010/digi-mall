import React from 'react';
import MainPageComponent from './MainPageComponent';
import products from '../../utils/constants';
import './main.scss';
const MainPage = () => {
    return (
        <MainPageComponent products={products} />
    );
};

export default MainPage;
