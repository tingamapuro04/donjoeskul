import React from 'react';
import './style.scss';

const Student = ({name, age, ...rest}) => {
  return (
    <li>
      <div className='student'>
        <p>Full Name: {name}</p>
        <p> Age: {age} </p>
      </div>
    </li>
  )
}

export default Student
