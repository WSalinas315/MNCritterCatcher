const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/* GET all sightings for a user from the database */
router.get('/:id', (req, res) => {
  console.log('In sighting router GET');
  let userID = req.params.id;
  console.log('User ID in GET is:', userID);
  let sightingsQuery = `SELECT * FROM "sighting" WHERE "user_id" = $1;`;
  pool.query(sightingsQuery, [userID]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error retrieving sightings for user', userID, ':', error);
    res.sendStatus(500);
  });
});

/* POST a new sighting to the database */
router.post('/', (req, res) => {
  console.log('In sighting router POST');
  let sighting = req.body;
  console.log('Sighting info submitted to server:', sighting);
  let sightingQuery = `INSERT INTO "sighting" ("user_id", "animal_id", "date", "location", "caption", "image", "public")
                       VALUES ($1, $2, $3, $4, $5, $6, $7);`;
  pool.query(sightingQuery, [sighting.user_id, sighting.animal_id, sighting.date, sighting.location, sighting.caption, sighting.image, sighting.public]).then((result) => {
    res.sendStatus(201);
  }).catch((error) => {
    console.log('Error posting a new sighting:', error);
    res.sendStatus(500);
  });
});

/* DELETE a sighting by ID */
router.delete('/:id', (req, res) => {
  console.log('In server router DELETE');
  let sightingID = req.params.id;
  let deleteQuery = `DELETE FROM "sighting" WHERE "id" = $1;`;
  pool.query(deleteQuery, [sightingID]).then((result)=> {
    res.sendStatus(200);
  }).catch((error) => {
    console.log('Error deleting sighting', sightingID, ':', error);
    res.sendStatus(500);
  });
});

/* PUT for updating sightings caption */
router.put('/:id', (req, res) => {
  console.log('In sighting router PUT');
  let updatedCaption = req.body;
  let sightingID = req.params.id;
  let editQuery = `UPDATE "sighting" SET "caption" = $1 WHERE "id" = $2;`;
  pool.query(editQuery, [updatedCaption, sightingID]).then((result) => {
    res.sendStatus(200);
  }).catch((error) => {
    console.log('Error editing sighting', sightingID, ':', error);
    res.sendStatus(500);
  });
});

/* GET a count of all sightings for a user from the database */
router.get('/count/:id', (req, res) => {
  console.log('In sighting router count GET');
  let userID = req.params.id;
  console.log('User ID in count GET is:', userID);
  let sightingsQuery = `SELECT COUNT(*) AS "sighting_count" FROM "sighting" WHERE "user_id" = $1;`;
  pool.query(sightingsQuery, [userID]).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error retrieving sightings for user', userID, ':', error);
    res.sendStatus(500);
  });
});


module.exports = router;