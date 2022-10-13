const express         = require('express')
const app             = express();
const cookieParser    = require('cookie-parser');
const port            = 8005;
const bodyParser      = require("body-parser"); //body parser include
const router          = require('./router/index'); // router file included
const session         = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));

app.use(cookieParser());
// define static path
app.use(express.static('assets'));

app.set('view engine', 'ejs');



app.use('/',router);
app.use(cookieParser('project_management'));

const oneDay = 1000 * 60 * 60 * 24;

app.use(session({secret: 'project_management', saveUninitialized: true, resave: false}));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})