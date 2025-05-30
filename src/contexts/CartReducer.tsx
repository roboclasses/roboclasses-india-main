"use client";
import { CartState, Action } from "./CartTypes";

export const initialState: CartState = {
  cart:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart") || "[]")
      : [],
};
export const CartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart, action.product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };
    }
    case "REMOVE_FROM_CART": {
      const updatedCart = state.cart.filter(
        (product) => product.id !== action.productId
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return {
        ...state,
        cart: updatedCart,
      };
    }
    case "CLEAR_CART": {
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
};
