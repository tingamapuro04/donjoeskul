import React from 'react';
import { useDispatch } from "react-redux";
import StudentLogin from './Formik/StudentLogin';

const AdmitStudent = () => {
  return (
    <div>
      <h2>Please fill in the form below</h2>
      <StudentLogin />
    </div>
  )
}

export default AdmitStudent
