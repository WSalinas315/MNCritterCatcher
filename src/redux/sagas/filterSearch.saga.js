import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchSubtypes(action) {
  try {
    const subtypes = yield axios.get(`/api/search/subtypes/${action.payload}`);
    yield put({ type: 'SET_SUBTYPES', payload: subtypes.data });
  } catch (error) {
    console.log('GET subtypes error:', error);
  }
}
function* fetchFamilies(action) {
  try {
    const families = yield axios.get(`/api/search/families/${action.payload}`);
    yield put({ type: 'SET_FAMILIES', payload: families });
  } catch (error) {
    console.log('GET families error:', error);
  }
}
function* fetchSpecies(action) {
  try {
    const species = yield axios.get(`/api/search/species/${action.payload}`);
    yield put({ type: 'SET_SPECIES', payload: species });
  } catch (error) {
    console.log('GET species error:', error);
  }
}

function* filterSearch() {
  yield takeLatest('FETCH_SUBTYPES', fetchSubtypes);
  yield takeLatest('FETCH_FAMILIES', fetchFamilies);
  yield takeLatest('FETCH_SPECIES', fetchSpecies);
}

export default filterSearch;