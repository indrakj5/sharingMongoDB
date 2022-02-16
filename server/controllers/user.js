const UserModel = require('../models/user');
const mongoose = require('mongoose');

class UserController {
  static getUser (req,res) {
    UserModel.find({})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };

  static getUserId (req,res) {
    UserModel.find({_id : req.params.id})
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };
 
  static postUser (req,res) {
    UserModel.create({
      name: req.body.name,
      age: req.body.age,
      hobby: req.body.hobby 
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };

  static putUser (req,res) {
    UserModel.updateOne({_id : req.params.id}, {$set: {
      name: req.body.name,
      age: req.body.age,
      hobby: req.body.hobby}
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };

  static deleteUser (req,res) {
    UserModel.deleteOne({_id : req.params.id
    })
    .then(data => {
      res.status(200).send(data)
    })
    .catch(err => {
      res.status(500).send(err)
    })
  };
};

module.exports = UserController;