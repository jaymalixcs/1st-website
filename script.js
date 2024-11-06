// Initialize or retrieve cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to the cart
function addToCart(name, image, price) {
    // Check if the item already exists in the cart
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        // Increase the quantity if the item is already in the cart
        existingItem.quantity += 1;
    } else {
        // Add the item as a new entry with a quantity of 1
        cart.push({ name, image, price, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} added to cart!`); // Optional alert to confirm item addition
}
