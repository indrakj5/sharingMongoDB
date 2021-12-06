const UserModel = require('../models/user');

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
};

module.exports = UserController;