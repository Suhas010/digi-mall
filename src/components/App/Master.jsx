import React from 'react';
import {
    BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import Header from '../Header';
import MainPage from '../MainPage/MainPageContainer';
import ProductDetails from '../ProductDetails';

const Master = () => (
    <Switch>
        <Route exact path="/">
            <MainPage />
        </Route>
        <Route path="/details/:id" children={<ProductDetails />} />
        <Route path="/*">
            <Redirect to="/" />
        </Route>
    </Switch>
);

export default Master;
