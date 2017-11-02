import React from 'react';
//import PropTypes from 'prop-types';
import logo from '../../../assets/logos/ReactLogo.svg'; // Tell Webpack this JS file uses this image
import '../../../stylesheets/footer/Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-3 text-center">
            <nav>
              <ul>
                {/*<!--<li><a href="">Terms</a></li>-->*/}
                {/*<!--<li><a href="">Privacy</a></li>-->*/}
                {/*<!--<li><a href="">Support</a></li>-->*/}
              </ul>
            </nav>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 text-center copyrights">
            <h2>
              <b>revrev </b>
              <span property="schema:copyrightYear"> 2017</span>
            </h2>
          </div>
          <div className="col-xs-12  col-sm-12 col-md-3 credits text-center">
            <p>
              Coded with <span>♥</span> &
              <img src={logo} className="App-logo" alt="logo" /> by
              <span property="schema:copyrightHolder">Hesh Ramsis</span>
            </p>
            <p>Secure 128-bit SSL encrypted.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  // message: PropTypes.string,
};

Footer.defaltProps = {
  // message: 'hello i am footer',
};

export default Footer;
