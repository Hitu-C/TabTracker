import '../App.css'
import MenuPanelComponent from '../components/MenuPanelComponent';
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // logic for register
    console.log('Email: ', email);
    console.log('Password: ', password);
  };

  return (
    <div>
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
      </form>
      <button onClick={handleLogin}>Login</button>
    </div>
      <div className="menu-panel">
      <MenuPanelComponent
        showButton1={true}
        showButton2={true}
        showButton3={true}
        showButton4={false}
        showButton5={true}
      />
    </div>
    </div>
    
  );
}

export default Login;
