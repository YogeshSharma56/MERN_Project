const express = require("express");
const app = express();
const UserModel = require("./Models/users")
const mongoose = require('mongoose');
const cors = require ('cors');

app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://Mern-Project-User:Mern-Project-User@clustermernproject.cat4msf.mongodb.net/mernProject1?retryWrites=true&w=majority')

console.log(mongoose.connection.readyState);
app.get(("/getUsers") , (req,res)=>{

    UserModel.find({}, (err, result)=>{
        if(err){
            res.json(err)
        }else {
            res.json(result)
        }
    })
});
app.post("/createUser", async (req, res) => {
    const user = req.body;
    const newUser = new UserModel(user);
    await newUser.save();

    res.json(user);
});


app.listen(3001, ()=> {
    console.log ("Server is Working")
});