import React from 'react'

const Student = ({name, age, ...rest}) => {
  return (
    <li>
      <div>
        <p>Full Name: {name}</p>
        <p> Age: {age} </p>
      </div>
    </li>
  )
}

export default Student
