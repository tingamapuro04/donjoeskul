import React from 'react';
import { Field, ErrorMessage } from 'formik';

const Checkbox = ({ options, name, label, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.value}>
                <label htmlFor={option.value}>
                  <input
                    type="checkbox"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  {" "}
                  {option.key}
                </label>
              </React.Fragment>
            );
          });
        }}
      </Field>
    </div>
  );
}

export default Checkbox
