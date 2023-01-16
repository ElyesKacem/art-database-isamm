var express = require('express'),
    body_parser = require('body-parser'),
    pg = require('pg'),
    app = express();

app.use(body_parser.json())
app.use(body_parser.urlencoded({ extended: false }))

const client = new pg.Client({
    user: 'postgres',
    host: 'postgre_db',
    database: 'postgres',
    password: 'postgres',
    port: 5432
  })
console.log(client.connect());
client.query('SELECT NOW()', (err, res) => {
    console.log(err, res)
    client.end()
  });