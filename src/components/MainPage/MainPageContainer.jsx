import React from 'react';
import MainPageComponent from './MainPageComponent';
import { PRODUCTS } from '../../utils/constants';
import './main.scss';

const MainPage = () => <MainPageComponent products={PRODUCTS} />;

export default MainPage;
