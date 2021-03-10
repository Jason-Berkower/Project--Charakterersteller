const BaseURL = 'https://www.dnd5eapi.co/api/';
const btn1 = document.querySelector('#generate');

// D&D5e API Documentation: http://www.dnd5eapi.co/docs/

// Call the API on page load [DONE]
// Call the API randomly on clicking generate
// Let API populate fields with relevant information
// Figure out how to let users download information as .txt document.
// Add icing to the cake.
// The cake is a lie...

window.onload = function () {
  grabDungeons();
  getQuotes();
  // getImages();
}

btn1.addEventListener('click', () => {
  removeAllOld();
  getNewCharacter();
});

async function grabDungeons() {
  try {
    let dungeons = await axios.get('https://www.dnd5eapi.co/api/');
    console.log(dungeons);
  } catch (err) {
    console.log(err.message);
  }
}

async function getQuotes() {
  try {
    let mottos = await axios.get('https://api.quotable.io/random');
    console.log(mottos);
  } catch (err) {
    console.log(err.message);
  }
}


// Function to pick random race from API
async function getRace() {
  try {
    let dRace = await axios.get('https://www.dnd5eapi.co/api/races');
    let raceArr = dRace.data.results;
    let randomRace = raceArr[Math.floor(Math.random() * raceArr.length)];
    document.getElementById('g-race').value = randomRace.index;
  } catch (err) {
    console.log(err.message);
  }
};
function removeOldRace() {
  document.getElementById('g-race').value = "";
};


// Function to pick random class from API
async function getClass() {
  try {
    let dClass = await axios.get('https://www.dnd5eapi.co/api/classes');
    let classArr = dClass.data.results;
    let randomClass = classArr[Math.floor(Math.random() * classArr.length)];
    document.getElementById('g-class').value = randomClass.index;
  } catch (err) {
    console.log(err.message);
  }
};
function removeOldClass() {
  document.getElementById('g-class').value = "";
};


let subClasses = {
  barbarian: ['Ancestral Guardian', 'Beast', 'Berserker', 'Storm Herald', 'Totem Warrior', 'Wild Magic', 'Zealot'],
  bard: ['College of Creation', 'College of Eloquence', 'College of Glamour', 'College of Lore', 'College of Swords', 'College of Valor', 'College of Whispers'],
  cleric: ['Arcana Domain', 'Death Domain', 'Forge Domain', 'Grave Domain', 'Knowledge Domain', 'Life Domain', 'Light Domain', 'Nature Domain', 'Order Domain', 'Peace Order', 'Tempest Domain', 'Trickery Domain', 'Twilight Domain', 'War Domain'],
  druid: ['Circle of Dreams', 'Circle of the Land', 'Circle of the Moon', 'Circle of the Shepherd', 'Circle of Spores', 'Circle of Stars', 'Circle of Wildfire'],
  fighter: ['Arcane Archer', 'Battle Master', 'Cavalier', 'Champion', 'Echo Knight', 'Eldritch Knight', 'Psi Warrior', 'Purple Dragon Knight', 'Rune Knight', 'Samurai'],
  monk: ['Tradition of the Astral Self', 'Tradition of the Drunken Master', 'Tradition of the Four Elements', 'Tradition of the Kensai', 'Tradition of the Long Death', 'Tradition of Mercy', 'Tradition of the Open Hand', 'Tradition of the Shadow', 'Tradition of the Sun Soul'],
  paladin: ['Oath of the Ancients', 'Oath of Conquest', 'Oath of the Crown', 'Oath of Devotion', 'Oath of Glory', 'Oathbreaker', 'Oath of Redemption', 'Oath of Vengeance', 'Oath of the Watchers'],
  ranger: ['Beast Master', 'Fey Wanderer', 'Gloom Stalker', 'Horizon Walker', 'Hunter', 'Monster Slayer', 'Swarmkeeper'],
  rogue: ['Arcane Trickster', 'Assassin', 'Inquisitive', 'Mastermind', 'Phantom', 'Scout', 'Soulknife', 'Swashbuckler', 'Thief'],
  sorcerer: ['Aberrant Mind', 'Clockwork Soul', 'Divine Soul', 'Draconic', 'Shadow', 'Storm', 'Wild'],
  warlock: ['Archfey Patron', 'Celestial Patron', 'Fathomless Patron', 'Fiend Patron', 'Genie Patron', 'Great Old One Patron', 'Hexblade', 'Undying Patron'],
  wizard: ['Tradition of Abjuration', 'Tradition of Chronurgy', 'Tradition of Conjuration', 'Tradition of Divination', 'Tradition of Enchantment', 'Tradition of Evocation', 'Tradition of Graviturgy', 'Tradition of Illusion', 'Tradition of Necromancy', 'Tradition of the Scribes', 'Tradition of Transmutation', 'Tradition of War']
};
// function getSubClass(obj) {
//   let keys = Object.keys(obj);
//   console.log(keys);
//   return obj[keys[keys.length * Math.random() << 0]];
// };
function removeOldSubClass() {
  document.getElementById('g-subclass').value = "";
};


