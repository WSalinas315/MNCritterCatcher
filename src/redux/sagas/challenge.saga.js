import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// POST new sighting to database and fetch all sightings for the signed in user
function* postSighting(action) {
  // try {
  //   yield axios.post(`/api/sighting/`, action.payload);
  //   yield put({ type: 'FETCH_SIGHTINGS', payload: action.payload.user_id});
  //   yield put({ type: 'SET_AUTOFILL_FALSE'});
  //   yield put({ type: 'FETCH_COUNT', payload: action.payload.user_id});
  // } catch (error) {
  //   console.log('POST sighting error:', error);
  // }
}

// Fetch all sightings for signed in user from database and assign to sightings reducer
function* fetchSightings(action) {
  // try {
  //   const sightings = yield axios.get(`/api/sighting/${action.payload}`);
  //   yield put({ type: 'SET_SIGHTINGS', payload: sightings.data });
  // } catch (error) {
  //   console.log('GET sightings error:', error);
  // }
}


function* challenge() {
  // yield takeLatest('NEW_SIGHTING', postSighting);

}

export default challenge;