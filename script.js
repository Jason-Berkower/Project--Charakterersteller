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

    let keys = Object.values(subClasses);
    // console.log(keys);
    for (let i = 0; i < keys.length; i++) {
      let classCompare = randomClass.index;
      // console.log(classCompare);
      if (keys.length[i] === classCompare) {
        let randomSubCl = keys[Math.floor(Math.random() * keys.length)];
        document.getElementById('g-subclass').value = randomSubCl;
        console.log(randomSubCl);
        break;
      } else {
        console.log('This is not working.');
        break;
      };
      // if (randomClass.index === keys[0]) {
      //   let randomSubClass = inventoryArr[Math.floor(Math.random() * inventoryArr.length)];
      //   document.getElementById('g-inv1').value = randomInventory1.index;
      // };
    };
  } catch (err) {
    console.log(err.message);
  };
};
function removeOldClass() {
  document.getElementById('g-class').value = "";
  document.getElementById('g-subclass').value = "";
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
  // getSubClass();
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
  // removeOldSubClass();
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


// For the art board, procure images
// Create array for images
// function getArt() {

// };

// Create function to pull random images from array
// Perhaps use variant of: https://stackoverflow.com/questions/9358090/show-random-images-from-a-folder-without-repeating-using-js-or-php