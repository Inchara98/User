'use strict';

var utils = require('../utils/writer.js');
var Users = require('../service/UsersService');

module.exports.checkMobile = function checkMobile(req, res, next) {
  Users.checkMobile(req.body)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.generateOtp = function generateOtp(req, res, next, body) {
  Users.generateOtp(body)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.preference = function preference(req, res, next, body) {
  Users.preference(body)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.token = function token(req, res, next, body) {
  Users.token(body)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.verifyotp = function verifyotp(req, res, next, body) {
  Users.verifyotp(body)
    .then(function(response) {
      utils.writeJson(res, response);
    })
    .catch(function(response) {
      utils.writeJson(res, response);
    });
};

module.exports.accountDetails = function accountDetails (req, res, next, body) {
  Users.accountDetails(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.chcekMobile = function chcekMobile (req, res, next, body) {
  Users.chcekMobile(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
