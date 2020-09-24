export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) => 
cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state, 
        user: action.user,
      }

    case  'ADD_TO_CART':
      // Logic for adding item to cart
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case 'REMOVE_FROM_CART':
      // Logic for removing item from cart

      // Cloned the cart
      let newCart = [...state.cart];

      // checked to see if product exists
      const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);

      if (index >= 0) {
        // Items exists in cart, remove it...
        newCart.splice(index, 1);
      } else {
        console.warn (
          `Can't remove (id: ${action.id}) since it does not exist in your cart`
        );
      }

      return {
        ...state,
        cart: newCart
      };

      default:
        return state;
  }
}

export default reducer;
