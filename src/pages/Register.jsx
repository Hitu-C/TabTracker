import '../App.css'
import MenuPanelComponent from '../components/MenuPanelComponent';
import React, { useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  async function handleRegister () {
    // logic for register
    console.log('Username', username);
    console.log('Email: ', email);
    console.log('Password: ', password);
    await fetch("http://localhost:5174/api/create", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
    console.error('Error:', error);
});
  };

  return (
    <div>
    <div className="register-container">
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
      </form>
      <button onClick={handleRegister}>Register</button>
    </div>
      <div className="menu-panel">
      <MenuPanelComponent
        showButton1={true}
        showButton2={true}
        showButton3={false}
        showButton4={true}
        showButton5={true}
      />
    </div>
    </div>
    
  );
}

export default Register;
