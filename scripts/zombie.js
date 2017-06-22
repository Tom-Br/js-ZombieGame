/**
 * Created by Tom on 21/06/2017.
 */

//Lists
var scenarios = [
    "You wake up in a hospital ...",
    "You've been in a car accident ... ",
    "You hear something come up the stairs ..."
];

//Variables
var outcome;
var character, zombie;

//Object functions

function Character(name, charClass){

    this.health = 5;
    this.strength = 2;
    this.stealth = 2;
    this.hit = 0.80;
    this.name = name;
    this.charClass = charClass;

}

function Zombie(){
    this.name = "Zombie";
    this.health = 7;
    this.strength = 3;
    this.hit = 0.50;
}

//Game Functions

function selectScenario(){

    window.alert(scenarios[randomGen(scenarios.length-1)]);

}

function createCharacter(){

    character = new Character(window.prompt("What is your name?"), window.prompt("What is your character? (Soldier, Doctor or Politician)").toLowerCase());

    if (!character.name){
        character.name = window.prompt("Sorry I didn't quite get that name?");
        if (!character.name){
            window.alert("Okay... I'll just call ya Jimmy");
            character.name = "Jimmy";
        }
    }
    if(!character.charClass){
        character.name = window.prompt("Soldier, Doctor or Politician.").toLowerCase();
        if(!character.charClass){
            window.alert("To the army it is!");
            character.charClass = "soldier";
        }
    }

    adjustClassSkills();
}

function adjustClassSkills(){

    if(character.charClass === "soldier"){
        character.strength += 5;
    }
    if(character.charClass === "doctor"){
        character.health += 5;
    }
    if(character.charClass === "politician"){
        character.stealth += 5;
    }
}

function playGame(){


    zombie = new Zombie();

    window.alert("The brave adventurer en former " + character.charClass + " " + character.name +
        " enter a store for some loot. You notice a zombie slowly shuffling around among the destruction.");

    do{
        var hit = Math.random();
        console.log(character.health);
        console.log(zombie.health);
        console.log(hit);

        var choice = window.prompt("What action shall you take? (attack or stealth)");

        if(choice === "attack"){
            roundChar(hit);
            roundZombie(hit);
        }
        else if (choice === "stealth"){
            if ((character.stealth) >= hit * 10){
                zombie.health = 0;
                window.alert("You got away!");
            }
            else{
                window.alert("The zombie saw you!")
                roundZombie(hit);
            }
        }
        else{
            window.alert("Choose a valid option (attack or stealth)");
        }
    }while((character.health > 0) && (zombie.health > 0));

    if(character.health <= 0){
        outcome = "Lose";
    }
    else{
        outcome = "Win";
    }
}

function roundChar(hit){
    if(character.hit >= hit){
        zombie.health -= character.strength;
        window.alert("Your attack hit the zombie in the face!")
    }
    else{
        window.alert("You missed!")
    }
}

function roundZombie(hit){
    if(zombie.hit >= hit){
        character.health -= zombie.strength;
        window.alert("The zombie bites you in the arm!")
    }
    else{
        window.alert("The zombie missed!")
    }
}

function checkOutcome(){
    if(outcome.toLowerCase() === "lose"){
        window.alert("You lose!");
    }
    else{
        window.alert("You win!");
    }
}

function randomGen(maxNum){
    return Math.round(Math.random() * maxNum);
}

//Program
selectScenario();
createCharacter();
playGame();
checkOutcome();

