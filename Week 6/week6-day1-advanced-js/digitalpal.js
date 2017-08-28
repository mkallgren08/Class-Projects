function DigitalPal (hungry, sleepy, bored, age){
    this.hungry = hungry;
    this.sleepy = sleepy;
    this.bored = bored;
    this.age = age;
    this.feed = function(){
        if (this.hungry === true){
            console.log("That was yummy!")
            this.hungry = false;
            this.sleepy = true;
        } else if (this.hungry === false) {
            console.log("No thanks, I'm full!")
        }
    }
    this.sleepy = function(){
        if (this.sleepy === true){
            console.log("Zzzzzzzzzzzzz")
            this.sleepy = false;
            this.bored = true;
            this.increaseAge()
        } else if (this.sleepy === false){
            console.log("No way, I'm not tired!");
        }
    }
    this.play = function(){
        if (this.bored === true){
            console.log("Yay, let's play!");
            this.bored = false;
            this.hungry = true;
        } else if (this.bored === false){
            console.log("Not right now - later?");
        }
    }
    this.increaseAge = function(){
        this.age = 1;
        console.log ("Happy birthday to me! I am " + this.age + "old!")
    }
}

var Dog = new DigitalPal(false, false, true, 0)
console.log(Dog)
Dog.Outside = false;
Dog.Bark = function(){
    console.log("Woof! Woof!");
}
Dog.goOutside = function(){
    if (Dog.Outside === false){
        console.log("Oh boy! I love the outdoors!");

        Dog.Outside = true;
    } else {
        console.log("We're already outside though...")
    }
}

Dog.goInside = function (){
    if (Dog.Outside === true){
        console.log("Do we have to go in?... Awwww");
        Dog.Outside = false;
    } else {
        console.log("But we're already inside...")
    }
}

var Cat = new DigitalPal(false, false, true, 0 )

Cat.HouseConditon = 100;
Cat.meow = function(){
    console.log("Meow! Mroooooow");
} 

Cat.destroyFurniture = function(){
    Cat.HouseCondition = Cat.Housecondition - 10;
    console.log("AHAHAHAHAHA. I AM MITCHECUALZIWATAL, AZTEC GOD OF DEATH. TAKE THAT FURNITURE");
    Cat.bored = false;
    Cat.sleepy = true;
}

Dog.goOutside();