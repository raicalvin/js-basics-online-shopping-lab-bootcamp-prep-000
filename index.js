var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let newItem = new Object();
 newItem['itemName'] = item;
 newItem['itemPrice'] = getRandomPrice();
 cart.push(newItem);
 return `${newItem['itemName']} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (!cart.length) {
    return 'Your shopping cart is empty.'
  } else {
    let cartLength = cart.length;
    let cartContents = 'In your cart, you have ';
    let oxfordComma = '.';
    for (let i = 0; i < cartLength; i++) {
        if (cartLength === 1) {
          cartContents += `${cart[i].itemName} at $${cart[i].itemPrice}${oxfordComma}`;
        } else if (cartLength > 1) {
          oxfordComma = ', ';
          if (cartLength - i == 2) {
            oxfordComma = ', and ';
          } else {
            oxfordComma = ', ';
            if (cartLength - i === 1) {
              oxfordComma = '.';
            }
          }
          cartContents += `${cart[i].itemName} at $${cart[i].itemPrice}${oxfordComma}`;
        }
    }
    return cartContents;
  }
}

function total() {
  // write your code here
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].itemPrice;
  }
  return totalPrice;
}

function removeFromCart(item) {
  // write your code here
  var indexOfItemToRemove = cart.map(function(obj) {return obj.itemName}).indexOf(item);
  if (indexOfItemToRemove === -1) {
    return 'That item is not in your cart.';
  } else {
    cart.splice(indexOfItemToRemove, 1);
  }
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber != null) {
    let totalPrice = total();
    let confirmation = `Your total cost is $${totalPrice}, which will be charged to the card ${cardNumber}.`
  }
}

function getRandomPrice() {
  return Math.floor(Math.random() * (100 - 1)) + 1;
}