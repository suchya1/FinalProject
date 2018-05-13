var express = require('express');
var Exercise = require('./model');

var app = express.Router();

var exercise=new Exercise();

module.exports = app
    .get('/state',(req,res)=>res.send(exercise))
    .post('/share',(req,res)=>{
        console.log(req.body);
        try{
            exercise.SubmitLog(req.body.Text,req.body.UserId);
            res.send({success:true});
        }
        catch(error){
            res.status(403).send({success:false,message:error.message});
        }
    })
    .get('/log',(req,res)=>
    res.send(exercise.GetLog(req.query.UserId))
    )
    

   /* .get('/tips',(req,res)=>
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
    .get('/state',(req,res)=>res.send(exercise))*/
    