const express= require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');

app.use(express.static('./assets'));
app.use(expressLayouts);

//extract styles and scripts from subpages into layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

//any requests coming in will require the index of routes.
app.use('/',require('./routes'));
 
//to set up the view enjine
app.set('view engine','ejs');
app.set('views','./views');


app.listen(port,function(err){
    if (err){
        console.log(`Error in the running server: ${err}`);
    }
    console.log(`Server is running on port:${port}`);
})  
   