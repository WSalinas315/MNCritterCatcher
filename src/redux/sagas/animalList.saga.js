import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// Fetch selected animal information from database and assign data to selected animal reducer
function* fetchAnimalList(action) {
  try {
    const animals = yield axios.get(`/api/search/all`);
    console.log('animalList SAGA results:', animals);
    yield put({ type: 'SET_SEARCH_LIST', payload: animals.data });
  } catch (error) {
    console.log('GET animalList for autocomplete search error:', error);
  }
}

function* animalList() {
  yield takeLatest('FETCH_ANIMAL_LIST', fetchAnimalList);
}

export default animalList;