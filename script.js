const BaseURL = 'https://www.dnd5eapi.co/api/';

// D&D5e API Documentation: http://www.dnd5eapi.co/docs/

// Call the API on page load
// Call the API randomly on clicking generate
// Let API populate fields with relevant information
// Figure out how to let users download information as .txt document.
// Add icing to the cake.
// The cake is a lie...

window.onload = function () {
  grabDungeons();
}

async function grabDungeons() {
  try {
    let dungeons = await axios.get('https://www.dnd5eapi.co/api/');
    console.log(dungeons);
  } catch (err) {
    console.log(err.message);
  }
}

// Function to pick random race from API

// Function to pick random class from API

// Create Object with subclasses

// Create Object with backgrounds

// Function to roll attributes

// Function to pick random languages

// Function to pick random main weapon

// Function to ick random secondary weapon

// Function to roll starting wealth

// Function to execute all random functions on button click