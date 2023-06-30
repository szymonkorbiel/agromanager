import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // api login
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div className='wholediv'>
      <div className='login'>
        <h1>Login Page</h1>
        <form class='login-form'>
          <div class="flex-row">
            <label class="lf--label" for="username"/>
            <input id="username" class='lf--input' placeholder='Username' type='text'/>
          </div>
          <div class="flex-row">
            <label class="lf--label" for="password"/>
            <input id="password" class='lf--input' placeholder='Password' type='password'/>
          </div>
          <div class="submit-container">
            <input class='lf--submit' type='submit' value='LOGIN'/>
          </div>
        </form>
      </div>  
    </div>
  );
};

export default LoginPage;