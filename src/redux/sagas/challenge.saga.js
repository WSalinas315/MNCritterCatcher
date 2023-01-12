import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// PUT challenge_user table based on new sighting
function* updateChallenges(action) {
  try {
    let challenge_animal = yield axios.get(`/api/challenge/${action.payload.animal_id}`);
      if (challenge_animal) {
        yield;
        let payload = {user_id: action.payload.id, challenge_id: challenge_animal.challenge_id};
        yield;
        let challenge_user = yield axios.post(`api/challenge/user`, payload);
        console.log(`CHALLENGE USER: ${challenge_user}`)
        console.dir(challenge_user, {depth:null})
        console.log(challenge_user.challenge_id)
        // let challenge_id = challenge_user.challenge_id
        // let sightings_num = challenge_user.sightings_num + 1
        // let required_animals = yield axios.get(`/api/challenge/challenge_requirements/${challenge_id}`);
        // let is_complete = false
        // if (sightings_num >= required_animals) { 
        //   is_complete = true
        // }
        console.log("HOLA")
        // [user_id, updated_sighting_num, challenge_id]
        // payload = {user_id: action.payload.id, sightings_num: sightings_num, challenge_id: challenge_id.challenge_id, is_complete: is_complete}
        // yield axios.put(`/api/challenge`, payload);
        // yield put({ type: 'SET_CHALLENGES', payload: action.payload});
        // console.log("I GOT HERE")
    }
  } catch (error) {
    console.log('POST challenge sighting error:', error);
  }
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
  yield takeLatest('UPDATE_CHALLENGE', updateChallenges);

}

export default challenge;