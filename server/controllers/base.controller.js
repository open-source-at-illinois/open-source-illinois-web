// Base controller class
const express = require('express');
const router = express.Router();

class BaseController{
  constructor(name){
    this.name = name;
  }
  all(req, res){}
  getone(req, res, next){}
  add(req, res, next){}
  // this.all = (req, res) => {};
  // this.add = (req, res) => {};
  // this.put = (req, res) => {};
  // this.del = (req, res) => {};
}

module.exports = BaseController;
