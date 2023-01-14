/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import ErrorComponent from '../ErrorComponent';

const Radio = ({
  options, name, label, ...rest
}) => (
  <div className="form-control">
    <label htmlFor={name}>Select Your Gender</label>
    <Field name={name} {...rest}>
      {
          ({ field }) => options.map((option) => (
            <React.Fragment key={option.value}>
              <label htmlFor={option.value}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />

                {option.key}
              </label>
            </React.Fragment>
          ))
        }
    </Field>
    <ErrorMessage name={name} component={ErrorComponent} />
  </div>
);

Radio.propTypes = {
  options: PropTypes.instanceOf(Array).isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Radio;
