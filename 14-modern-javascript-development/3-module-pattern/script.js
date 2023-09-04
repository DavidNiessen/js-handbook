'use strict';

// This is the before ES6 way to create encapsulated "modules"
const ShoppingCart = (function () {
    const items = [];
    const shippingCost = 5;

    const addToCart = function (item) {
        items.push(item);
    };
    
    const privateFunction = function () {
        console.log('I\'m private!');
    }

    return {
        items,
        shippingCost,
        addToCart
    };
})();

ShoppingCart.addToCart('Banana');
console.log(ShoppingCart.items);
// ShoppingCart.privateFunction(); NOT WORKING