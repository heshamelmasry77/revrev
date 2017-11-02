import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const NotFound = ({ message }) => (
  <div className="NotFound">
    <Helmet>
      <meta charSet="utf-8" />
      <title>My NotFound page</title>
      <meta name="description" content="Helmet not found" />
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <p>i am NotFound page</p>
    <p> test message :{message}</p>
  </div>
);

NotFound.defaultProps = {
  message: 'hesham'
};
NotFound.propTypes = {
  message: PropTypes.string.isRequired
};

export default NotFound;
