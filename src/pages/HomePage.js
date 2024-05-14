import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className='home'>
      <h1>Welcome to the Note-Taking App</h1>
      <Link to='/login' className='btn btn-primary'>Login</Link>
      <Link to='/signup' className='btn btn-secondary'>Create Account</Link>
    </div>
  );
};
export default HomePage;