const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');


const app = express();

//app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use('/PetBenefit', express.static('PetBenefit'));

app.engine('hbs', exphbs());
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.render('Store_Cat');
});
app.get('/Store_Cat', function (req, res) {
  res.render('Store_Cat');
});

app.get('/Rent_Cat', function (req, res) {
    res.sendFile(__dirname + '/PetBenefit/html/Rent_Cat.html');
  });

const PORT = 3000;
app.listen(PORT, function() {
  console.log(`E-Commerce app is listening at http://localhost:${PORT}`)
})