const express         = require('express')
const app             = express();
const cookieParser    = require('cookie-parser');
const port            = 8005;
const bodyParser      = require("body-parser"); //body parser include
const router          = require('./router/index'); // router file included

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(cookieParser());
// define static path
app.use(express.static('assets'));

app.set('view engine', 'ejs');
app.use('/',router);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})