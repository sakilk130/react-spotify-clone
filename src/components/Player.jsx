import React from 'react';

import '../styles/Player.css';
import Body from './Body';
import Footer from './Footer';
import Sidebar from './Sidebar';

function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        {/* Sidebar */}
        <Sidebar />
        {/* Body */}
        <Body spotify={spotify} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Player;
