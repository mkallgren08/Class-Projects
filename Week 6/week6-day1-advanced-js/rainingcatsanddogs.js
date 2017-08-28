var dog = {
    raining: true,
    noise: "woof!",
    makeNoise: function() {
        if (this.raining === true){
            console.log(this.noise);
        }
    }
}

var cat = {
    raining: false,
    noise: "mrow",
    makeNoise: function() {
        if (this.raining === true){
            console.log(this.noise);
        }
    }
}

dog.makeNoise();
dog.raining = false;
cat.raining = true;
cat.makeNoise();