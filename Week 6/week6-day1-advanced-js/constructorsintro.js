// This is an object constructor

function Animal(raining, noise) {
    this.raining = raining;
    this.noise= noise;
    this.makeNoise = function() {
        if (this.raining === true) {
            console.log(this.noise);
        }
    };
}


// the 'new' keyword combined with the constructor function makes a new object. 
// NEVER call a constructor function without calling "new" first
var dogs = new Animal(true, "Woof!");
var cat = new Animal (false, "Mrow!");

dogs.makeNoise();
cat.raining = true;
cat.makeNoise();