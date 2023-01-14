import React from 'react';
import './style.scss';

const ErrorComponent = (props) => (
  <div className="children">
    {props.children}
  </div>
);

export default ErrorComponent;
