const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for subtypes filter search
router.get('/subtypes/:type', (req, res) => {
  let type = req.params.type;
  let subtypesQuery = `SELECT DISTINCT "subtype" FROM "animal" WHERE "type" = $1;`;
  pool.query(subtypesQuery, [type]).then((result) => {
    console.log('RESULT HERE:', result);
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error getting subtypes:', error);
    res.sendStatus(500);
  });
});

// GET for families filter search
router.get('/families/:type', (req, res) => {
  let subtype = req.params.type;
  let familiesQuery = `SELECT DISTINCT "family" FROM "animal" WHERE "subtype" = $1;`;
  pool.query(familiesQuery, [subtype]).then((result) => {
    console.log('RESULT HERE:', result);
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error getting subtypes:', error);
    res.sendStatus(500);
  });
});

// GET for species filter search
router.get('/species/:type', (req, res) => {
  let family = req.params.type;
  let speciesQuery = `SELECT DISTINCT "name" FROM "animal" WHERE "family" = $1;`;
  pool.query(speciesQuery, [family]).then((result) => {
    console.log('RESULT HERE:', result);
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error getting subtypes:', error);
    res.sendStatus(500);
  });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
