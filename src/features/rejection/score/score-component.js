import React from '../../../../web_modules/react.js';

const Score = ({ score }) =>
  React.createElement('h1', { className: 'score' },
    'Rejection Score: ',
    React.createElement('span', null, score)
  );

export default Score;
