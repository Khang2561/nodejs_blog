const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const { engine } = require("express-handlebars");
app.engine("hbs", engine({
  extname: '.hbs'
}));

// HTTP logger
app.use(morgan('combined'));

// Template engine setup
//app.engine('handlebars', handlebars());
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources\\views'))
//console.log('PATH: ', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

