function Programmer(name, position, age, favoriteLang){
    this.name = name;
    this.position = position;
    this.age = age;
    this.favoriteLang = favoriteLang;
    this.printBio = function(){
        console.log("\n======================================="+
        "\nName: " + this.name + "\nPosition: " + this.position +
        "\nAge: " + this.age + "\nFavorite Coding Language: " + 
        this.favoriteLang + "\n======================================"
        );
    }
}

var michael_kallgren = new Programmer("Michael Kallgren", "student", 27, "JavaScript")
michael_kallgren.printBio();