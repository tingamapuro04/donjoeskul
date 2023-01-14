import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";

const initial = {
  name: "",
  age: "",
  gender: "",
  subjects: [],
};

const validate = (values) => {
  let errors = {};
  return errors;
};

const onSubmit = (values, onSubmitProps) => {
  console.log("Rhese are the values: ", values);
  onSubmitProps.resetForm();
};

const StudentLogin = () => {
  return (
    <Formik
      initialValues={initial}
      validate={validate}
      onSubmit={onSubmit}
    >
      {
        formik => {
          return (
            <Form>
              <FormikControl
              control='input'
              name='name'
              label='Full Name' />
              <button type="submit">Submit</button>
            </Form>
          )
        }
      }
    </Formik>
  );
};

export default StudentLogin;
