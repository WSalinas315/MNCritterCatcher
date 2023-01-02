const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for subtypes filter search
router.get('/subtypes/:type', (req, res) => {
  console.log('did we get here')
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
  console.log('did we get here')
  let subtype = req.params.type;
  let subtypesQuery = `SELECT DISTINCT "family" FROM "animal" WHERE "subtype" = $1;`;
  pool.query(subtypesQuery, [subtype]).then((result) => {
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
