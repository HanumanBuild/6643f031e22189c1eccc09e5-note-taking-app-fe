import React from 'react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <form className='signup-form'>
      <label>Email: <input type='email' name='email' /></label>
      <label>Password: <input type='password' name='password' /></label>
      <button type='submit'>Create Account</button>
      <Link to='/login'>Already have an account? Login</Link>
    </form>
  );
};
export default SignupPage;