import React, { useContext } from 'react';
import ThemeContext from '../../context/TheamContext';
import moon from '../../assets/moon.svg';
import sun from '../../assets/sun.svg';
import { Img } from '../../common';
import './header.scss';
import STRING from '../../utils/strings';

// import SUN from '';
const Header = () => {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <header className="header" id="header">
      {STRING.APPNAME}
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
    </header>
  );
};
export default Header;
