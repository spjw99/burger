// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(burger) {
    orm.selectAll("burgers", function(res) {
        burger(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, burger) {
    orm.insertOne("burgers", cols, vals, function(res) {
        burger(res);
    });
  },
  updateOne: function(objColVals, condition, burger) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
        burger(res);
    });
  }
  
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;
