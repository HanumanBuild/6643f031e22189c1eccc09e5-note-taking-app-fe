import React, { useState } from 'react';
import API from '../api';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await API.post('/api/auth/login', { email, password });
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login error:', error.response.data);
    }
  };

  return (
    <form onSubmit={handleLogin} className='login-form'>
      <label>Email: <input type='email' value={email} onChange={e => setEmail(e.target.value)} /></label>
      <label>Password: <input type='password' value={password} onChange={e => setPassword(e.target.value)} /></label>
      <button type='submit'>Login</button>
    </form>
  );
};

export default LoginPage;