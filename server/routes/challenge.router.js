const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET for subtypes filter search
router.get('/:id', (req, res) => {
  let userID = req.params.id;

  let challengeQuery = `SELECT "challenge".*, "challenge_user"."is_complete" FROM "challenge"
                        JOIN "challenge_user" ON "challenge_user"."challenge_id" = "challenge"."id" 
                        WHERE "challenge_user"."user_id" = $1;`;
  pool.query(challengeQuery, [userID]).then((result) => {
    console.log('RESULT HERE:', result);
    res.send(result.rows);
  }).catch((error) => {
    console.log('Error getting subtypes:', error);
    res.sendStatus(500);
  });
});

module.exports = router;
