import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Radio = ({ options, name, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>Select Your Gender</label>
      <Field name={name} {...rest}>
        {
          ({ field }) => {
            return options.map((option) => {
              return (
                <React.Fragment>
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                  />
                  <label htmlFor={option.value}> {option.key} </label>
                </React.Fragment>
              );
            })
          }
        }
      </Field>
    </div>
  )
}

export default Radio
