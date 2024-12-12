document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    document.querySelector('.checkout').addEventListener('click', () => {
        localStorage.setItem('cart', JSON.stringify(cart)); // this to Save cart items
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        localStorage.setItem('total', total.toFixed(2)); // to save total
        window.location.href = './checkout.html'; 
    });
    

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const medicineName = e.target.closest('.medicine-card').querySelector('h4').textContent;
            alert(`${medicineName} has been added to your cart!`);
        });
    });
});


const cart = [];
const cartItemsContainer = document.querySelector('.cart-items');
const cartTotalElement = document.querySelector('.cart-total');

function updateCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const cartRow = document.createElement('tr');
        cartRow.innerHTML = `
            <td>${item.name}</td>
             <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td><button class="remove-item" data-index="${index}">Remove</button></td>
        `;
        cartItemsContainer.appendChild(cartRow);
    });

    cartTotalElement.textContent = total.toFixed(2);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.medicine-card');
        const name = card.getAttribute('data-name');
        const price = parseFloat(card.getAttribute('data-price'));
        const inputField = card.querySelector('input');
        const quantity = inputField.value;  
        cart.push({ name, price, quantity });
        updateCart();
    });
});

cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-item')) {
        const index = e.target.getAttribute('data-index');
        cart.splice(index, 1);
        updateCart();
    }
});

document.querySelector('.checkout').addEventListener('click', () => {
    window.location.href = './checkout.html'
    updateCart();
});

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cart = [];
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalElement = document.querySelector('.cart-total');

    // Function to update the cart UI
    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price * item.quantity;
            const cartRow = document.createElement('tr');
            cartRow.innerHTML = `
                <td>${item.name}</td>
                   <td>${item.quantity}</td>
                <td>$${item.price.toFixed(2)}</td>
                <td><button class="remove-item" data-index="${index}">Remove</button></td>
            `;
            cartItemsContainer.appendChild(cartRow);
        });

        cartTotalElement.textContent = total.toFixed(2);
    }

    // Event listener for adding to cart
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const card = e.target.closest('.medicine-card');
            const name = card.getAttribute('data-name');
            const price = parseFloat(card.getAttribute('data-price'));
            const inputField = card.querySelector('input');
            const quantity = inputField.value;  
        
            
            if (name && !isNaN(price)) {
                cart.push({ name, price, quantity });
                updateCart();

            } else {
                alert('Error: Product information is missing or invalid.');
            }
        });
    });

    // The event listener for removing items from the cart
    cartItemsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('remove-item')) {
            const index = e.target.getAttribute('data-index');
            cart.splice(index, 1);
            updateCart();
        }
    });

});


// Save and Apply Favorites to LocalStorage
document.getElementById("save-to-favourites").addEventListener("click", () => {
    localStorage.setItem("favorites", JSON.stringify(cart));  // Save to favorites
    alert("Favorites Saved!");
});

document.getElementById("apply-favourites").addEventListener("click", () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    cart.length = 0;  // Clear current cart
    favorites.forEach(item => cart.push(item));  // Load favorites into cart
    updateCart();  // Update cart display
});

cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const cartRow = document.createElement('tr');
    cartRow.innerHTML = `
        <td>${item.name}</td>
        <td>hello</td>
        <td>${item.quantity}</td>
        <td>$${(item.price * item.quantity).toFixed(2)}</td>
        <td><button class="remove-item" data-index="${index}">Remove</button></td>
    `;
    cartItemsContainer.appendChild(cartRow);

});


