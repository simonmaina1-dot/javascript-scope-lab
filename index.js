// Global Scope
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function Scope
function addBurger() {
    const newBurger = 'Flatburger';
    burgers.push(newBurger);
}

// Block Scope
if (true) {
    const anotherNewBurger = 'Maple Bacon Burger';
    burgers.push(anotherNewBurger);
}

// Update Global Variable
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}

module.exports = {
    burgers,
    featuredDrink,
    addBurger,
    changeFeaturedDrink
};
