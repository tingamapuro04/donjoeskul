import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h3>Welcome to Nonsense High School</h3>
        <p>We are currently accepting apllications all across our classes</p>
        <button onClick={() => navigate("/register")} type="button">Register Now</button>
      </div>
    </div>
  )
}

export default Home
