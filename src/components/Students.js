import React from 'react';
import { useSelector } from 'react-redux';
import Student from './Student';

const Students = () => {
  const listStudents = useSelector(state => state.students)
  return (
    <div>
      <button>Students: {listStudents.length}</button>
      <ul>
        {
          listStudents.map((student) => {
            return <Student key={Math.random()} name={student.name} age={student.age} />
            
          })
        }
      </ul>
    </div>
  )
}

export default Students
