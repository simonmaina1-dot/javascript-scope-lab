

// Step 1: Global Scope Variables
let burgers = ['Hamburger', 'Cheeseburger']; // global scope
let featuredDrink = 'Strawberry Milkshake'; // global scope

// Step 2: Function and Function-Scoped Variable
function addBurger() {
    let newBurger = 'Flatburger'; // function-scoped variable
    burgers.push(newBurger);
}

// Step 3: Block Scope
if (true) { // block that always executes
    let anotherNewBurger = 'Maple Bacon Burger'; // block-scoped variable
    burgers.push(anotherNewBurger);
}

// Function to change the featured drink
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake'; // updates global variable
}

// Example calls to see results (optional for testing)
console.log('Burgers before adding Flatburger:', burgers);
addBurger();
console.log('Burgers after adding Flatburger:', burgers);
console.log('Featured drink before change:', featuredDrink);
changeFeaturedDrink();
console.log('Featured drink after change:', featuredDrink);
