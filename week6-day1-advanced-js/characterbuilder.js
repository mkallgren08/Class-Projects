var fourD6 = Math.round(Math.random()*6)+
Math.round(Math.random()*6) +
Math.round(Math.random()*6) +
Math.round(Math.random()*6);

var d10HD = Math.round(Math.random()*10 +2)

function Character(name, profession, level, str, dex, con, int, wis, cha, hp, powerpoints, spells ){
    this.name = name;
    this.profession = profession;
    this.level = level;
    this.str = str;
    this.dex = dex;
    this.con = con;
    this.int = int;
    this.wis = wis;
    this.cha = cha;
    this.hp = hp;
    this.powerpoints = powerpoints;
    this.spells = spells;
    this.printCharacter = function(){
        console.log("\n============================================================"+ 
        "\nName: " + this.name+ 
        "\nClass: " + this.profession+
        "\nLevel: " + this.level + 
        "\nStrength: " + this.str+ 
        "\nDexterity: " + this.dex+ 
        "\nConstitution: " + this.con+ 
        "\nIntelligence: " +this.int+ 
        "\nWisdom: " + this.wis+ 
        "\nCharisma: " + this.cha+ 
        "\nHit Points: " + this.hp)
        if (profession === "psion" || profession === "psychic warrior"){
            console.log("\nPower Points: " + this.powerpoints)
        } else if (profession === "wizard" || profession === "sorcerer" || profession === "cleric" 
        || profession === "paladin" || profession === "ranger" || profession === "bard" 
        || profession === "eldritch knight"){
            console.log("\nSpells: " + this.spells)
        }
        console.log("\n============================================================\n")
        
        
    }
}

var Durr = new Character("Durr", "psychic warrior", "1", fourD6 + 2, fourD6, 
    fourD6 + 2, fourD6, fourD6+2, fourD6, d10HD + 3, 15, 0)

var Frank = new Character("Frank", "fighter", "1", fourD6 + 2, fourD6, 
    fourD6 + 2, fourD6, fourD6+2, fourD6, d10HD + 3, 15, 0)

var Willy = new Character("Willy", "wizard", "1", fourD6 + 2, fourD6, 
    fourD6 + 2, fourD6, fourD6+2, fourD6, d10HD + 3, 15, "Burning Hands, Knock, Grease")

Durr.printCharacter();
Frank.printCharacter();
Willy.printCharacter();