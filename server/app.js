const express    = require('express');
const app        = express();
const port       = 3000;
// const mongoose   = require('mongoose');
const bodyParser = require('body-parser');
const cors       = require('cors');
const users      = require('./routes/user');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users', users);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/* CEK PORT CONNECTION */
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// /* CEK MONGODB CONNECTION */
// var db = "mongodb://localhost:27017/digitalSkola";
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });
// const conSuccess = mongoose.connection
// conSuccess.once('open', _ => {
//   console.log('Database connected:', db)
// })
