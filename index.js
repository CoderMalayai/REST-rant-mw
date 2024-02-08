// Modules 
require('dotenv').config();
const express = require('express');
const app = express();

// Express Settings
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.render('Home');
});

//Load the places controller
app.use('/places', require('./controllers/places'));

// wildcard/ 404 route
app.get('*', (req, res) => {
    console.log('user requested unknown route: ', req.url);
    res.status(404).send('<h1>404 Page</h1>');
});

// Connections
app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});