var fs = require('fs');
var user = require('./user.js');
var admin = require('./admin.js');

var command = (process.argv).slice(2);
console.log(command);

if (command[0] === 'user'){
    user.getWeather();
} else if (command[0] === 'admin'){
    admin.adminInfo();
};