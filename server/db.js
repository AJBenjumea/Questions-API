const { Pool } = require('pg');
require('dotenv').config();

const config = {
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DB,
  max: 20
}

const pool = new Pool(config)

module.exports = {
  query: function(text, values, cb) {
     pool.connect(function(err, client, done) {
       client.query(text, values, function(err, result) {
        done();
        cb(err, result);
       })
     });
  }
}
