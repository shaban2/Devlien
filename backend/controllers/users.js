const User = require("../backend/models").User;
const Account = require("../backend/models").Account;

module.exports = {
  list(req, res) {
    return Account.findAll()
      .then((users) => res.status(200).send(users))
      .catch((error) => res.status(400).send(error));
  },
  
  create(req, res) {
    return Account.create({
      name: req.body.name,
      email:req.body.email,
      phone_number:req.body.phone_number,
    })
      .then((account) => res.status(201).send(account))
      .catch((error) => res.status(400).send(error));
  },
};




