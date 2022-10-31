const characters = ["Miss Scarlet", "Mr. Green", "Colonel Mustard", "Professor Plum", "Mrs. Peacock", "Mrs. White"];

const weapons = ["candlestick", "dagger", "lead pipe", "revolver", "rope", "wrench"];

const rooms = ["kitchen", "ballroom", "conservatory", "dining room", "billiard room", "libary", "lounge", "hall", "study"];

//console.log(characters[0]);
//console.log(weapons[0]);
//console.log(rooms[0]);

function generateScenerio() {
    let killerSeed = numberGenerator(characters);
    let killer = characters[killerSeed];

    let weaponSeed = numberGenerator(weapons);
    let weapon = weapons[weaponSeed];

    let roomSeed = numberGenerator(rooms);
    let room = rooms[roomSeed];

    console.log(`the murder was committed by ${killer} in the ${room} with the ${weapon}`);


};

function numberGenerator(item) {

    return Math.floor((item.length)*(Math.random()));


}

//console.log(weapons.length);
//console.log(numberGenerator(characters));
//console.log(characters.length);

generateScenerio();