const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for challenge_animal table based on animal id
router.get('/:id', (req, res) => {
  let animal_id = req.params.id;
  let challengeQuery = `SELECT * FROM "challenge_animal" WHERE "animal_id" = $1`;
  pool.query(challengeQuery, [animal_id]).then((result) => {
    console.log('RESULT HERE:', result);
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error getting challenges based on animal id:', error);
    res.sendStatus(500);
  });
});

// GET challenge_user table based on challenge_id
router.post('/user', (req, res) => {
  console.log("HIIIII")
  console.log(`req.body is: ${req.body}`)
  console.dir(req.body, {depth:null})
  let challenge_id = req.body.challenge_id;
  let user_id = req.body.user_id
  console.log(`challenge_id: ${challenge_id}`)
  console.log(`user_id: ${user_id}`)
  let challengeQuery = `SELECT * FROM "challenge_user" WHERE "user_id" = $1 AND "challenge_id" = $2`;
  pool.query(challengeQuery, [user_id, challenge_id]).then((result) => {
    console.log('RESULT HERE:', result);
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error getting challenge data based on user id and challenge id:', error);
    res.sendStatus(500);
  });
});

// GET req_animals from challenge table based on challenge id
router.get('/challenge_requirements/:id', (req, res) => {
  let challenge_id = req.params.id;
  console.log(`LOOK HERE, CHALLENGE ID: ${challenge_id}`)
  let challengeQuery = `SELECT "req_animals" FROM "challenge" WHERE "id" = $1`;
  pool.query(challengeQuery, [challenge_id]).then((result) => {
    console.log('RESULT HERE:', result);
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error getting required animals number based on challenge id from challenge table:', error);
    res.sendStatus(500);
  });
});

/* PUT for updating challenge sighting number */
router.put('/:id', (req, res) => {
  console.log('In challenge router PUT');
  let updated_sighting_num = req.body.sightingNum;
  let challenge_id = req.body.challenge_id;
  let user_id = req.body.userId;
  let is_complete = req.body.is_complete
  let editQuery = `UPDATE "challenge_user" SET "sighting_num" = $2 AND "is_complete" = $4 WHERE "user_id" = $1 and "challenge_id" = 3;`;
  pool.query(editQuery, [user_id, updated_sighting_num, challenge_id, is_complete]).then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log('Error updating challenge_user table with new sighting, challenge #', challenge_id, ':', error);
    res.sendStatus(500);
  });
});

module.exports = router;
