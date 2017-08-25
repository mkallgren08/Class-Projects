const fs = require('fs');

function adminStart() {
  fs.readFile('log.json','utf8', function(err,data) {
    if(err){
      console.log(err);
    } else {
      let obj = JSON.parse(data); //now it an object
      obj.search.forEach((user) => {
        let name =
          `
User: ${user.name}
Location: ${user.searchTerm}
Date: ${user.time}
----------------------------------
      `;
        console.log(name);
      })
    }
  });
}

function userStart(username, location, date) {
  fs.readFile('log.json','utf8', function(err,data) {
    if(err){
      console.log(err);
    } else {
      let obj = JSON.parse(data); //now it an object
      obj.search.push({name: username, searchTerm: location, time: date}); //add some data
      let json = JSON.stringify(obj); //convert it back to json
      fs.writeFile('log.json', json, 'utf8', function(err) {
        if (err)
          console.log(err);
      });
    }
  });
}

module.exports = {
  adminStart,
  userStart
};

