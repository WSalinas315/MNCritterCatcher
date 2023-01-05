const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  let sighting = req.body;
  console.log('Sighting info submitted to server:', sighting);
  let sightingQuery = `INSERT INTO "sighting" ("user_id", "animal_id", "date", "location", "caption", "image")
                       VALUES ($1, $2, $3, $4, $5, $6);`;
  pool.query(sightingQuery, [sighting.user_id, sighting.animal_id, sighting.date, sighting.location, sighting.caption, sighting.image]).then(result => {
    res.sendStatus(201);
  }).catch(error => {
    console.log('Error posting a new sighting:', error);
    res.sendStatus(500);
  });
});

module.exports = router;