/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './style.scss';

const ErrorComponent = (props) => (
  <div className="children">
    {props.children}
  </div>
);

export default ErrorComponent;
