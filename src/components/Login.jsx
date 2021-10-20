import React from 'react';

import '../styles/Login.css';
import { loginUrl } from '../helpers/spotify';

function Login() {
  return (
    <div className="login">
      {/* Spotify logo */}
      {/* Login with spotify button */}
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo"
      />
      <a href={loginUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;
