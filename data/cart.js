export const cart = [];

export function addToCart(productId, quantity) {
  let matchingitem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingitem = cartItem;
    }
  });

  if (matchingitem) {
    matchingitem.quantity += quantity;
  } else {
    cart.push({
      productId,
      quantity
    });
  }
} 