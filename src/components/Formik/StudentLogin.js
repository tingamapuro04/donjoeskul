import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import { useDispatch } from "react-redux";
import { addStudent } from "../../store/Student/studentSlice";

const initial = {
  name: "",
  age: "",
  gender: "",
  subjects: [],
};

const genderOptions = [
  {key: 'Male', value: 'Male'},
  {key: 'Female', value: 'Female'},
  {key: 'Prefer not to say', value: 'others'}
]

const validate = (values) => {
  let errors = {};
  return errors;
};



const StudentLogin = () => {
  const dispatch = useDispatch();

  const onSubmit = (values, onSubmitProps) => {
    dispatch(addStudent(values))
    onSubmitProps.resetForm();
  };


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
              <FormikControl control="input" name="name" label="Full Name" />

              <FormikControl
                control="input"
                name="age"
                type="number"
                label="Age"
              />

              <FormikControl
                control="radio"
                name="gender"
                label="Select your gender"
                options={genderOptions}
              />

              <button type="submit">Submit</button>
            </Form>
          );
        }
      }
    </Formik>
  );
};

export default StudentLogin;
