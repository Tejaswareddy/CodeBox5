const express= require("express");
const app = express();
const m=require("mongoose");
const bp=require("body-parser");
app.set('view engine','ejs')

app.use(bp.urlencoded({extended: true}));

m.connect("mongodb://localhost:27017/signup");
const st={
    fname:String,
    email:String,
    passwrod: String
}
const st1={
    uname:String,
    password: String
}
const st2={
    name:String,
    email:String,
    message: String
}
const Student=m.model("signs1", new m.Schema(st, { collection: "signs1" }));
const Student1=m.model("signs2", new m.Schema(st1, { collection: "signs2" }));
const Student2=m.model("customer-support", new m.Schema(st2, { collection: "customer-support" }));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})
app.get("/123",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.get("/customs",function(req,res){
    res.sendFile(__dirname+"/queries.html");
})
app.get("/jassu",function(req,res){
    res.sendFile(__dirname+"/index1.html");
})
app.get("/store",function(req,res){
    Student.find({}).then(function(data){
        res.render("student",{
        datalist:data 
        })
    }).catch(function(err){
        console.log("there is an error");
    })
})

app.post("/storedata", function(req, res) {
    const newst = new Student({
        fname: req.body.fname,
        email: req.body.email,
        password: req.body.password
    });
    newst.save();
    res.redirect("/123"); 
});
app.post("/storelogin",function(req,res){
    const newst1=new Student1({
        uname:req.body.uname,
        regname:req.body.regname,
        password:req.body.password
    });
    newst1.save();
    res.redirect("/jassu");
    
    })
    app.post("/storecum",function(req,res){
        const newst2=new Student2({
            name:req.body.name,
            email:req.body.email,
            message:req.body.message
        });
        newst2.save();
        res.redirect("");
        
        })
app.listen(3985,function(){
    console.log("the server is running in the port 3000");
})

