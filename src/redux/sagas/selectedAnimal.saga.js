import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Fetch selected animal information from database and assign data to selected animal reducer
function* fetchAnimal(action) {
  try {
    const animal = yield axios.get(`/api/search/selected/${action.payload}`);
    yield put({ type: 'SET_SELECTED_ANIMAL', payload: animal.data });
  } catch (error) {
    console.log('GET animal data error:', error);
  }
}

function* selectedAnimal() {
  yield takeLatest('FETCH_ANIMAL_DATA', fetchAnimal);
}

export default selectedAnimal;