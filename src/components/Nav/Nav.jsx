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
      {/* <Link to="/home">
        <h2 className="nav-title">Prime Solo Project</h2>
      </Link> */}
      {/* <div> */}
        {/* If no user is logged in, show these links */}
        {/* {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )} */}

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

        {/* <Link className="navLink" to="/about">
          About
        </Link> */}
      {/* </div> */}
    </div>
  );
}

export default Nav;
