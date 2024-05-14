import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://your-api-endpoint.com/login', formData);
      console.log('Login successful:', response.data);
      setLoginSuccess(true);
      // Add further actions like redirecting to another page, storing authentication token, etc.
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle error scenarios
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {loginSuccess && (
        <div style={{ marginBottom: '15px', color: 'green' }}>
          User login successful!
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{ width: '100%', padding: '10px', fontSize: '16px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px' }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
