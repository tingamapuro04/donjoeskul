import React from "react";
import { Formik, Form } from "formik";
import FormikControl from "./FormikControl";
import { useDispatch } from "react-redux";
import { addStudent } from "../../store/Student/studentSlice";
import '../style.scss'

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

const subjects = [
  {key: 'Chemistry', value: 'Chemistry'},
  {key: 'Biology', value: 'Biology'},
  {key: 'Physics', value: 'Physics'},
  {key: 'Computer Science', value:'Computer Science'},
  {key: 'Geography', value: 'Geography'},
  {key: 'Drawing and Design', value: 'Drawing and Design'}
]

const validate = (values) => {
  let errors = {};
  if (!values.name ) {
    errors.name = 'Required!'
  }
  if(!values.age) {
    errors.age = 'Required!'
  }
  if(values.age < 10) {
    errors.age = 'No user below 10 years'
  }
  if(values.subjects < 2) {
    errors.subjects = 'You must pick at least two subjects to continue'
  }
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
            <Form className="form">
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

              <FormikControl
                control="checkbox"
                name="subjects"
                label="Please select 3"
                options={subjects}
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
