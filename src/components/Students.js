import React from 'react';
import { useSelector } from 'react-redux';
import Student from './Student';
import './style.scss';

const Students = () => {
  const listStudents = useSelector((state) => state.students);
  return (
    <div>
      <button type="button">
        Students:
        {listStudents.length}
      </button>
      <ul className="items">
        {
          listStudents.map(
            (student) => <Student key={Math.random()} name={student.name} age={student.age} />,
          )
        }
      </ul>
    </div>
  );
};

export default Students;
