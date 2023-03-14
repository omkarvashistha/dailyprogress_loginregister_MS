var createError = require('http-errors');
var express = require('express');
const route = require('./routes/routes');
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(cors())
app.use('/',route);

const port = process.env.PORT || 4000;

app.listen(port,()=> {
  console.log(`Server started at https://localhost:${port}`)
})

module.exports = app;
