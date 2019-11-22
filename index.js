const bodyParser = require('body-parser');
const hbs = require('express-handlebars');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

const router = require('./routes/routes')

mongoose.connect('mongodb+srv://robert-wilder:Password123@cluster0-x7i4c.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname + '/views')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', router)

app.engine('.hbs', hbs({
    defaultLayout: 'layout',
    extname: '.hbs'
}));

app.use(bodyParser.json());

app.set('view engine', '.hbs');


// app.get('/', (req, res) => {
//     res.render('index');
// });

app.listen(3000, () => {
    console.log("listening on port 3000")
})