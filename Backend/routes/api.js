const passport = require('passport');
const express = require('express');

const { pool } = require('../db/dbConfig');
const { query } = require('express');
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
  let selectHTMLTopics = `SELECT topic_id, name FROM topic WHERE subject_name = 'HTML_CSS'; `;
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
  let selectJavaScriptTopics = `SELECT topic_id,name FROM topic WHERE subject_name = 'Javascript'; `;
  pool.query(selectJavaScriptTopics, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});

<<<<<<< HEAD

router.get('/Modules/Git_GitHub/Topics', function (req, res) {
  let selectGitGitHubTopics = `SELECT name FROM topic WHERE subject_name = 'Git_GitHub' `;
=======
router.get('/Modules/Git-GitHub/Topics', function (req, res) {
  let selectGitGitHubTopics = `SELECT topic_id,name FROM topic WHERE subject_name = 'Git_GitHub'; `;
>>>>>>> 9b66021d4ea2c4b1a26f24fe0da0445711ec909c
  pool.query(selectGitGitHubTopics, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});

<<<<<<< HEAD
router.get('/Modules/React/Topics', function (req, res) {
  let selectReactTopics = `SELECT name FROM topic WHERE subject_name = 'REACTJS'`;
=======
router.get('/Modules/ReactJs/Topics', function (req, res) {
  let selectReactTopics = `SELECT topic_id,name FROM topic WHERE subject_name = 'REACTJS'; `;
>>>>>>> 9b66021d4ea2c4b1a26f24fe0da0445711ec909c
  pool.query(selectReactTopics, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});

router.get('/Modules/NodeJS/Topics', function (req, res) {
  let selectNodeJsTopics = `SELECT topic_id,name FROM topic WHERE subject_name = 'NodeJS'; `;
  pool.query(selectNodeJsTopics, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});

router.get('/Modules/PostgreSQL/Topics', function (req, res) {
  let selectPostgreSQLTopics = `SELECT topic_id,name FROM topic WHERE subject_name = 'PostgreSQL'; `;
  pool.query(selectPostgreSQLTopics, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});

<<<<<<< HEAD
router.post('/add-grade', (req, res) => {
  let data = [req.body];
  data.forEach((obj) => {
    pool.query(
      `insert into grade (vote,topic_id)
            values($1,$2)`,
      [
        obj.vote,
        obj.topic_id 
      ],
      (err, results) => {
        if (err) {
          throw err;
        }
        res.send('successful');
      }
    );
  });
});
=======

router.get('/Modules/Users/:userid/GetGrade', function (req, res) {
  let userId = req.params.userid
  let selectPostgreSQLTopics = `SELECT * FROM grade WHERE users_id = ${userId}; `;
  pool.query(selectPostgreSQLTopics, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});



router.post('/add-grade', (req, res) => {
  let data = req.body;
  console.log(data);
  let query = 'insert into grade (vote,topic_id) VALUES' 
    let values = data.map(x => {
      return `(${x.vote}, ${x.topic_id})`
  }).join(',');
   query += values;
  
console.log(query);
  pool.query(
    query,
    (err, results) => {
      if (err) {
        throw err;
      }
      res.send('successful');
    }
  );
});




>>>>>>> 9b66021d4ea2c4b1a26f24fe0da0445711ec909c
module.exports = router;