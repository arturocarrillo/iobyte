// load the things we need
const path = require('path');
const express = require('express');
const app = express();

//Setting
app.set('port', 4400);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// set the view engine to ejs
app.set('view engine', 'ejs');

//Routes
app.use(require('./routes/routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')))

//Lintening server port
app.listen(app.get('port'), () => {
  console.log('Server on port', app.get('port'));

});