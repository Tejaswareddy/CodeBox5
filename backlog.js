const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/signup")

.then(()=>{
  console.log("mongodb connected")
}).catch(()=>{
  console.log('error')
})

const signupSchema = new mongoose.Schema({
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

const collection = new mongoose.model('sign', signupSchema)
data=[{
  fname : 'teja',
  lname : 'reddy',
  email:'tejar2639@gmail.com',
  password: "123456"

},
{
  fname : 'reja',
  lname : 'reddy',
  email:'2639@gmail.com',
  password: "123456"

},
{
  fname : 'teha',
  lname : 'reddy',
  email:'tehar2639@gmail.com',
  password: "123456"

}
]
collection.insertMany(data)