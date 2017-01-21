var users = require('./users.json');
var fs = require('fs');

var adminInfo = function(){
    console.log(JSON.stringify(users, null, 2))
};

module.exports = {
    adminInfo
}