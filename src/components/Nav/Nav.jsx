import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Nav() {

  // Initialize user from store
  const user = useSelector((store) => store.user);

  // Initialize dispatch
  const dispatch = useDispatch();

  // dispatch to clear filter search if Nav bar is clicked from the SpeciesPage
  const clearFilterSearch = () => {
    dispatch({type:'CLEAR_FILTER_SEARCH'});
  }

  return (
    <div className="nav">
        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/search">
              <SearchIcon onClick={() => clearFilterSearch()} />
            </Link>
            <Link className="navLink" to="/sightings">
              <DynamicFeedIcon onClick={() => clearFilterSearch()} />
            </Link>
            <Link className="navLink" to="/home">
              <HomeIcon onClick={() => clearFilterSearch()} />
            </Link>
            <Link className="navLink" to="/challenges">
              <EmojiEventsIcon onClick={() => clearFilterSearch()} />
            </Link>
            <Link className="navLink" to="/profile">
              <AccountBoxIcon onClick={() => clearFilterSearch()} />
            </Link>
          </>
        )}
    </div>
  );
}

export default Nav;
