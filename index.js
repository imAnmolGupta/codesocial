const express= require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
const session=require('express-session');
const passport = require('passport');
const passportLocal=require('./config/passport-local-strategy');
const passportJWT=require('./config/passport-jwt-strategy');
const passportGoogle=require('./config/passport-google-oauth2-strategy');
// const { populate } = require('./models/user');
const MongoStore = require('connect-mongo');
// const { default: mongoose } = require('mongoose');
const sass = require('sass');
const fs = require('fs');
const path = require('path');
const flash= require('connect-flash');
const customMware=require('./config/middleware');

// Compile SCSS to CSS
const scssPath = './assets/scss';
const cssPath = './assets/css';

// Ensure CSS directory exists
if (!fs.existsSync(cssPath)) {
    fs.mkdirSync(cssPath, { recursive: true });
}

// Compile all SCSS files
fs.readdirSync(scssPath).forEach(file => {
    if (file.endsWith('.scss')) {
        const result = sass.compile(path.join(scssPath, file));
        fs.writeFileSync(
            path.join(cssPath, file.replace('.scss', '.css')),
            result.css
        );
    }
});

app.use(express.urlencoded());

app.use(cookieParser());

app.use(express.static('./assets'));

//make the upload path available to the browser
app.use('/uploads',express.static(__dirname +'/uploads'));
app.use(expressLayouts);

//extract styles and scripts from subpages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);


//to set up the view enjine
app.set('view engine','ejs');
app.set('views','./views');

 
//using mongo store to store session cookie in db
app.use(session({
    name:'codeSocial',
    //TODO change the secret before deployment in production mode
    secret:'blahsomething',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/codesocial_development',
        autoRemove: 'disabled'
    })
}));
 


app.use(passport.initialize());
app.use(passport.session());

//to check whether a session cookie is present or not
app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(customMware.setFlash);

//any requests coming in will require the index of routes.
app.use('/',require('./routes'));



app.listen(port,function(err){
    if (err){
        console.log(`Error in the running server: ${err}`);
    }

    console.log(`Server is running on port:${port}`);
})  
 