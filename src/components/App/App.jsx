import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, CartProvider } from '../../context';
import Header from '../Header';
import Footer from '../Footer';
import 'antd/dist/antd.css';
import './app.scss';
import Master from './Master';

export const App = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        component={() => (
          <ThemeProvider>
            <CartProvider>
              <Header />
              <Master />
              <Footer />
            </CartProvider>
          </ThemeProvider>
        )}
      />
    </Switch>
  </Router>
);
