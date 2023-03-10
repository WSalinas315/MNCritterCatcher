import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { useSelector, useDispatch } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Nav() {

  // Initialize user from store
  const user = useSelector((store) => store.user);

  // Initialize dispatch
  const dispatch = useDispatch();

  // dispatch to clear filter search if Nav bar is clicked from the SpeciesPage
  const clearFilterSearch = () => {
    dispatch({type:'CLEAR_FILTER_SEARCH'});
    dispatch({type:'CLEAR_REF_ANIMAL'});
  }

  return (
    <div className="nav">
        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/sightings">
              <DynamicFeedIcon onClick={() => clearFilterSearch()} />
            </Link>
            <Link className="navLink" to="/search">
              <SearchIcon onClick={() => clearFilterSearch()} />
            </Link>
            <Link className="navLink" to="/sightings/add">
              <AddIcon onClick={() => clearFilterSearch()} />
            </Link>
            <Link className="navLink" to="/profile">
              <AccountBoxIcon onClick={() => clearFilterSearch()} />
            </Link>
            <Link className="navLink" to="/about">
              <InfoIcon onClick={() => clearFilterSearch()} />
            </Link>
          </>
        )}
    </div>
  );
}

export default Nav;
