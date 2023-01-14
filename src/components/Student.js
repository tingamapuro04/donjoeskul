import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import './style.scss';

const Student = ({ name, age }) => (
  <li>
    <div className="student">
      <p>
        Full Name:
        {name}
      </p>
      <p>
        {' '}
        Age:
        {age}
      </p>
    </div>
  </li>
);

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default Student;
