import { toast } from "sonner";

const cartReducer: CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const updatedTotalAmount =
        state.totalAmount + action.item.price * action.item.quantity;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      let updatedItems: CartItem[];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + action.item.quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      const updatedState = {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedState));

      toast("Item added to cart", {
        description: `${action.item.name}, ${action.item.quantity} units ${action.item.price} each`,
        action: {
          label: "Go to cart",
          onClick: () => (window.location.href = "/cart"),
        },
      });

      return updatedState;
    }

    case "REMOVE_ITEM": {
      const itemIndex = state.items.findIndex((item) => item.id === action.id);
      const itemToRemove = state.items[itemIndex];
      const updatedAmount = state.totalAmount - itemToRemove.price;
      let updatedCartItems;

      if (itemToRemove.quantity === 1) {
        updatedCartItems = state.items.filter((item) => item.id !== action.id);
      } else {
        const updatedItem = {
          ...itemToRemove,
          quantity: itemToRemove.quantity - 1,
        };
        updatedCartItems = [...state.items];
        updatedCartItems[itemIndex] = updatedItem;
      }

      const updatedState = {
        items: updatedCartItems,
        totalAmount: updatedAmount,
      };

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedState));

      return updatedState;
    }

    case "CLEAR_CART": {
      const clearedState = { items: [], totalAmount: 0 };

      // Clear from localStorage
      localStorage.setItem("cart", JSON.stringify(clearedState));

      return clearedState;
    }

    case "UPDATE_ITEM": {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id
      );

      const existingCartItem = state.items[existingCartItemIndex];

      const amountWithoutOldItem =
        state.totalAmount - existingCartItem.price * existingCartItem.quantity;

      const updatedTotalAmount =
        amountWithoutOldItem + action.item.price * action.item.quantity;

      let updatedItems: CartItem[];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: action.item.quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.item);
      }

      const updatedState = {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };

      // Save to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedState));

      return updatedState;
    }

    default:
      return state;
  }
};

export default cartReducer;
