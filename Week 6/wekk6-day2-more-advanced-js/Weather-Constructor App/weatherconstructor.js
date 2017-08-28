var weather = require('weather-js');
var fs = require('fs');

// Options: 
// search:     location name or zipcode 
// degreeType: F or C 

weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function(err, result) {
 if(err) console.log(err);

 console.log(JSON.stringify(result, null, 2));
});

var myOptions = {
    name: 'Avian',
    dessert: 'cake'
    flavor: 'chocolate',
    beverage: 'coffee'
  };

  var data = JSON.stringify(myOptions);

  fs.writeFile('./config.json', data, function (err) {
    if (err) {
      console.log('There has been an error saving your configuration data.');
      console.log(err.message);
      return;
    }
    console.log('Configuration saved successfully.')
  });