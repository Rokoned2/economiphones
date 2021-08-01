export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const FETCH_FEAT_PRODUCTS = "FETCH_FEAT_PRODUCTS";

export const DECREASE = "DECREASE";
export const INCREASE = "INCREASE";
export const REMOVE = "REMOVE";
export const CLEAR_CART = "CLEAR_CART";
export const GET_TOTALS = "GET_TOTALS";
export const TOGGLE_AMOUNT = "TOGGLE_AMOUNT";
export const GET_CART_ITEMS = "GET_CART_ITEMS";

export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};

export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const AUTH_USER = "AUTH_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const ADD_TO_CART_USER = "ADD_TO_CART_USER";
export const GET_CART_ITEMS_USER = "GET_CART_ITEMS_USER";
export const REMOVE_CART_ITEM_USER = "REMOVE_CART_ITEM_USER";
export const ON_SUCCESS_BUY_USER = "ON_SUCCESS_BUY_USER";
