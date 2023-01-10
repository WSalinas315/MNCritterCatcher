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

// GET for species filter search
router.get('/selected/:name', (req, res) => {
  let species = req.params.name;
  let speciesQuery = `SELECT * FROM "animal" WHERE "name" = $1;`;
  pool.query(speciesQuery, [species]).then((result) => {
    console.log('RESULT HERE:', result);
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error getting animal data:', error);
    res.sendStatus(500);
  });
});

// GET for all species
router.get('/all', (req, res) => {
  const speciesQuery = `SELECT "name" FROM "animal" ORDER BY "name" ASC;`;
  pool.query(speciesQuery).then((result) => {
    console.log('RESULT HERE:', result);
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error getting subtypes:', error);
    res.sendStatus(500);
  });
});

module.exports = router;
