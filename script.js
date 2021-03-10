const BaseURL = 'https://www.dnd5eapi.co/api/';

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

// Function to pick random class from API


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

let backgrounds = ['Acolyte', 'Charlatan', 'City Watch', 'City Watch (Investigator)', 'Clan Crafter', 'Cloistered Scholar', 'Courtier', 'Criminal', 'Criminal (Spy)', 'Entertainer', 'Entertainer (Gladiator)', 'Faction Agent', 'Far Traveler', 'Folk Hero', 'Guild Artisan', 'Guild Artisan (Guild Merchant)', 'Hermit', 'Inheritor', 'Knight of the Order', 'Mercenary Veteran', 'Noble', 'Noble (Knight)', 'Outlander', 'Sage', 'Sailor', 'Sailor (Pirate)', 'Soldier', 'Urban Bounty Hunter', 'Urchin'];

// Function to roll attributes

// Function to pick random languages

// Function to pick random main weapon

// Function to ick random secondary weapon

// Function to roll starting wealth

// Function to execute all random functions on button click


// Second API will draw and present quotes to further flesh out characters. These quotes will be presented as mottos.



// For the artboard, procure images
// Create array for images
// Create function to pull random images from array
// Perhaps use variant of: https://stackoverflow.com/questions/9358090/show-random-images-from-a-folder-without-repeating-using-js-or-php