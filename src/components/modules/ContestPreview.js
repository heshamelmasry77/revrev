import React from 'react';
// import PropTypes from 'prop-types';
//state less function component

const ContestPreview = contest => (
  <div className="contestPreview">
    <div>{contest.categoryName}</div>
    <div>{contest.contestName}</div>
  </div>
);

export default ContestPreview;
