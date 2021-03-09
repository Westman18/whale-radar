
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

//routes:
const mainRoutes = require('./routes/main');
const whalesRoutes = require('./routes/whales');


//controllers:
const errorControllers = require('./controllers/errors')

//APP:
const app = express();

//SETUP:
app.set('view engine', 'ejs')//seting view engine
app.set('views', 'views') //seting htmls (ejs) folder

//static - ejs imports stuff from here:
app.use(express.static(path.join(__dirname, 'public')));

// common parser, used everytime:
app.use(bodyParser.urlencoded({extended: false}));

app.use(mainRoutes.routes)//using imported routes // admin to add on the begining, changing links!
app.use(whalesRoutes.routes)

app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*') //avoiding CORS
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST') //allowing methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization') 
    next()
})

app.use(errorControllers.wrongRequest)

app.listen(3000);