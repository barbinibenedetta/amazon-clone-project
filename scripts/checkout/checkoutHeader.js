import { calculateCartQuantity } from "../../data/cart.js";

export function renderCheckoutHeader() {
  const cartQuantity = calculateCartQuantity();

  const checkoutHeaderHTML = `
    Checkout 
    (<a class="return-to-home-link js-header-quantity"
    href="amazon.html">${cartQuantity}</a>items)
  `;

  document.querySelector('.js-checkout-header-middle-section').innerHTML = checkoutHeaderHTML;
}