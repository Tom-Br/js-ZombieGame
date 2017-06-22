/**
 * Created by Tom on 21/06/2017.
 */

function randomGen(maxNum){
    return Math.round(Math.random() * maxNum);
}

var weapon;
var weaponList = [
    "Axe",
    "Bottle of Gin",
    "A 1080 GTX Graphics card",
    "Box of Kleenex"
];
weapon = weaponList[ randomGen(weaponList.length -1 )]


var startScen = [
    "You wake up in a hospital ...",
    "You've been in a car accident ... ",
    "You hear something come up the stairs ..."
];

alert(startScen[ randomGen(startScen.length -1 )]);
alert("You look around and grab the nearest ... " + weapon)

var survival = randomGen(2);
console.log(survival);

if(survival === 0){
    alert("The zombie beat you and took your " + weapon);
}
else{
    alert("You smash the zombie in the head with your " + weapon);
}


