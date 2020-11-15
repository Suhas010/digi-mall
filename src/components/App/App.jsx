import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider, CountProvider } from '../../context';
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
            <CountProvider>
              <Header />
              <Master />
              <Footer />
            </CountProvider>
          </ThemeProvider>
        )}
      />
    </Switch>
  </Router>
);
