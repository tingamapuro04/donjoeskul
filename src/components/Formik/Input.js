import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Input = ({ name, label, ...rest }) => {
  return (
    <div>
      <Field name={name} label={label} />
      <ErrorMessage name={name} />
    </div>
  )
}

export default Input
