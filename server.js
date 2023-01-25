const express = require('express');
const body_parser = require('body-parser');
const app = express();
const port = 3000;
//configuration middleware
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));
//const multer = require('multer');
/*const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });



app.post('/upload', upload.single('file'), (req, res) => {
  try {
    res.send({ url: `/uploads/${req.file.originalname}` });
  } catch (error) {
    res.send(error);
  }
})*/
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