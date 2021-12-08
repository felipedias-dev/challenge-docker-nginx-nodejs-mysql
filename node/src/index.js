const express = require ('express');
const { createConnection } = require ('mysql');

const app = express();

let counter = 1;

app.get('/', (req, res) => {
  const conn = createConnection({
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'fullcycle'
  });

  conn.connect(function (err, ...args) {
    if (err) {
      console.log('Erro:', err);
      return
    }
  });

  console.log('MySQL connected!');

  conn.query(`INSERT INTO people (name) VALUES ("Nome ${counter++}");`, function (err, results, fields) {
    if (err) throw err;
  });

  let page = `<h1>Full Cycle Rocks!</h1><br/><ul>`;

  conn.query('SELECT * FROM people;', function (err, results, fields) {
    if (err) throw err;

    const parsedResults = JSON.parse(JSON.stringify(results));

    parsedResults.forEach(result => {
      page += `<li>${result.name}</li>`;
    });

    page += '</ul>';
    
    res.send(page);
  });

  conn.end();
});

app.listen(5000, console.log('API running on port 5000'));
