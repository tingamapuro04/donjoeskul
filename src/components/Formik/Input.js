import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Input = ({ name, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest} />
      <ErrorMessage name={name} />
    </div>
  )
}

export default Input
