# Project Overview

## Project Name

Charakterersteller (Working Name)

## Project Description

This project intends to serve as a foray into the realm of random character generators for the popular tabletop roleplaying game, Dungeons and Dragons. Interaction with this app will see users stepping away with the information they'd need to inhabit and develop a fledgling adventurer. Likewise, this project can be used by non-TTRPG users to generate characters for their next creative endeavor.

## API and Data Sample

Sample pulled from the public D&D 5e API.
```
{
	"index": "rogue",
	"name": "Rogue",
	"hit_die": 8,
	"proficiency_choices": [
		{
			"choose": 4,
			"type": "proficiencies",
			"from": [
				{
					"index": "skill-acrobatics",
					"name": "Skill: Acrobatics",
					"url": "/api/proficiencies/skill-acrobatics"
				}
```

## Wireframes

https://imgur.com/a/BG9Q1CI

#### MVP 

1. Built with HTML, CSS, and JavaScript.
2. Styled using Flexbox or Grid.
3. Use Axios to make a request to an external data source and insert some of the retrieved data on to the DOM.
4. Implement responsive design using at least one media query/breakpoint (i.e. desktop, tablet, mobile, etc).
5. Fulfill the build requirements you have specified in your MVP.
6. Deployed site to a hosting service like Github Pages.
7. Make commits to GitHub every day.
8. A README.md file that contains your project worksheet, a link to your live, deployed site, and any necessary installation instructions such as npm i.

#### PostMVP  

- Add second API (possibly a third).
- ~~Add a random art component to further inspiration.~~
- ~~Allow the user to download a .txt file including their randomly generated character.~~
- Add an instance of the ':hover' selector.
- Add links to external D&D resources that open in a new tab.

## Priority Matrix

https://miro.com/app/board/o9J_lQwWurk=/

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Fleshing out Concept | H | 2hrs| 2hrs | 2hrs |
| Setting up HTML | M | 2hrs | 4hrs | 4hrs |
| Adding Form w/ CSS | H | 4hrs | 6hrs | 6hrs |
| Procure Art | L | 2hrs | 1hrs | 1hrs |
| Non-API JS | M | 3hrs | 2hrs | 2hrs |
| Working with First API | H | 3hrs | 3hrs | 3hrs |
| Working with Second API | H | 3hrs | 1hrs | 1hrs |
| Post-API JS | H | 3hrs | 3hrs | 3hrs |
| Debugging | H | 4hrs | 3hrs | 3hrs |
| Post-MVP Goals | M | 6hrs | 5hrs | 8hrs |
| Post-MVP Debugging | M | 4hrs | 3hrs | 3hrs |
| Total |  | 36hrs |  | 36hrs |

## Code Snippet

The following snippet of code pulls the alignments array from the D&D5e API, pushes it into a math.random function, returns a random selection from said array, then posts it to the relevant text input. Likewise, this snippet also includes the function used to erase the previous alignment entry on each subsequent click of the generator button.

```
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
```

## Changelog

