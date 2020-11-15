import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '../../context/TheamContext';
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
            <Header />
            <Master />
            <Footer />
          </ThemeProvider>
        )}
      />
    </Switch>
  </Router>
);
