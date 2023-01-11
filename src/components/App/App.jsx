import React, { useEffect } from 'react';
import {HashRouter as Router,Redirect,Route,Switch,} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../Nav/Nav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AboutPage from '../AboutPage/AboutPage';
import Home from '../Home/Home';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import Search from '../Search/Search';
import SpeciesSelect from '../SpeciesSelect/SpeciesSelect';
import ProfilePage from '../ProfilePage/ProfilePage';
import SpeciesPage from '../SpeciesPage/SpeciesPage';
import Sightings from '../Sightings/Sightings';
import AddSighting from '../AddSighting/AddSighting';
import DetailedSighting from '../DetailedSighting/DetailedSighting';
import EditProfile from '../EditProfile/EditProfile';
import Challenges from '../Challenges/Challenges';
import './App.css';

function App() {

  // initialize dispatch
  const dispatch = useDispatch();

  // initialize user from store
  const user = useSelector(store => store.user);

  // use effect for fetching user data
  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        {/* <Nav /> */}
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. 
              shows AboutPage at all times (logged in or not) */}
          <Route exact path="/about">
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          {/* logged in shows UserPage else shows LoginPage */}
          <ProtectedRoute exact path="/home">
            <Home />
          </ProtectedRoute>

          {/* logged in shows Animal Search, else shows LoginPage */}
          <ProtectedRoute exact path="/search">
            <Search />
          </ProtectedRoute>

          {/* logged in shows Bird Species Search, else shows LoginPage */}
          <ProtectedRoute exact path="/search/birds">
            <SpeciesSelect type={'Bird'} />
          </ProtectedRoute>

          {/* logged in shows Mammal Species Search, else shows LoginPage */}
          <ProtectedRoute exact path="/search/mammals">
            <SpeciesSelect type={'Mammal'} />
          </ProtectedRoute>

          {/* logged in shows Animal Reference Card, else shows LoginPage */}
          <ProtectedRoute exact path="/reference/:name">
            <SpeciesPage />
          </ProtectedRoute>

          {/* logged in shows Sightings Feed, else shows LoginPage */}
          <ProtectedRoute exact path="/sightings">
            <Sightings />
          </ProtectedRoute>

          {/* logged in shows Sightings Feed, else shows LoginPage */}
          <ProtectedRoute exact path="/challenges">
            <Challenges />
          </ProtectedRoute>

          {/* logged in shows Profile Page, else shows LoginPage */}
          <ProtectedRoute exact path="/profile">
            <ProfilePage />
          </ProtectedRoute>

          {/* logged in shows Profile Page, else shows LoginPage */}
          <ProtectedRoute exact path="/profile/edit">
            <EditProfile />
          </ProtectedRoute>

          {/* logged in shows Add Sighting Form, else shows LoginPage */}
          <ProtectedRoute exact path="/sightings/add">
            <AddSighting />
          </ProtectedRoute>

          {/* logged in shows Detailed Sighting Page, else shows LoginPage */}
          <ProtectedRoute exact path="/sightings/detailed/:id">
            <DetailedSighting />
          </ProtectedRoute>

          {/* If the user is already logged in, redirect to the /user page, Otherwise, show the login page */}
          <Route exact path="/login">
            {user.id ? <Redirect to="/home" /> : <LoginPage />}
          </Route>

          {/* If the user is already logged in, redirect them to the /user page, Otherwise, show the registration page */}
          <Route exact path="/registration">
            {user.id ? <Redirect to="/home" /> : <RegisterPage />}
          </Route>

          {/* If the user is already logged in, redirect them to the /user page, Otherwise, show the Landing page */}
          <Route exact path="/home">
            {user.id ? <Redirect to="/home" /> : <LoginPage />}
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Nav />
      </div>
    </Router>
  );
}

export default App;
