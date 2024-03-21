export const addToDecimals = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2);
};

export const updateCart = (state) => {
  state.itemsPrice = addToDecimals(
    state.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  state.shippingPrice = addToDecimals(state.itemsPrice > 500 ? 0 : 100);
  state.taxPrice = addToDecimals(state.itemsPrice * 0.15);
  state.totalPrice = (
    +state.itemsPrice +
    +state.shippingPrice +
    +state.taxPrice
  ).toFixed(2);
  localStorage.setItem("cart", JSON.stringify(state));

  return state;
};

export default updateCart;
