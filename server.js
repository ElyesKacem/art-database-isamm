const express = require('express');
const body_parser = require('body-parser');
const app = express();
const port = 3000;
//configuration middleware
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

//api middleware list
app.use('/api', require('./src/routes/route'));



//api test
app.get('/', (req, res) => {
  res.send('api is working');
})

//express port listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})