import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { ThemeContext, useCarttState } from '../../context';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import { Img } from '../../common';
import './header.scss';
import STRING from '../../utils/strings';

// import SUN from '';
const Header = ({ history: { push } }) => {
  const { dark, toggle } = useContext(ThemeContext);
  const state = useCarttState();

  // count no of product added in Cart
  const count = Object.keys(state).reduce(
    (acc, key) => acc + state[key].count,
    0
  );
  return (
    <header className="header" id="header">
      <Link to="/">
        {STRING.APPNAME}
      </Link>
      &#129311;&#128526;
      {dark && (
        <Img
          onClick={toggle}
          src={sun}
          alt="Sun Icon"
          className="theam-icon"
        />
      )}
      {!dark && (
        <Img
          onClick={toggle}
          src={moon}
          alt="Moon Icon"
          className="theam-icon"
        />
      )}
      <Badge count={count} title="Cart">
        <ShoppingCartOutlined
          className="cart-button"
          title={`${count} products added in cart`}
          onClick={() => push('/cart-details')}
        />
      </Badge>
    </header>
  );
};
export default withRouter(Header);
