import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-center py-5'>
        <h1 className='text-warning'>Welcome to the Quiz App</h1>
        <Link to="/quiz"><button className='btn btn-success fs-3 my-5'>Start Quiz</button></Link>
    </div>
  )
}

export default Home