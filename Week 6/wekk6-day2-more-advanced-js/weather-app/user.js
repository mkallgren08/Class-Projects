const {userStart} = require('./readWrite');
const weather = require('weather-js');

class User {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.date = Date.now();
  }
  userSearch() {
    let username = this.name;
    let location = this.location;
    let date = this.date;
    weather.find({search: this.location, degreeType: 'F'}, function(err, result) {
      if(err) console.log(err);
      console.log(JSON.stringify(result, null, 2));
      userStart(username,location,date)
    });
  }
}

function start(par1, par2) {
  let newUser = new User(par1, par2);
  newUser.userSearch();
}

module.exports = {
  start
};