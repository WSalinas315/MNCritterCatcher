import { put, takeLatest } from 'redux-saga/effects';
import { useSelector } from 'react-redux';
import axios from 'axios';

// POST new sighting to database and fetch all sightings for the signed in user
function* postSighting(action) {
  try {
    yield axios.post(`/api/sighting/`, action.payload);
    yield put({ type: 'FETCH_SIGHTINGS'});
  } catch (error) {
    console.log('POST sighting error:', error);
  }
}

// Fetch all sightings for signed in user from database and assign to sightings reducer
function* fetchSightings(action) {
  const user = useSelector(store => store.user);
  try {
    const sightings = yield axios.get(`/api/sighting/${user.id}`);
    yield put({ type: 'SET_SIGHTINGS', payload: sightings.data });
  } catch (error) {
    console.log('GET sightings error:', error);
  }
}

// Fetch Species from database and assign data to filterSearch reducer
// function* fetchSpecies(action) {
//   try {
//     const species = yield axios.get(`/api/search/species/${action.payload}`);
//     yield put({ type: 'SET_SPECIES', payload: species.data });
//   } catch (error) {
//     console.log('GET species error:', error);
//   }
// }

function* sighting() {
  yield takeLatest('NEW_SIGHTING', postSighting);
  yield takeLatest('FETCH_SIGHTINGS', fetchSightings);
  // yield takeLatest('FETCH_SPECIES', fetchSpecies);
}

export default sighting;