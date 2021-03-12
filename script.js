const BaseURL = 'https://www.dnd5eapi.co/api/';
const btn1 = document.querySelector('#generate');

// D&D5e API Documentation: http://www.dnd5eapi.co/docs/

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


let barbarian = ['Ancestral Guardian', 'Beast', 'Berserker', 'Storm Herald', 'Totem Warrior', 'Wild Magic', 'Zealot'];
let bard = ['College of Creation', 'College of Eloquence', 'College of Glamour', 'College of Lore', 'College of Swords', 'College of Valor', 'College of Whispers'];
let cleric = ['Arcana Domain', 'Death Domain', 'Forge Domain', 'Grave Domain', 'Knowledge Domain', 'Life Domain', 'Light Domain', 'Nature Domain', 'Order Domain', 'Peace Order', 'Tempest Domain', 'Trickery Domain', 'Twilight Domain', 'War Domain'];
let druid = ['Circle of Dreams', 'Circle of the Land', 'Circle of the Moon', 'Circle of the Shepherd', 'Circle of Spores', 'Circle of Stars', 'Circle of Wildfire'];
let fighter = ['Arcane Archer', 'Battle Master', 'Cavalier', 'Champion', 'Echo Knight', 'Eldritch Knight', 'Psi Warrior', 'Purple Dragon Knight', 'Rune Knight', 'Samurai'];
let monk = ['Tradition of the Astral Self', 'Tradition of the Drunken Master', 'Tradition of the Four Elements', 'Tradition of the Kensai', 'Tradition of the Long Death', 'Tradition of Mercy', 'Tradition of the Open Hand', 'Tradition of the Shadow', 'Tradition of the Sun Soul'];
let paladin = ['Oath of the Ancients', 'Oath of Conquest', 'Oath of the Crown', 'Oath of Devotion', 'Oath of Glory', 'Oathbreaker', 'Oath of Redemption', 'Oath of Vengeance', 'Oath of the Watchers'];
let ranger = ['Beast Master', 'Fey Wanderer', 'Gloom Stalker', 'Horizon Walker', 'Hunter', 'Monster Slayer', 'Swarmkeeper'];
let rogue = ['Arcane Trickster', 'Assassin', 'Inquisitive', 'Mastermind', 'Phantom', 'Scout', 'Soulknife', 'Swashbuckler', 'Thief'];
let sorcerer = ['Aberrant Mind', 'Clockwork Soul', 'Divine Soul', 'Draconic', 'Shadow', 'Storm', 'Wild'];
let warlock = ['Archfey Patron', 'Celestial Patron', 'Fathomless Patron', 'Fiend Patron', 'Genie Patron', 'Great Old One Patron', 'Hexblade', 'Undying Patron'];
let wizard = ['Tradition of Abjuration', 'Tradition of Chronurgy', 'Tradition of Conjuration', 'Tradition of Divination', 'Tradition of Enchantment', 'Tradition of Evocation', 'Tradition of Graviturgy', 'Tradition of Illusion', 'Tradition of Necromancy', 'Tradition of the Scribes', 'Tradition of Transmutation', 'Tradition of War'];

// Function to pick random class from API
async function getClass() {
  try {
    let dClass = await axios.get('https://www.dnd5eapi.co/api/classes');
    let classArr = dClass.data.results;
    let randomClass = classArr[Math.floor(Math.random() * classArr.length)];
    document.getElementById('g-class').value = randomClass.index;
    let currentClass = randomClass.index;
    if (currentClass === 'barbarian') {
      let randomSubCl = barbarian[Math.floor(Math.random() * barbarian.length)];
      document.getElementById('g-subclass').value = randomSubCl;
    } else if (currentClass === 'bard') {
      let randomSubCl = bard[Math.floor(Math.random() * bard.length)];
      document.getElementById('g-subclass').value = randomSubCl;
    } else if (currentClass === 'cleric') {
      let randomSubCl = cleric[Math.floor(Math.random() * cleric.length)];
      document.getElementById('g-subclass').value = randomSubCl;
    } else if (currentClass === 'druid') {
      let randomSubCl = druid[Math.floor(Math.random() * druid.length)];
      document.getElementById('g-subclass').value = randomSubCl;
    } else if (currentClass === 'fighter') {
      let randomSubCl = fighter[Math.floor(Math.random() * fighter.length)];
      document.getElementById('g-subclass').value = randomSubCl;
    } else if (currentClass === 'monk') {
      let randomSubCl = monk[Math.floor(Math.random() * monk.length)];
      document.getElementById('g-subclass').value = randomSubCl;
    } else if (currentClass === 'paladin') {
      let randomSubCl = paladin[Math.floor(Math.random() * paladin.length)];
      document.getElementById('g-subclass').value = randomSubCl;
    } else if (currentClass === 'ranger') {
      let randomSubCl = ranger[Math.floor(Math.random() * ranger.length)];
      document.getElementById('g-subclass').value = randomSubCl;
    } else if (currentClass === 'rogue') {
      let randomSubCl = rogue[Math.floor(Math.random() * rogue.length)];
      document.getElementById('g-subclass').value = randomSubCl;
    } else if (currentClass === 'sorcerer') {
      let randomSubCl = sorcerer[Math.floor(Math.random() * sorcerer.length)];
      document.getElementById('g-subclass').value = randomSubCl;
    } else if (currentClass === 'warlock') {
      let randomSubCl = warlock[Math.floor(Math.random() * warlock.length)];
      document.getElementById('g-subclass').value = randomSubCl;
    } else if (currentClass === 'wizard') {
      let randomSubCl = wizard[Math.floor(Math.random() * wizard.length)];
      document.getElementById('g-subclass').value = randomSubCl;
    } else {
      console.log('Something went wrong!');
    };
  } catch (err) {
    console.log(err.message);
  };
};
function removeOldClass() {
  document.getElementById('g-class').value = "";
  document.getElementById('g-subclass').value = "";
};


