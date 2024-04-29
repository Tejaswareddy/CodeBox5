const express = require("express")
const mongoose=require("mongoose");

const app = express()
mongoose.connect("mongodb://localhost:27017/ecommerce")

const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true,
        trim: true
    },

    lname:{
        type: String,
        required: true,
        trim: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        

        trim: true
    }
    
})

const UserModel = mongoose.model("users", userSchema)

app.get("/getUsers", (req, res) =>{
    res.json(UserModel.find())

})


app.listen(4001, ()=>{
    console.log("Server is running");
})