// Includes all backgrounds from PHB and SCAG
let backgrounds = ['Acolyte', 'Charlatan', 'City Watch', 'City Watch (Investigator)', 'Clan Crafter', 'Cloistered Scholar', 'Courtier', 'Criminal', 'Criminal (Spy)', 'Entertainer', 'Entertainer (Gladiator)', 'Faction Agent', 'Far Traveler', 'Folk Hero', 'Guild Artisan', 'Guild Artisan (Guild Merchant)', 'Hermit', 'Inheritor', 'Knight of the Order', 'Mercenary Veteran', 'Noble', 'Noble (Knight)', 'Outlander', 'Sage', 'Sailor', 'Sailor (Pirate)', 'Soldier', 'Urban Bounty Hunter', 'Urchin'];
function getBackground() {
  let randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  document.getElementById('g-background').value += randomBackground;
};
function removeOldBackground() {
  document.getElementById('g-background').value = "";
};


// Function to roll attributes
function getAttributes() {
  let strength = document.querySelector('#g-attStr');
  strength.value = Math.ceil(Math.random() * 15) + 3;
  let dexterity = document.querySelector('#g-attDex');
  dexterity.value = Math.ceil(Math.random() * 15) + 3;
  let constitution = document.querySelector('#g-attCon');
  constitution.value = Math.ceil(Math.random() * 15) + 3;
  let intelligence = document.querySelector('#g-attInt');
  intelligence.value = Math.ceil(Math.random() * 15) + 3;
  let wisdom = document.querySelector('#g-attWis');
  wisdom.value = Math.ceil(Math.random() * 15) + 3;
  let charisma = document.querySelector('#g-attCha');
  charisma.value = Math.ceil(Math.random() * 15) + 3;
};


// Function to pick random main weapon
// function getMainWeapon() {

// };
function removeOldMainWeapon() {
  document.getElementById('g-mainweapon').value = "";
};


// Function to ick random secondary weapon
// function getSecondWeapon() {

// };
function removeOldSecondWeapon() {
  document.getElementById('g-secondweapon').value = "";
};


// Function to populate the inventory slots
// function getInventory(){

// };
function removeOldInventory() {
  document.getElementById('g-inv1').value = "";
  document.getElementById('g-inv2').value = "";
  document.getElementById('g-inv3').value = "";
};


// Function to roll starting wealth
function getStartingWealth() {
  let gold = document.querySelector('#g-startingwealth');
  gold.value = Math.floor(Math.random() * 500) + ' gold pieces';
};
function removeOldStartingWealth() {
  document.getElementById('g-startingwealth').value = "";
};


// Function to execute all random functions on button click
function getNewCharacter() {
  getRace();
  getClass();
  // getSubClass();
  getBackground();
  getAttributes();
  // getMainWeapon();
  // getSecondWeapon();
  // getInventory();
  getStartingWealth();
  // getMotto();
};

function removeAllOld() {
  removeOldRace();
  removeOldClass();
  removeOldSubClass();
  removeOldBackground();
  removeOldMainWeapon();
  removeOldSecondWeapon();
  removeOldInventory();
  removeOldStartingWealth();
  removeOldMotto();
}

// Second API will draw and present quotes to further flesh out characters. These quotes will be presented as mottos.
// function getMotto() {

// };
function removeOldMotto() {
  document.getElementById('g-motto').value = "";
};


// For the art board, procure images
// Create array for images
// function getArt() {

// };

// Create function to pull random images from array
// Perhaps use variant of: https://stackoverflow.com/questions/9358090/show-random-images-from-a-folder-without-repeating-using-js-or-php