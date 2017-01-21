var fs = require('fs');
var inquirer = require('inquirer');
var weather = require('weather-js');
var users = require('./users.json');

function User(name, city, date){
    this.name = name,
    this.city = city,
    this.date = date
};

var getWeather = function(){
    inquirer.prompt([
        {
            name: "name",
            message: "Please enter your name:"
        }, {
            name: "city",
            message: "Please enter a city:"
        }
    ]).then(function(answers){
        var city = answers.city;
        weather.find({ search: city, degreeType: "F"}, function(err, result){
            if (err){
                console.log(err);
            }
            var date = result[0].current.date;
            var newUser = new User(
                answers.name,
                answers.city,
                date
            );
            users.push(newUser);
            console.log(`Current Temperature: ${JSON.stringify(result[0].current.temperature, null, 2)} Degrees F`);
            var userInfo = () => {
                fs.writeFile('users.JSON', JSON.stringify(users, null, 2));
                
            };
            userInfo();

        })
    });
};
module.exports = {
    getWeather
}
