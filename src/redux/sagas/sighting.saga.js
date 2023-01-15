import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// POST new sighting to database and fetch all sightings for the signed in user
function* postSighting(action) {
  try {
    yield axios.post(`/api/sighting/`, action.payload);
    yield put({ type: 'FETCH_SIGHTINGS', payload: action.payload.user_id});
    yield put({ type: 'SET_AUTOFILL_FALSE'});
    yield put({ type: 'FETCH_COUNT', payload: action.payload.user_id});
  } catch (error) {
    console.log('POST sighting error:', error);
  }
}

// Fetch all sightings for signed in user from database and assign to sightings reducer
function* fetchSightings(action) {
  try {
    const sightings = yield axios.get(`/api/sighting/${action.payload}`);
    yield put({ type: 'SET_SIGHTINGS', payload: sightings.data });
  } catch (error) {
    console.log('GET sightings error:', error);
  }
}

// Fetch all sightings for signed in user from database and assign to sightings reducer
function* fetchPublic(action) {
  try {
    const sightings = yield axios.get(`/api/sighting/public/all`);
    yield put({ type: 'SET_SIGHTINGS', payload: sightings.data });
  } catch (error) {
    console.log('GET public sightings error:', error);
  }
}

// Fetch all sightings for signed in user from database and assign to sightings reducer
function* deleteSighting(action) {
  try {
    yield axios.delete(`/api/sighting/${action.payload.sighting}`);
    yield put({ type: 'FETCH_SIGHTINGS', payload: action.payload.user});
    yield put({ type: 'FETCH_COUNT', payload: action.payload.user});
  } catch (error) {
    console.log('GET sightings error:', error);
  }
}

// Fetch sighting count for signed in user from database and assign to sightingCount reducer
function* fetchCount(action) {
  try {
    const count = yield axios.get(`/api/sighting/count/${action.payload}`);
    // yield put({ type: 'SET_COUNT', payload: count.data[0].sighting_count });
    yield put({ type: 'SET_COUNT', payload: count.data[0] });
  } catch (error) {
    console.log('GET sightings error:', error);
  }
}

// Fetch sighting counts for each animal type for signed in user from database and assign to sightingCount reducer
function* fetchAnimalCounts(action) {
  try {
    const counts = yield axios.get(`/api/sighting/animalcounts/${action.payload}`);
    yield put({ type: 'SET_ANIMAL_COUNTS', payload: counts.data });
  } catch (error) {
    console.log('GET sightings error:', error);
  }
}

// Fetch sighting count for signed in user from database and assign to sightingCount reducer
function* fetchDetailed(action) {
  try {
    const details = yield axios.get(`/api/sighting/detailed/${action.payload}`);
    yield put({ type: 'SET_DETAILED_SIGHTING', payload: details.data });
  } catch (error) {
    console.log('GET detailed sightings error:', error);
  }
}

function* sighting() {
  yield takeLatest('NEW_SIGHTING', postSighting);
  yield takeLatest('FETCH_SIGHTINGS', fetchSightings);
  yield takeLatest('DELETE_SIGHTING', deleteSighting);
  yield takeLatest('FETCH_COUNT', fetchCount);
  yield takeLatest('FETCH_ANIMAL_COUNTS', fetchAnimalCounts);
  yield takeLatest('FETCH_DETAILED_SIGHTING', fetchDetailed);
  yield takeLatest('FETCH_PUBLIC_SIGHTINGS', fetchPublic);
}

export default sighting;