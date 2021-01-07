const passport = require('passport');
const express = require('express');

const { pool } = require('../db/dbConfig');
const router = express.Router();

// check authentication for all routes below
router.use(
  passport.authenticate('jwt', {
    session: false,
  })
);


router.get('/topic', function (req, res) {
  let selectModules = `SELECT * FROM topic`; //modify this line
  pool.query(selectModules, (err, results) => {
    if (err) {
      res.json(null);
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});


router.get('/subjects', function (req, res) {
  let selectCohorts = `SELECT * FROM  subject `;
  pool.query(selectCohorts, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});


router.get('/classes', function (req, res) {
  let selectCohorts = `SELECT * FROM  cohort `;
  pool.query(selectCohorts, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});


module.exports = router;