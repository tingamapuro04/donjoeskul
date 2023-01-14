import React from 'react';
import { Field, ErrorMessage } from 'formik';
import ErrorComponent from '../ErrorComponent';

const Input = ({ name, label, ...rest }) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field name={name} {...rest} />
    <ErrorMessage name={name} component={ErrorComponent} />
  </div>
);

export default Input;
