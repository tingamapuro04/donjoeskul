/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import ErrorComponent from '../ErrorComponent';

const Input = ({ name, label, ...rest }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field name={name} {...rest} />
    <ErrorMessage name={name} component={ErrorComponent} />
  </div>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
