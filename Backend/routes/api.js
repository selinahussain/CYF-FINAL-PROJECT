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

router.get('/Modules/HTML_CSS/Topics', function (req, res) {
  let selectHTMLTopics = `SELECT name FROM topic WHERE subject_name = 'HTML_CSS'; `;
  pool.query(selectHTMLTopics, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});
router.get('/Modules/JavaScript/Topics', function (req, res) {
  let selectJavaScriptTopics = `SELECT name FROM topic WHERE subject_name = 'Javascript'; `;
  pool.query(selectJavaScriptTopics, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});


router.get('/Modules/Git-GitHub/Topics', function (req, res) {
  let selectGitGitHubTopics = `SELECT name FROM topic WHERE subject_name = 'Git_GitHub'; `;
  pool.query(selectGitGitHubTopics, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});

router.get('/Modules/React/Topics', function (req, res) {
  let selectReactTopics = `SELECT name FROM topic WHERE subject_name = 'REACTJS'; `;
  pool.query(selectReactTopics, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});

module.exports = router;