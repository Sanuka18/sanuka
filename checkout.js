// checkout.js
document.addEventListener('DOMContentLoaded', () => {
    const orderDetails = document.getElementById('order-details');
    const payButton = document.getElementById('pay-button');
    const successMessage = document.getElementById('success-message');
    const deliveryDateElement = document.getElementById('delivery-date');
    const checkoutForm = document.getElementById('checkout-form');

    

    // this is the order details
    const orderHTML = order.items
        .map(item => `<p>${item.name} - $${item.price.toFixed(2)}</p>`)
        .join("");
    orderDetails.innerHTML = `${orderHTML}<p><strong>Total: $${order.total.toFixed(2)}</strong></p>`;

    // Handle payment submission
    payButton.addEventListener('click', () => {
        if (checkoutForm.checkValidity()) {
            const currentDate = new Date();
            const deliveryDate = new Date(currentDate);
            deliveryDate.setDate(currentDate.getDate() + 3); // Delivery in 3 days

            deliveryDateElement.textContent = deliveryDate.toDateString();

            // Show success message and the hide form
            successMessage.classList.remove('hidden');
            checkoutForm.classList.add('hidden');
        } else {
            alert("Please fill in all required fields correctly.");
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const orderDetails = document.getElementById('order-details');
    const payButton = document.getElementById('pay-button');
    const successMessage = document.getElementById('success-message');
    const deliveryDateElement = document.getElementById('delivery-date');
    const checkoutForm = document.getElementById('checkout-form');

    // Retrieve cart and total from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = parseFloat(localStorage.getItem('total')) || 0;

    // this is the order details
    const orderHTML = cart
        .map(
            item => `
            <p>${item.name} (Quantity: ${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</p>`
        )
        .join("");
    orderDetails.innerHTML = `${orderHTML}<p><strong>Total: $${total.toFixed(2)}</strong></p>`;

    // Handle payment submission
    payButton.addEventListener('click', () => {
        if (checkoutForm.checkValidity()) {
            const currentDate = new Date();
            const deliveryDate = new Date(currentDate);
            deliveryDate.setDate(currentDate.getDate() + 3); // Delivery in 3 days

            deliveryDateElement.textContent = deliveryDate.toDateString();

            // Show success message and hide form
            successMessage.classList.remove('hidden');
            checkoutForm.classList.add('hidden');
        } else {
            alert("Please fill in all required fields correctly.");
        }
    });
});
