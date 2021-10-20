import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import './styles/App.css';
import { getTokenFromUrl } from './helpers/spotify';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);
  return (
    <div className="app">
      {/* Login */}
      {token ? <h1>Logged In</h1> : <Login />}
    </div>
  );
}

export default App;
