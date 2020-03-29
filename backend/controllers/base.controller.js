// Base controller class
const express = require('express');
const router = express.Router();

class BaseController{
  //Passes name and associated model to controllers
  //Binds functions to controller
  constructor(name){
    this.name = name;
    this.model = require('../models/'+name+'.model');
    this.all = this.all.bind(this);
    this.getone = this.getone.bind(this);
    this.add = this.add.bind(this);
  }
  //Get all records
  async all(req, res, next){
    this.model.find({}, (err, records) => {
      console.log("Getting all records of " + this.name);
      if(err){
        next(err)
        console.log('Error occured');     //Write error handler
      }
      else{
        return res.send(records);
      }
    });
  }
  //Get single record
  async getone(req, res, next){
    console.log("Getting record of " + req.params.firstname + " in "+this.name);
    var firstname = req.params.firstname;
    var lastname = req.params.lastname;
    this.model.find({firstname: firstname, lastname: lastname}, (err, member)=>{
      if(err){
        console.log('Error occured');
      }
      else{
        return res.send(member);
      }
    })
  }
  add(req, res, next){}
}

module.exports = BaseController;
