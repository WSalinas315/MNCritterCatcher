import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/search">
              <SearchIcon />
            </Link>
            <Link className="navLink" to="/sightings">
              <DynamicFeedIcon />
            </Link>
            <Link className="navLink" to="/home">
              <HomeIcon />
            </Link>
            <Link className="navLink" to="/challenges">
              <EmojiEventsIcon />
            </Link>
            <Link className="navLink" to="/profile">
              <AccountBoxIcon />
            </Link>
          </>
        )}
    </div>
  );
}

export default Nav;
