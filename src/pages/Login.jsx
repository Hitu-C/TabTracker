import '../App.css'
import MenuPanelComponent from '../components/MenuPanelComponent';
import LoginPanelComponent from "../components/LoginPanelComponent";
import createToken, { ValidateTokenComponent, ValidateTokenFromUserComponent } from '../components/TokenComponent';
import React, { useState } from 'react';

function Login() {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setusername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    // logic for login
    console.log('Username: ', username);
    console.log('Password: ', password);
    console.log(ValidateTokenComponent(username));
  };

  return (
    <div>
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input type="username" value={username} onChange={handleUsernameChange} />
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
