/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Field, ErrorMessage } from 'formik';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import '../style.scss';
import ErrorComponent from '../ErrorComponent';

const Checkbox = ({
  options, name, label, ...rest
}) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Field name={name} {...rest}>
      {({ field }) => options.map((option) => (
        <React.Fragment key={option.value}>
          <label htmlFor={option.value}>
            <input
              type="checkbox"
              id={option.value}
              {...field}
              value={option.value}
              checked={field.value.includes(option.value)}
            />
            {' '}
            {option.key}
          </label>
        </React.Fragment>
      ))}
    </Field>
    <ErrorMessage name={name} component={ErrorComponent} />
  </div>
);

Checkbox.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Checkbox;
