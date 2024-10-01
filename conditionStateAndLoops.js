// Task 1 - set true to let other function pass - if set to false will display message (0$ no items) sorry, easy way out i know
let loggedIn = true; //change to false to not pass other loops

// Task 2 - Created list and loop and tried prompt, manually 

// list and cart
let produces = ['Apple', 'Pear', 'Banana', 'Mango'];
let cart = [];

// function to add item(produce), if logged in, to cart and adds array
const addToCart = (produce) => {
  if (loggedIn) {
    console.log(`${produce} has been added to your cart.`);
    cart.push(produce);
  } else {
    console.log("Please log in to add items to your cart.");
  }
};

// simulate a user responses for adding items to the cart 
let userResponses = ['yes', 'yes', 'yes', 'no'];

// display list of available items 1. 2. 3. 4. 
const displayProduces = () => {
  console.log("Available product:");
  produces.forEach((produce, index) => {
    console.log(`${index + 1}. ${produce}`);
  });
};

// asking the user for each produce if they want to add it to the cart
const promptToAddItems = () => {
  produces.forEach((produce, index) => {
    let userResponse = userResponses[index];
    console.log(`Would you like to add ${produce} to your cart? (yes or no): ${userResponse}`);
    if (userResponse.toLowerCase() === 'yes') {
      addToCart(produce);
    } else {
      console.log(`${produce} was not added.`);
    }
  });
};


// Task 3 - made list of prices and calculations

// prices for each produce in order
let prices = [2, 2.25, 2, 3];

// calculating the total cost of items in the cart if no items picked displays this message..
const calculateTotal = () => {
  if (cart.length === 0) {
    console.log("No items in the cart. Total cost is $0.");
    return;
  }

  // if items picked loops for each item in cart with the items indexOf to use numbers and adds the total of all prices togeter 
  let total = 0;
  cart.forEach((item) => {
    let producePrice = produces.indexOf(item);
    total += prices[producePrice];
  });
  console.log(`The total cost of your cart is: $${total}`);
};

// functions to display produces and add items to the cart
displayProduces();
promptToAddItems();
calculateTotal();

