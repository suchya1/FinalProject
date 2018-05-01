var express = require('express');
var Game = require('./model');

var app = express.Router();

var exercise=new exercise();

module.exports = app
    .get('/tips',(req,res)=>
        res.send(exercise.GetTips(req.query.userId))
    )
    .post('/tips',(req,res)=>{
        console.log(req.body);
        try{
            exercise.ChooseTip(req.body.Text,req.body.userId);
            res.send({success:true});
        }
        catch(error){
            res.status(403).send({success:false,message:error.message});
        }
    })
    .get('/state',(req,res)=>res.send(exercise))
    