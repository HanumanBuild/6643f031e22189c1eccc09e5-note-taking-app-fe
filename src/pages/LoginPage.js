import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <form className='login-form'>
      <label>Email: <input type='email' name='email' /></label>
      <label>Password: <input type='password' name='password' /></label>
      <button type='submit'>Login</button>
      <Link to='/signup'>Create Account</Link>
    </form>
  );
};
export default LoginPage;