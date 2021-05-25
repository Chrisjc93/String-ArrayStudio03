const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//a) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodCabinet = food.split(",").sort();
let equipmentCabinet = equipment.split(",").sort();
let petsCabinet = pets.split(",").sort();
let sleepAidsCabinet = sleepAids.split(",").sort();

//b) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet];
console.log(cargoHold);


//c) Query the user to select a cabinet (0 - 3) in the cargoHold.
let selectedCabinet = Number(input.question(`Please select a cabinet from 1 - 4, 1 = foodCabinet , 2 = equipmentCabinet, 3 = petsCabinet, 4 = sleepAidsCabinet.`)) - 1;


/* while (Number(selectedCabinet) !== 0 || Number(selectedCabinet) !== 1 || Number(selectedCabinet) !== 2 || Number(selectedCabinet) !== 3  ) {
  selectedCabinet = Number(input.question(`Invalid selection! Please select a cabinet from 1 - 4, 1 = foodCabinet , 2 = equipmentCabinet, 3 = petsCabinet, 4 = sleepAidsCabinet. `)) -1;
  console.log(typeof(selectedCabinet)); 
} */ // ----------------------------- tried to make a while loop to keep asking the question if they entered an invalid answer, but it just kept getting stuck inside the loop regardless of input. I think I have the OR logic wrong.

//d) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.


//e) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
if (selectedCabinet === 0 || selectedCabinet === 1 || selectedCabinet === 2 || selectedCabinet === 3){
  console.log(`The contents of your selected cabinet are ${cargoHold[selectedCabinet]} `)
  let selectedItem = input.question(`Please select an item from ${cargoHold[selectedCabinet]} by typing the same of the item `);
if (cargoHold[selectedCabinet].includes(selectedItem)) {
  console.log(`Cabinet contains ${selectedItem} `)
} else {
  console.log(`Cabinet does not contain ${selectedItem} `)
}
} else {
  console.log(`Invalid input, please try again later.`)
}