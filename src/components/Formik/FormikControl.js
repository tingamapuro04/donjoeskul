import React from 'react';
import Input from './Input';
import Radio from './Radio';
import Checkbox from './Checkbox';

const FormikControl = ({ control, ...rest }) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'radio':
      return <Radio {...rest} />;
    case 'checkbox':
      return <Checkbox {...rest} />;
    default: return null;
  }
};

export default FormikControl;
