const express = require('express');
const body_parser = require('body-parser');
const app = express();
const cors = require('cors')
const port = 3000;
//configuration middleware
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));



var corsOptions = {
  origin: '*'
}

app.use(cors(corsOptions))
//api middleware list
app.use('/api', require('./src/routes/route'));


app.use('/uploads', express.static('./uploads'));



//api test
app.get('/', (req, res) => {
  res.send('api is working');
})
//express port listen
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})