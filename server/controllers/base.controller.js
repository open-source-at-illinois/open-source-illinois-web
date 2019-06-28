// Base controller class
const express = require('express');
const router = express.Router();

class BaseController{
  constructor(name){
    this.name = name;
    console.log('../models/'+name+'.model')
    this.model = require('../models/'+name+'.model');
    this.all = this.all.bind(this);
    this.getone = this.getone.bind(this);
    this.add = this.add.bind(this);
  }

  all(req, res, next){
    this.model.find({}, (err, records) => {
      if(err){
        console.log('Error occured');     //Write error handler
      }
      else{
        return res.send(records);
      }
    });
  }

  getone(req, res, next){
    console.log(req.params.name)
    var name = req.params.name;
    this.model.find({firstname: name}, (err, member)=>{
      if(err){
        console.log('Error occured');
      }
      else{
        return res.send(member);
      }
    })
  }
  add(req, res, next){}
  // this.all = (req, res) => {};
  // this.add = (req, res) => {};
  // this.put = (req, res) => {};
  // this.del = (req, res) => {};
}

module.exports = BaseController;
