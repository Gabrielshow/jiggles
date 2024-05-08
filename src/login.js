import React, { useState } from 'react';
import './login.css';
import { useHistory } from 'react-router-dom';


const login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('Username:', username);
    // console.log('Password:', password);
    if (username === 'admin' && password === 'password') {
      // Redirect to admin component if authentication is successful
      history.push('/admin');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="App">
      <div className="login-container">
         {/* Display the logo image */}
         <img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="Logo" className="logo" />
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
        <div className="form-footer">
          <a href="#">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}

export default login