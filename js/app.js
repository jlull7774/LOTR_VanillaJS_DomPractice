console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`,
];

const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs"];

const lands = ["The-Shire", "Rivendell", "Mordor"];

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
  let middleEarth = document.createElement("section");

  middleEarth.id = "middle-earth";

  // 2. use a for loop to iterate over the lands array that does the following:
  for (let i = 0; i < lands.length; i++) {
    //   2a. creates an article tag (there should be one for each land when the loop is done)
    newArt = document.createElement("article");
    //   2b. gives each land article an `id` tag of the corresponding land name
    newArt.setAttribute("id", lands[i]);
    //   2c. includes an h1 with the name of the land inside each land article
    let h1 = document.createElement("h1");
    h1.innerText = lands[i];
    newArt.appendChild(h1);

    //   2d. appends each land to the middle-earth section
    middleEarth.appendChild(newArt);
    // 3. append the section to the body of the DOM.
  }
  document.querySelector("body").appendChild(middleEarth);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log("2: makeHobbits");
  let theShire = document.getElementById("The-Shire");
  let listHobbits = document.createElement("ul");
  listHobbits.id = "Hobbits";
  // display an `unordered list` of hobbits in the shire
  for (let i = 0; i < hobbits.length; i++) {
    // give each hobbit a class of `hobbit`
    const hobbitsList = document.createElement("li");
    hobbitsList.textContent = hobbits[i];
    hobbitsList.classList.add("hobbit");
    listHobbits.appendChild(hobbitsList);
    // hint: create a 'ul' outside the loop into which to append the 'li's
  }
  document.getElementById("The-Shire").append(listHobbits);
  // hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
  let theRing = document.createElement("id", "the-ring");
  // give the div a class of `'magic-imbued-jewelry'`
  theRing.classList.add("magic-imbued-jewlry");
  // add the ring as a child of `Frodo`
  let frodo = document.getElementsByClassName("hobbit")[0];
  frodo.appendChild(theRing);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor

	
	// give each of the baddies a class of "baddy"

	
	// remember to append them to Mordor
	const mordor = document.getElementById("Mordor");
	let listOfBaddies = document.createElement("ul");
	listOfBaddies.setAttribute("id", "Baddies");
	baddies.forEach(badGuy => {
		let baddiesList = document.createElement("li");
		baddiesList.setAttribute("class", "baddy");
		baddiesList.innerHTML = badGuy;
		listOfBaddies.append(baddiesList);
	})
	mordor.append(listOfBaddies);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log("5: makeBuddies");

  // create an `aside` tag
  let aside = document.createElement("aside");
  // put an `unordered list` of the `'buddies'` in the aside
  aside.id = "aside";
  const buddyList = document.createElement("ul");
  for (let i = 0; i < buddies.length; i++) {
    const buddy = document.createElement("li");
    buddy.textContent = buddies[i];
    buddyList.appendChild(buddy);
  }
  aside.appendChild(buddyList);
  // insert your aside as a child element of `rivendell`
  document.getElementById("Rivendell").appendChild(aside);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log("6: leaveTheShire");
  const rivendell = document.getElementById("Rivendell");
  const moveHobbits = document.getElementById("Hobbits");
  rivendell.append(moveHobbits);
  // assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log("7: beautifulStranger");

  // change the `'Strider'` text to `'Aragorn'`
  let strider = document.querySelector("#aside li:nth-child(4)");
  // The :nth-child selector allows you to select one or more elements based on their source order, according to a formula.
  strider.inner = "Aragorn";
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	

	// // create a new div called `'the-fellowship'` within `rivendell`
	let rivendell = document.getElementById("Rivendell");
	let the_fellowship = document.createElement("div");
	the_fellowship.setAttribute("id", "the-fellowship");

	rivendell.append(the_fellowship); 

	let theHobbits = document.getElementsByClassName("hobbit");
	let theBuddies  = document.getElementsByClassName("buddy");

	// // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// // after each character is added make an alert that they // have joined your party
	// get elements using class, add to new un list in the-fellowship, delete old ul

	for (let i = 0; i < theBuddies.length; i++) {
		let addBuddies = document.querySelector(`#buddies > li`);
		the_fellowship.appendChild(addBuddies);
		alert(`${addBuddies.innerText} has joined your party!`)
	}
	for (let i = 0; i < theHobbits.length; i++) {
		let addHobbits = document.querySelector(`#Hobbits > li`);
		the_fellowship.appendChild(addHobbits);
		alert(`${addHobbits.innerText} has joined your party!`)
	}
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	// apply the following style to the element, make the // background 'white', add a grey border
	let gandolf = document.querySelector("#the-fellowship li:nth-child(1)");
	gandolf.setAttribute("class", "buddy white");
	gandolf.innerText = "Gandalf the White";
	// apply the following style to the element, make the // background 'white', add a grey border √
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert("The horn of Gondor has beem blown!")
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	let boromir = document.querySelector("#the-fellowship li:nth-child(4)");
	boromir.remove();
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	let frodo = document.getElementsByClassName("hobbit")[0];
	let sam = document.getElementsByClassName("hobbit")[1];
	let mordor = document.getElementById("Mordor");

	mordor.appendChild(frodo);
	mordor.appendChild(sam);
	// add a div with an id of `'mount-doom'` to `Mordor`
	let mountDoom = document.createElement("div");
	mountDoom.setAttribute("id", "mount-doom")
	mordor.append(mountDoom)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  let gollum = document.createElement("div");
  gollum.id = "gollum";
  let theRing = document.getElementById("the-ring");
  gollum.append(theRing);
  document.getElementById("mount-doom").append(gollum);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
  // remove `Gollum` and `the Ring` from the document
  const gollum = document.getElementById("gollum");
  gollum.remove();

  // Move all the `hobbits` back to `the shire`
  const hobbitsList = document.createElement("ul");
  const merry = document.getElementById("Rivendell").querySelectorAll("li")[4];
  const pippin = document.getElementById("Rivendell").querySelectorAll("li")[5];
  const frodo = document.getElementById("Mordor").querySelectorAll("li")[4];
  const sam = document.getElementById("Mordor").querySelectorAll("li")[5];
  hobbitsList.appendChild(merry);
  hobbitsList.appendChild(pippin);
  hobbitsList.appendChild(frodo);
  hobbitsList.appendChild(sam);
  document.getElementById("The-Shire").appendChild(hobbitsList);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById("chapter-1").addEventListener("click", makeMiddleEarth);
document.getElementById("chapter-2").addEventListener("click", makeHobbits);
document
  .getElementById("chapter-3")
  .addEventListener("click", keepItSecretKeepItSafe);
document.getElementById("chapter-4").addEventListener("click", makeBaddies);
document.getElementById("chapter-5").addEventListener("click", makeBuddies);
document.getElementById("chapter-6").addEventListener("click", leaveTheShire);
document
  .getElementById("chapter-7")
  .addEventListener("click", beautifulStranger);
document
  .getElementById("chapter-8")
  .addEventListener("click", forgeTheFellowShip);
document.getElementById("chapter-9").addEventListener("click", theBalrog);
document.getElementById("chapter-10").addEventListener("click", hornOfGondor);
document
  .getElementById("chapter-11")
  .addEventListener("click", itsDangerousToGoAlone);
document.getElementById("chapter-12").addEventListener("click", weWantsIt);
document
  .getElementById("chapter-13")
  .addEventListener("click", thereAndBackAgain);
document.getElementById("all-chapters").addEventListener("click", () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  thereAndBackAgain();
});
