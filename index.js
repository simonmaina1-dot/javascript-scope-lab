// Global Scope

// burgers is declared using const and initialized with 2 elements
const burgers = ['Hamburger', 'Cheeseburger'];

// featuredDrink is declared using let and initialized as a string
let featuredDrink = 'Strawberry Milkshake';

// Function Scope

// addBurger is a function
function addBurger() {
    // creates a function-scoped variable using const
    const newBurger = 'Flatburger';
    // adds newBurger to the burgers array
    burgers.push(newBurger);
}

// Block Scope

// if statement whose condition is true
if (true) {
    // creates a block-scoped variable using const
    const anotherNewBurger = 'Maple Bacon Burger';
    // adds anotherNewBurger to the burgers array
    burgers.push(anotherNewBurger);
}

// Function to change featuredDrink

// changeFeaturedDrink is a function
function changeFeaturedDrink() {
    // changes the value of the global featuredDrink variable
    featuredDrink = 'The JavaShake';
}

// Export for testing (Node.js)
module.exports = {
    burgers,
    featuredDrink,
    addBurger,
    changeFeaturedDrink
};
