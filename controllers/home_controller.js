module.exports.home=function(req,res){
    console.log(req.cookies);
    res.cookie('user',333888);
    return res.render('home',{
        title:"home"
    });
} 