// Function to roll alignment
async function getAlignment() {
  try {
    let dAlign = await axios.get('https://www.dnd5eapi.co/api/alignments');
    let alignArr = dAlign.data.results;
    let randomAlignment = alignArr[Math.floor(Math.random() * alignArr.length)];
    document.getElementById('g-alignment').value = randomAlignment.index;
  } catch (err) {
    console.log(err.message);
  };
};
function removeOldAlignment() {
  document.getElementById('g-alignment').value = "";
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
  strength.value = `${Math.floor(Math.random() * 10) + 8} Strength`;
  let dexterity = document.querySelector('#g-attDex');
  dexterity.value = `${Math.floor(Math.random() * 10) + 8} Dexterity`;
  let constitution = document.querySelector('#g-attCon');
  constitution.value = `${Math.floor(Math.random() * 10) + 8} Constitution`;
  let intelligence = document.querySelector('#g-attInt');
  intelligence.value = `${Math.floor(Math.random() * 10) + 8} Intelligence`;
  let wisdom = document.querySelector('#g-attWis');
  wisdom.value = `${Math.floor(Math.random() * 10) + 8} Wisdom`;
  let charisma = document.querySelector('#g-attCha');
  charisma.value = `${Math.floor(Math.random() * 10) + 8} Charisma`;
};


// Function to pick random main weapon and random secondary weapon
let weaponArr = ['battleaxe', 'blowgun', 'club', 'crossbow, hand', 'crossbow, heavy', 'crossbow, light', 'dagger', 'dart', 'flail', 'glaive', 'greataxe', 'greatclub', 'greatsword', 'halberd', 'handaxe', 'javelin', 'light hammer', 'lance', 'longbow', 'longsword', 'mace', 'maul', 'morningstar', 'net', 'pike', 'quarterstaff', 'rapier', 'scimitar', 'shortbow', 'shortsword', 'sickle', 'sling', 'spear', 'trident', 'war pick', 'warhammer', 'whip']
function getMainWeapon() {
  let randomMainWeapon = weaponArr[Math.floor(Math.random() * weaponArr.length)];
  let randomSecondWeapon = weaponArr[Math.floor(Math.random() * weaponArr.length)];
  document.getElementById('g-mainweapon').value += randomMainWeapon;
  document.getElementById('g-secondweapon').value += randomSecondWeapon;
};
function removeOldMainWeapon() {
  document.getElementById('g-mainweapon').value = "";
  document.getElementById('g-secondweapon').value = "";
};


// Function to populate the inventory slots
async function getInventory() {
  let dInventory = await axios.get('https://www.dnd5eapi.co/api/equipment');
  let inventoryArr = dInventory.data.results;
  let randomInventory1 = inventoryArr[Math.floor(Math.random() * inventoryArr.length)];
  let randomInventory2 = inventoryArr[Math.floor(Math.random() * inventoryArr.length)];
  let randomInventory3 = inventoryArr[Math.floor(Math.random() * inventoryArr.length)];
  document.getElementById('g-inv1').value = randomInventory1.index;
  document.getElementById('g-inv2').value = randomInventory2.index;
  document.getElementById('g-inv3').value = randomInventory3.index;
};
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
  getAlignment();
  getBackground();
  getAttributes();
  getMainWeapon();
  getInventory();
  getStartingWealth();
  getMotto();
};

function removeAllOld() {
  removeOldRace();
  removeOldClass();
  removeOldAlignment();
  removeOldBackground();
  removeOldMainWeapon();
  removeOldInventory();
  removeOldStartingWealth();
  removeOldMotto();
}

// Second API will draw and present quotes to further flesh out characters. These quotes will be presented as mottos.
async function getMotto() {
  try {
    let nMottos = await axios.get('https://api.quotable.io/random');
    let postMotto = nMottos.data.content;
    document.getElementById('g-motto').value = postMotto;
  } catch (err) {
    console.log(err.message);
  }
}
function removeOldMotto() {
  document.getElementById('g-motto').value = "";
};
