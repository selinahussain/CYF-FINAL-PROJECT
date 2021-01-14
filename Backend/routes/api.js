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

router.get('/Modules/Git_GitHub/Topics', function (req, res) {
  let selectGitGitHubTopics = `SELECT topic_id,name FROM topic WHERE subject_name = 'Git_GitHub'; `;
  pool.query(selectGitGitHubTopics, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});

router.get('/Modules/ReactJs/Topics', function (req, res) {
  let selectReactTopics = `SELECT topic_id,name FROM topic WHERE subject_name = 'REACTJS'; `;
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








router.post('/users/:userid/add-grade', (req, res) => {
	let data = req.body;
	let userId= req.params.userid;
	// iterate through the data
	for (let i = 0; i < data.length; i++) {
		let record = data[i];
		// check if the item already exists in the database
		let query = `SELECT * FROM grade WHERE topic_id = ${record.topic_id} AND users_id = ${userId}`;
		pool.query(
			query,
			(err, results) => {
				if (err) {
					throw err;
				}
				if (results.rowCount > 0) { // TODO check this is actually valid javascript
					// if it does exist, update it
					query = `UPDATE grade SET vote = ${record.vote} WHERE topic_id = ${record.topic_id} AND users_id = ${userId} `;
					pool.query(
						query,
						(err, results) => {
							if (err) {
								throw err;
							}
						});
				} else {
					// if it does not exist, add a new record
					query = `INSERT INTO grade (vote,topic_id,users_id) VALUES (${record.vote}, ${record.topic_id},${userId})`;
					pool.query(
						query,
						(err, results) => {
							if (err) {
								throw err;
							}
						});
				}
			});
	}
	// return sucess
	res.send('successful');
});







router.get('/api/getStudentGrade', function (req, res) {

 //let userId = req.params.userid
 console.log(userId)
  let selectCohorts = `SELECT ROUND(AVG(vote)), t.subject_name
  FROM grade g
  JOIN topic t on t.topic_id = g.topic_id 
  WHERE users_id = 4
  GROUP BY t.subject_name;`;
  pool.query(selectCohorts, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});







router.get('/region', function (req, res) {
  let selectCohorts = `select * from region ORDER BY region_id; `;
  pool.query(selectCohorts, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});

router.get('/region/classes', function (req, res) {
  let selectCohorts = `select * from cohort`;
  pool.query(selectCohorts, (err, results) => {
    if (err) {
      throw err;
    }

    if (results.rows.length > 0) {
      res.json(results.rows);
    }
  });
});
router.get('/region/classes/studentList', function (req, res) {
  let selectCohorts = `select * from users WHERE NOT id=5 `;
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





// router.post('/users/:userid/add-grade', (req, res) => {
//   let data = req.body;
//   let userId= req.params.userid;
//   console.log(data);
//   let query = 'insert into grade (vote,topic_id,users_id) VALUES' 
//   let values = data.map(x => {
//       return `(${x.vote}, ${x.topic_id},${userId})`
//   }).join(',');
//    query += values;
  
// console.log(query);
//   pool.query(
//     query,
//     (err, results) => {
//       if (err) {
//         throw err;
//       }
//       res.send('successful');
//     }
//   );
// });