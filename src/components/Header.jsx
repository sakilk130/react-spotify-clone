import React from 'react';
import { Avatar } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import '../styles/Header.css';
import { useDataLayerValue } from './DataLayer';

function Header({ spotify }) {
  const [{ user }, dispatch] = useDataLayerValue();
  console.log(user);
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, Songs, or Podcasts "
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
