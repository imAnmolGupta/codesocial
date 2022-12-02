const express= require('express');
const app=express();
const port=8000;

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