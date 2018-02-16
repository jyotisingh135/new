var express=require('express');
var app=express();
var mysql=require('mysql');
var con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'demo'
});
con.connect((err)=>{
    if(err)throw err;
    console.log('connected');
});
app.get('/',(req,res)=>{
    con.query('select * from customer',(err,result)=>{
        if(err){
            console.log("do data found")
        }
        else
        {
            console.log(result);
            res.send(result);
        }

    });
});
app.post('/new',(req,res)=>{
    con.query('insert into customer(name,city) values('+req.body.name+','+req.body.city+')',(err,result,field)=>{
        if(err)throw err;
        console.log(result);
        res.send(result);
    })

})
app.listen(5000,()=>{});

