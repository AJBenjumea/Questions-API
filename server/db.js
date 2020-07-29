const { Pool } = require('pg');
require('dotenv').config();


const config = {
  user: process.env.APG_USER,
  password: process.env.APG_PASSWORD,
  host: process.env.APG_HOST,
  database: process.env.PG_DB,
  port: 5432,
  ssl: true,
  max: 40
}

const pool = new Pool(config)

module.exports = {
  query: function(text, values, cb) {
     pool.connect(function(err, client, done) {
      if (err) {
        return console.error('Error acquiring client', err.stack)
      }
      client.query(text, values, function(err, result) {
        done();
        cb(err, result);
       })
     });
  }
}
