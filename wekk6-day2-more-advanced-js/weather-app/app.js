const {start} = require('./user');
const {adminStart} = require('./readWrite');

switch (process.argv[2]){
  case 'user':
    start(process.argv[3], process.argv.slice(4)); break;
  case 'admin':
    adminStart(); break;
  
  default: 
    console.log("Sorry, I didn't recognize that command! Check your spelling and make sure it"+
  "follows this format: \nnode app.js admin OR node app.js user <name> '<Location (format City, State)>'")
  break;
}