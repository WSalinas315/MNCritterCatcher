const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for subtypes filter search
router.get('/:id', (req, res) => {
  // let userID = req.params.id;

  // let subtypesQuery = `SELECT "challenge".*, "subtype" FROM "animal" WHERE "type" = $1;`;
  // pool.query(subtypesQuery, [type]).then((result) => {
  //   console.log('RESULT HERE:', result);
  //   res.send(result.rows);
  // }).catch((error) => {
  //   console.log('Error getting subtypes:', error);
  //   res.sendStatus(500);
  // });
});

module.exports = router;
