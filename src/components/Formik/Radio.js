import React from 'react';
import PropTypes from 'prop-types'
import { Field, ErrorMessage } from 'formik';
import ErrorComponent from '../ErrorComponent';

const Radio = ({
  options, name, label, ...rest
}) => (
  <div>
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

export default Radio;
