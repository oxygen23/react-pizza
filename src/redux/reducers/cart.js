const initialState = {
  items: {},
  totalCount: 0,
  totalPrice: 0,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART': {
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };

      const allPizzas = [].concat.apply([], Object.values(newItems));

      const totalCount = allPizzas.length;

      const totalPrice = allPizzas.reduce((sum, obj) => obj.price + sum, 0);

      return {
        ...state,
        items: newItems,
        totalCount: totalCount,
        totalPrice: totalPrice,
      };
    }
    default:
      return state;
  }
};

export default cart;
